# Structural checks for a completed bs4_book scratch render; base R only.
# Usage: Rscript validate-bs4.R SCRATCH [THEORY.pdf EXERCISES.pdf]
args <- commandArgs(trailingOnly = TRUE)
if (!length(args) %in% c(1L, 3L)) stop("Usage: Rscript validate-bs4.R SCRATCH [THEORY.pdf EXERCISES.pdf]")
scratch <- normalizePath(args[1], mustWork = TRUE)
docs <- file.path(scratch, "work", "docs")
stopifnot(dir.exists(docs))
if (length(args) == 3L) {
  file.copy(normalizePath(args[2], mustWork = TRUE), file.path(docs, "FundamentosInferencia.pdf"), overwrite = TRUE)
  file.copy(normalizePath(args[3], mustWork = TRUE), file.path(docs, "FundamentosInferencia-Ejercicios.pdf"), overwrite = TRUE)
}
pages <- list.files(docs, "\\.html$", full.names = TRUE)
names(pages) <- basename(pages)
contents <- lapply(pages, function(path) paste(readLines(path, encoding = "UTF-8", warn = FALSE), collapse = "\n"))
extract <- function(text, pattern) {
  hits <- regmatches(text, gregexpr(pattern, text, perl = TRUE))[[1]]
  if (!length(hits)) return(character())
  sub(pattern, "\\1", hits, perl = TRUE)
}
ids <- lapply(contents, extract, ' id="([^"]+)"')
duplicates <- lapply(ids, function(values) sort(unique(values[duplicated(values)])))
duplicates <- duplicates[lengths(duplicates) > 0]
links <- lapply(contents, extract, ' (?:href|src)="([^"]+)"')
missing <- character()
broken <- character()
for (name in names(links)) for (value in links[[name]]) {
  if (grepl("^[a-zA-Z][a-zA-Z0-9+.-]*:|^//", value)) next
  pieces <- strsplit(value, "#", fixed = TRUE)[[1]]
  destination <- utils::URLdecode(pieces[1])
  fragment <- if (length(pieces) > 1L) utils::URLdecode(pieces[2]) else ""
  target_name <- if (nzchar(destination)) basename(destination) else name
  if (nzchar(destination) && !file.exists(file.path(docs, destination))) {
    missing <- c(missing, destination)
  } else if (nzchar(fragment) && grepl("\\.html$", target_name) && !(fragment %in% ids[[target_name]])) {
    broken <- c(broken, paste(name, target_name, fragment, sep = " -> "))
  }
}
headings <- unlist(lapply(contents, extract, '<title>Capítulo ([0-9]+) .*?</title>'), use.names = FALSE)
numbers <- sort(as.integer(headings))
has_bs4_layout <- all(vapply(contents[names(contents) != "404.html"], grepl, logical(1), pattern = 'navbar-nav', fixed = TRUE))
known_preexisting <- "r-tutor.com"
unexpected_missing <- setdiff(sort(unique(missing)), known_preexisting)
report <- c(
  paste("pages:", length(pages)),
  paste("chapter_numbers:", paste(numbers, collapse = ",")),
  paste("known_preexisting_scheme_less_links:", paste(intersect(sort(unique(missing)), known_preexisting), collapse = ",")),
  paste("unexpected_missing_local_assets:", paste(unexpected_missing, collapse = ",")),
  paste("broken_anchors:", paste(sort(unique(broken)), collapse = ",")),
  paste("duplicate_id_pages:", paste(names(duplicates), collapse = ",")),
  paste("has_bs4_layout:", has_bs4_layout)
)
writeLines(report, file.path(scratch, "validation.txt"), useBytes = TRUE)
cat(report, sep = "\n")
if (!identical(numbers, 1:24) || length(unexpected_missing) || length(broken) || length(duplicates) || !has_bs4_layout) quit(status = 1L)
