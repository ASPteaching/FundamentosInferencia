# Phase 1: one existing book/format, already copied to scratch.
args <- commandArgs(trailingOnly = TRUE)
stopifnot(length(args) == 2L, args[2] %in% c("html", "pdf"))
setwd(normalizePath(args[1], mustWork = TRUE))
stopifnot(!dir.exists(".git"), file.exists("_bookdown.yml"))
started <- Sys.time()
status <- 0L
cat("START:", format(started), "\nWORKDIR:", getwd(), "\n")
cat("FORMAT:", args[2], "\n")
cat("R:", R.version.string, "\nLOCALE:", Sys.getlocale(), "\n")
print(.libPaths())
tryCatch({
  cat("PANDOC:", as.character(rmarkdown::pandoc_version()), "\n")
  print(rmarkdown::find_pandoc())
  cat("LATEX:\n")
  print(Sys.which(c("pdflatex", "xelatex")))
  bookdown::render_book(
    "index.Rmd",
    output_format = if (args[2] == "html") "bookdown::gitbook" else "bookdown::pdf_book"
  )
}, error = function(e) {
  status <<- 1L
  cat("BASELINE ERROR:", conditionMessage(e), "\n")
})
cat("\nELAPSED_SECONDS:", as.numeric(difftime(Sys.time(), started, units = "secs")), "\n")
cat("EXIT_STATUS:", status, "\nSESSION:\n")
print(sessionInfo())
quit(save = "no", status = status)
