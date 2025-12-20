pretty_table <- function(
    x,
    digits = NULL,
    col.names = NULL,
    align = NULL,
    caption = NULL
) {
  if (is.null(align)) {
    align <- rep("c", ncol(x))
  }
  
  knitr::kable(
    x,
    digits = digits,
    col.names = col.names,
    align = align,
    caption = caption,
    escape = FALSE
  )
}

