# HTML-only structural adapter. Run exclusively in the prepared scratch tree.
stopifnot(!dir.exists(".git"), file.exists("_bookdown.yml"))
config <- yaml::read_yaml("_bookdown.yml")
read_source <- function(path) readLines(path, encoding = "UTF-8", warn = FALSE)
write_source <- function(lines, path) writeLines(enc2utf8(lines), path, useBytes = TRUE)
split_chapter <- function(path, heading, destination) {
  lines <- read_source(path)
  at <- which(lines == heading)
  stopifnot(length(at) == 1L, at > 1L, !file.exists(destination))
  write_source(lines[seq_len(at - 1L)], path)
  write_source(lines[at:length(lines)], destination)
  pos <- match(path, config$rmd_files)
  stopifnot(!is.na(pos))
  config$rmd_files <<- append(config$rmd_files, destination, after = pos)
}
split_chapter("index.Rmd", "# Agradecimiento y fuentes utilizadas {-}", "agradecimientos.Rmd")
split_chapter("11-Contrastes_Poblaciones_Normales.Rmd", "# Contrastes con dos muestras", "11b-Contrastes_Dos_Muestras.Rmd")
# A PART belongs before its first chapter, not in a standalone empty page.
for (part in c("frontmatter/theory.Rmd", "frontmatter/exercises.Rmd")) {
  pos <- match(part, config$rmd_files)
  stopifnot(!is.na(pos), pos < length(config$rmd_files))
  next_chapter <- config$rmd_files[pos + 1L]
  write_source(c(read_source(part), "", read_source(next_chapter)), next_chapter)
  config$rmd_files <- config$rmd_files[-pos]
}
yaml::write_yaml(config, "_bookdown.yml")
cat("BS4 scratch structure prepared; canonical sources and PDF manifests unchanged.\n")
