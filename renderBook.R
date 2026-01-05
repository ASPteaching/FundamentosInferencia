bookdown::render_book("index.Rmd")
bookdown::render_book("index.Rmd",output_format = c("bookdown::gitbook", "bookdown::pdf_book"))