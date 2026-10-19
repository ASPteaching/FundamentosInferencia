# Rscript --vanilla scripts/test-u4-vectors.R REPOSITORY SCRATCH
args <- commandArgs(trailingOnly=TRUE)
repo <- normalizePath(args[1], mustWork=TRUE)
scratch <- normalizePath(args[2], mustWork=TRUE)
setwd(scratch)
near <- function(a,b,tol=1e-9) stopifnot(max(abs(a-b)) < tol)
env <- new.env(parent=globalenv())
png(file.path(scratch,'u4-code-check-%02d.png'),width=1100,height=700)
for (relative in c('04-vectoresAleatorios.Rmd','exercises/03-Distribuciones_multivariantes.Rmd')) {
  code <- tempfile(fileext='.R')
  knitr::purl(file.path(repo,relative),output=code,quiet=TRUE)
  sys.source(code,envir=env)
}
dev.off()
near(sum(env$prob_table),1)
near(env$prob_table['2','1'],.08)
near(sum(env$prob_table[1:3,1:2]),56/150)
near(env$data$Prob,c(.4,.1,.2,.3))
near(env$u4_grid$prob,as.vector(env$prob_table))
near(env$mu_cond,107.5); near(env$sigma_cond^2,168.75)
near(env$Cov_Y1Y2,-2/9)
# Enumeration validates joint support, binomial marginals, conditional and covariance.
joint <- outer(0:5,0:5,Vectorize(function(x,y) {
  if (x+y>5) 0 else dmultinom(c(x,y,5-x-y),prob=c(.6,.2,.2))
}))
near(sum(joint),1)
near(env$u4_joint,joint)
stopifnot(!any(grepl('[[:cntrl:]]',names(env$u4_support))))
near(rowSums(joint),dbinom(0:5,5,.6))
near(colSums(joint),dbinom(0:5,5,.2))
near(joint[1:5,2]/sum(joint[,2]),dbinom(0:4,4,.75))
near(sum(joint*outer(0:5,0:5))-3*1,-5*.6*.2)
labs <- outer(0:2,0:2,Vectorize(function(x,y) {
  if(x+y>2) 0 else dmultinom(c(x,y,2-x-y),prob=rep(1/3,3))
}))
near(sum(labs[1:2,1]),1/3)
near(sum(labs*outer(0:2,0:2,function(x,y)(x-y)^2)),4/3)
# Exercise 2: enumerate all eight equally likely sequences.
coins <- expand.grid(a=0:1,b=0:1,c=0:1)
heads <- rowSums(coins)
gain <- apply(coins,1,function(x) if(any(x==1)) which(x==1)[1] else -1)
near(mean(heads==2 & gain==1),2/8)
near(mean(heads<=2 & gain<=1),1/2)
# Triangle in exercises 4 and 5.
near(integrate(function(y) 2-2*y,0,1)$value,1)
near(integrate(function(y) 2-3*y,0,2/3)$value,2/3)
near(integrate(function(y) 2-2*y,.5,1)$value,1/4)
near(integrate(function(x) rep(1,length(x)),1.5,2)$value,.5)
# Normal conditional density from joint/marginal ratio, checked numerically.
joint_original <- function(x,y) env$u4_dnorm2((x-100)/15,(y-50)/10)/150
for(x in c(90,107.5,120)) near(joint_original(x,60)/dnorm(60,50,10),dnorm(x,107.5,sqrt(168.75)))
near(integrate(function(x) joint_original(x,60)/dnorm(60,50,10),-Inf,Inf)$value,1,tol=1e-6)
near(integrate(function(x) x^3*dnorm(x),-Inf,Inf)$value,0)
# Recalculate all three reserved questions independently of their stored review.
near(dmultinom(rep(1,4),prob=c(.4,.3,.2,.1)),.0576)
near(dmultinom(c(1,1,1),prob=c(4,2,1)/7),48/343)
near(dmultinom(c(1,1,2),prob=c(.3,.3,.4)),.1728)
near(dmultinom(c(3,1,2),prob=rep(1/3,3)),60/729)
bank <- jsonlite::fromJSON(file.path(dirname(repo),'FundamentosInferencia-QuestionBank/Unidad_04/questions.yml'),simplifyVector=FALSE)$bank$questions
stopifnot(length(bank)==20,identical(vapply(bank,`[[`,'','correct'),c('b','c','d','c','b','a','c','d','b','a','c','d','a','b','c','d','a','b','c','d')))
near(eigen(matrix(c(2,.5,.5,3),2),symmetric=TRUE)$values,c((5+sqrt(2))/2,(5-sqrt(2))/2))
cat('PASS: every U4 R chunk; joint/marginal/conditional masses; normal density and moments; exercises 1-8; reserved Statmedia and 20 reviewed keys.\n')
