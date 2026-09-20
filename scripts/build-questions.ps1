[CmdletBinding()]
param(
    [Parameter(Mandatory)][string]$CanonicalSource,
    [Parameter(Mandatory)][string]$OutputPath
)

$ErrorActionPreference = 'Stop'
if (!(Test-Path -LiteralPath $CanonicalSource)) { throw "Canonical question source not found: $CanonicalSource" }

$source = Get-Content -LiteralPath $CanonicalSource -Raw -Encoding utf8 | ConvertFrom-Json
$questions = @($source.bank.questions)
if ($questions.Count -ne 40) { throw "Expected 40 questions; found $($questions.Count)." }
if ((@($questions.id | Sort-Object -Unique)).Count -ne 40) { throw 'Question IDs must be unique.' }
foreach ($question in $questions) {
    if (@($question.options_es).Count -ne 4) { throw "$($question.id) does not have four options." }
    if ($question.correct -notin @('a', 'b', 'c', 'd')) { throw "$($question.id) has an invalid correct option." }
}

$public = [ordered]@{
    unit = $source.bank.unit
    questions = @($questions | ForEach-Object {
        $item = [ordered]@{
            id = $_.id
            topic = $_.topic
            difficulty = $_.difficulty
            question = $_.question_es
            options = @($_.options_es)
            correct = $_.correct
        }
        if ($null -ne $_.explanation_es -and $_.explanation_es -ne '') { $item.explanation = $_.explanation_es }
        [pscustomobject]$item
    })
}

$directory = Split-Path -Parent $OutputPath
New-Item -ItemType Directory -Path $directory -Force | Out-Null
$public | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $OutputPath -Encoding utf8
Write-Output "Public question JSON: $OutputPath ($($questions.Count) questions)"
