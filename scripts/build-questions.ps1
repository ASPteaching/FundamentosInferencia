[CmdletBinding()]
param(
    [Parameter(Mandatory)][string]$CanonicalSource,
    [Parameter(Mandatory)][string]$OutputPath
)

$ErrorActionPreference = 'Stop'
if (!(Test-Path -LiteralPath $CanonicalSource)) { throw "Canonical question source not found: $CanonicalSource" }

$source = Get-Content -LiteralPath $CanonicalSource -Raw -Encoding utf8 | ConvertFrom-Json
$questions = @($source.bank.questions)
if (!$questions.Count) { throw 'Question bank must not be empty.' }
if ((@($questions.id | Sort-Object -Unique)).Count -ne $questions.Count) { throw 'Question IDs must be unique.' }
foreach ($question in $questions) {
    if ($question.id -notmatch '^[A-Za-z0-9_-]+$') { throw 'Invalid question ID.' }
    if ($question.unit -ne $source.bank.unit) { throw "$($question.id) belongs to another unit." }
    if ([string]::IsNullOrWhiteSpace($question.question_es) -or [string]::IsNullOrWhiteSpace($question.topic)) { throw 'Question and topic must be present.' }
    if (@($question.options_es).Count -ne 4) { throw "$($question.id) does not have four options." }
    if (@($question.options_es | Where-Object { [string]::IsNullOrWhiteSpace($_) }).Count) { throw 'Empty option.' }
    if ($question.correct -notin @('a', 'b', 'c', 'd')) { throw "$($question.id) has an invalid correct option." }
    if ($question.visibility -notin @('self_assessment', 'private', 'assessment')) { throw "$($question.id) has an invalid visibility value." }
}
$publicQuestions = @($questions | Where-Object { $_.visibility -eq 'self_assessment' })
if (!$publicQuestions.Count) { throw 'No self-assessment questions are available for export.' }

$public = [ordered]@{
    unit = $source.bank.unit
    questions = @($publicQuestions | ForEach-Object {
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
$payload = $public | ConvertTo-Json -Depth 5
if ([IO.Path]::GetExtension($OutputPath) -eq '.js') {
    $key = [IO.Path]::GetFileName($OutputPath) | ConvertTo-Json -Compress
    $payload = "window.questionData.banks[$key] = $payload;"
}
$payload | Set-Content -LiteralPath $OutputPath -Encoding utf8
Write-Output "Public question data: $OutputPath ($($publicQuestions.Count) self-assessment questions)"
