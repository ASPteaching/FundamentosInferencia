# Run one existing book/format in a fresh scratch directory; never publish.
[CmdletBinding()]
param(
    [Parameter(Mandatory)][string]$Repository,
    [Parameter(Mandatory)][ValidateSet('html','pdf')][string]$Format,
    [Parameter(Mandatory)][string]$ScratchDirectory,
    [Parameter(Mandatory)][string]$Rscript,
    [Parameter(Mandatory)][string]$PandocDirectory
)
$ErrorActionPreference = 'Stop'
$sourceRoot = (Resolve-Path -LiteralPath $Repository).Path
$scratchRoot = [IO.Path]::GetFullPath($ScratchDirectory)
if ($scratchRoot.StartsWith($sourceRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase) -or $scratchRoot -eq $sourceRoot) {
    throw 'Scratch must be outside the source repository.'
}
if (Test-Path -LiteralPath $scratchRoot) { throw 'Use a new scratch directory for every run.' }
if (!(Test-Path -LiteralPath $Rscript) -or !(Test-Path -LiteralPath (Join-Path $PandocDirectory 'pandoc.exe'))) {
    throw 'Rscript or Pandoc executable not found.'
}
# These books have an explicit, flat list. Fail closed on another YAML layout.
$chapters = @(Get-Content -LiteralPath (Join-Path $sourceRoot '_bookdown.yml') |
    Where-Object { $_ -match '^  - .+\.Rmd\s*$' } |
    ForEach-Object { $_.Substring(4).Trim() })
if (!$chapters.Count -or $chapters[0] -ne 'index.Rmd') { throw 'Expected explicit rmd_files starting with index.Rmd.' }
$inputs = @('_bookdown.yml', '_output.yml') + $chapters
$inputs += @(Get-ChildItem -LiteralPath $sourceRoot -File | Where-Object { $_.Extension -in '.css','.bib' } | ForEach-Object Name)
foreach ($relative in $inputs) {
    if (![IO.File]::Exists((Join-Path $sourceRoot $relative))) { throw "Missing input: $relative" }
}
New-Item -ItemType Directory -Path $scratchRoot | Out-Null
$work = Join-Path $scratchRoot 'work'
New-Item -ItemType Directory -Path $work | Out-Null
foreach ($relative in $inputs) {
    # Use the actual filename on disk; do not mask a manifest case mismatch.
    $item = Get-Item -LiteralPath (Join-Path $sourceRoot $relative)
    Copy-Item -LiteralPath $item.FullName -Destination (Join-Path $work $item.Name)
}
foreach ($assetDir in @('images','Rcode','htmlWidgets')) {
    $assetPath = Join-Path $sourceRoot $assetDir
    if (Test-Path -LiteralPath $assetPath) { Copy-Item -LiteralPath $assetPath -Destination $work -Recurse }
}
function Get-Manifest([string]$Directory) {
    @(Get-ChildItem -LiteralPath $Directory -Recurse -File | ForEach-Object {
        [pscustomobject]@{
            Path = [IO.Path]::GetRelativePath($Directory, $_.FullName).Replace('\','/')
            Bytes = $_.Length
            SHA256 = (Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256).Hash
        }
    })
}
$before = Get-Manifest $work
$before | Export-Csv -LiteralPath (Join-Path $scratchRoot 'inputs.csv') -NoTypeInformation -Encoding utf8
$oldPandoc = $env:RSTUDIO_PANDOC
$oldLocale = $env:LC_ALL
try {
    $env:RSTUDIO_PANDOC = (Resolve-Path -LiteralPath $PandocDirectory).Path
    # C.UTF-8 inherited from the host is not a valid Windows R locale.
    $env:LC_ALL = 'English_United States.utf8'
    & $Rscript --vanilla (Join-Path $PSScriptRoot 'baseline-render.R') $work $Format *> (Join-Path $scratchRoot 'render.log')
    $renderExit = $LASTEXITCODE
} finally {
    $env:RSTUDIO_PANDOC = $oldPandoc
    $env:LC_ALL = $oldLocale
}
$after = Get-Manifest $work
$after | Export-Csv -LiteralPath (Join-Path $scratchRoot 'outputs.csv') -NoTypeInformation -Encoding utf8
$previous = @{}
foreach ($row in $before) { $previous[$row.Path] = $row.SHA256 }
$changes = @(foreach ($row in $after) {
    if (!$previous.ContainsKey($row.Path) -or $previous[$row.Path] -ne $row.SHA256) {
        [pscustomobject]@{Path=$row.Path; Change=$(if($previous.ContainsKey($row.Path)){'modified'}else{'created'}); Bytes=$row.Bytes; SHA256=$row.SHA256}
    }
})
$changes | Export-Csv -LiteralPath (Join-Path $scratchRoot 'changes.csv') -NoTypeInformation -Encoding utf8
Write-Output "Repository: $sourceRoot"
Write-Output "Scratch: $scratchRoot"
Write-Output "Format: $Format; exit: $renderExit; files created/modified: $($changes.Count)"
Get-Content -LiteralPath (Join-Path $scratchRoot 'render.log') -Tail 35
exit $renderExit
