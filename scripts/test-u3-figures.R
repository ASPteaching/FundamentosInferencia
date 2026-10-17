library(ggplot2)
args <- commandArgs(trailingOnly = TRUE)
source_path <- if (length(args)) args[1] else "03-distribucionesNotables.Rmd"
s <- readLines(source_path, encoding="UTF-8")
starts <- grep('^```\\{r u3-fig-',s)
stopifnot(length(starts)==6)
pdf(tempfile(fileext='.pdf'),width=6.5,height=3.4,useDingbats=FALSE)
u3_plots <- list()
for (i in starts) {
 end <- i+which(grepl('^```$',s[(i+1):length(s)]))[1]
 code <- s[(i+1):(end-1)]
 plot <- eval(parse(text=code),envir=.GlobalEnv)
 stopifnot(inherits(plot,'ggplot'))
 built <- ggplot_build(plot)
 stopifnot(all(vapply(built$data,function(d) all(is.finite(d$x) & is.finite(d$y)),logical(1))))
 u3_plots[[length(u3_plots)+1]] <- plot
 print(plot)
}
dev.off()
near <- function(a,b) stopifnot(isTRUE(all.equal(a,b,tolerance=1e-10)))
near(u3_bern$prob,dbinom(0:1,1,.3));near(sum(u3_bern$prob),1)
near(u3_fb,c(.7,1));near(u3_dado$prob,rep(1/6,6));near(u3_fd,(1:6)/6)
near(u3_h,1/3);near(u3_cdf_unif$F,c(0,0,1,1))
# Open points show left limits; closed points show right-continuous CDF values.
for (j in c(2,4)) {
 b <- ggplot_build(u3_plots[[j]])
 stopifnot(all(b$data[[1]]$y==b$data[[1]]$yend),all(b$data[[2]]$y<b$data[[3]]$y))
}
b <- ggplot_build(u3_plots[[5]])
near(b$data[[2]]$y,c(1/3,1/3));near(b$data[[3]]$y,c(0,0))
cat('PASS: six executable ggplot figures, mass sums, support, CDF values, left limits/right-continuity, density area and endpoint convention.\n')