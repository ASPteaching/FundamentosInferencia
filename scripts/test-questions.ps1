[CmdletBinding()]
param()
$ErrorActionPreference = 'Stop'
$bankRoot = Join-Path (Split-Path (Split-Path $PSScriptRoot -Parent) -Parent) 'FundamentosInferencia-QuestionBank'
$tempRoot = Join-Path ([IO.Path]::GetTempPath()) ('questions-test-' + [guid]::NewGuid())
New-Item -ItemType Directory -Path $tempRoot | Out-Null
try {
    foreach ($unit in @('Unidad_01','Unidad_02')) {
        $inputPath = Join-Path $bankRoot "$unit\questions.yml"
        $source = Get-Content -LiteralPath $inputPath -Raw -Encoding utf8 | ConvertFrom-Json
        $output = Join-Path $tempRoot "$unit.json"
        & "$PSScriptRoot/build-questions.ps1" -CanonicalSource $inputPath -OutputPath $output
        $actual = Get-Content -LiteralPath $output -Raw -Encoding utf8 | ConvertFrom-Json
        $expected = @($source.bank.questions | Where-Object visibility -EQ 'self_assessment')
        $jsOutput = Join-Path $tempRoot "$unit.js"
        & "$PSScriptRoot/build-questions.ps1" -CanonicalSource $inputPath -OutputPath $jsOutput
        $script = Get-Content -LiteralPath $jsOutput -Raw -Encoding utf8
        $dataStart = $script.IndexOf(' = ') + 3
        $jsData = $script.Substring($dataStart).Trim().TrimEnd(';') | ConvertFrom-Json
        if (($jsData | ConvertTo-Json -Depth 8 -Compress) -cne ($actual | ConvertTo-Json -Depth 8 -Compress)) { throw 'JS/JSON payload mismatch.' }
        if ($actual.questions.Count -ne 40) { throw 'Regression: expected 40 public questions.' }
        for ($i=0; $i -lt $expected.Count; $i++) {
            $q = $actual.questions[$i]; $original = $expected[$i]
            foreach ($pair in @(@('id','id'),@('topic','topic'),@('difficulty','difficulty'),@('question','question_es'),@('correct','correct'))) {
                if ($q.($pair[0]) -cne $original.($pair[1])) { throw "Export regression: $($original.id) $($pair[0])" }
            }
            if (($q.options | ConvertTo-Json -Compress) -cne ($original.options_es | ConvertTo-Json -Compress)) { throw 'Option regression.' }
            if ($q.explanation -cne $original.explanation_es) { throw 'Explanation regression.' }
            if ($q.PSObject.Properties.Name -contains 'original_html') { throw 'Private source leaked.' }
        }
    }
    # A bank of two questions must work; private questions must not be exported.
    $source.bank.questions = @($source.bank.questions[0],$source.bank.questions[1])
    $source.bank.questions[1].visibility = 'private'
    $fixture = Join-Path $tempRoot 'fixture.json'
    $source | ConvertTo-Json -Depth 15 | Set-Content -LiteralPath $fixture -Encoding utf8
    & "$PSScriptRoot/build-questions.ps1" -CanonicalSource $fixture -OutputPath $output
    $actual = Get-Content -LiteralPath $output -Raw -Encoding utf8 | ConvertFrom-Json
    if ($actual.questions.Count -ne 1 -or $actual.questions[0].id -ne $source.bank.questions[0].id) { throw 'Visibility/count regression.' }
    $source.bank.questions[1].id = $source.bank.questions[0].id
    $source | ConvertTo-Json -Depth 15 | Set-Content -LiteralPath $fixture -Encoding utf8
    $rejected = $false
    try { & "$PSScriptRoot/build-questions.ps1" -CanonicalSource $fixture -OutputPath $output } catch { $rejected = $_.Exception.Message -match 'unique' }
    if (!$rejected) { throw 'Duplicate IDs were not rejected.' }
    Write-Output 'PASS: U1/U2 JS/JSON export equivalence, explanations, visibility, arbitrary counts, duplicate rejection.'
} finally {
    # This exact temporary directory was created above and contains only test fixtures.
    if ((Split-Path $tempRoot -Parent) -ne [IO.Path]::GetTempPath().TrimEnd('\')) { throw 'Unexpected temp root.' }
    Remove-Item -LiteralPath $tempRoot -Recurse -Force
}
