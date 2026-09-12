# Render all three profiles in separate scratch directories. No publication.
rscript <- file.path(R.home("bin"), "Rscript.exe")
pandoc <- rmarkdown::find_pandoc()$dir
shell <- Sys.which("pwsh")
stopifnot(nzchar(shell), file.exists("scripts/build.ps1"))
scratch <- tempfile("FundamentosInferencia-")
dir.create(scratch)
statuses <- integer()
for (profile in c("html", "theory", "exercises")) {
  status <- system2(shell, c("-NoProfile", "-File", shQuote(normalizePath("scripts/build.ps1")),
    "-Repository", shQuote(getwd()), "-Profile", profile,
    "-ScratchDirectory", shQuote(file.path(scratch, profile)),
    "-Rscript", shQuote(rscript), "-PandocDirectory", shQuote(pandoc)))
  cat("Profile:", profile, "process status:", status, "\n")
  statuses <- c(statuses, status)
}
cat("Inspect artefacts and result.json under:", scratch, "\n")
if (any(statuses != 0L)) stop("Nonzero process status: inspect logs and the documented environment exception.")
