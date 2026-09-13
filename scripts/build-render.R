# Phase 1: one existing book/format, already copied to scratch.
args <- commandArgs(trailingOnly = TRUE)
stopifnot(length(args) %in% c(2L, 3L), args[2] %in% c("html", "pdf"))
html_renderer <- if (length(args) == 3L) args[3] else "bs4_book"
stopifnot(html_renderer %in% c("bs4_book", "gitbook"))
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
  if (args[2] == "html" && html_renderer == "bs4_book") source("scripts/prepare-bs4.R")
  bookdown::render_book(
    "index.Rmd",
    output_format = if (args[2] == "html") paste0("bookdown::", html_renderer) else "bookdown::pdf_book"
  )
}, error = function(e) {
  status <<- 1L
  cat("BASELINE ERROR:", conditionMessage(e), "\n")
})
cat("\nELAPSED_SECONDS:", as.numeric(difftime(Sys.time(), started, units = "secs")), "\n")
cat("EXIT_STATUS:", status, "\nSESSION:\n")
print(sessionInfo())
quit(save = "no", status = status)
