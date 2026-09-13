# Publication checkpoint — Phase 3P

Data: 2026-09-13. Aquesta publicació correspon exactament a l'estat validat de
Phase 3A a `bs4-integration`; no incorpora canvis visuals, editorials ni de
fonts posteriors.

Commit de publicació: `7f98e8c docs: publish phase 3a checkpoint`, integrat a
`main` per fast-forward i publicat a `origin/main`.

## Outputs publicats

- HTML combinat `bookdown::bs4_book`: 29 pàgines a `docs/`, amb la navegació
  localitzada `Tabla de contenidos` i `En esta página`.
- `docs/FundamentosInferencia.pdf`: PDF selectiu de teoria (8.671.468 bytes).
- `docs/FundamentosInferencia-Ejercicios.pdf`: PDF selectiu d'exercicis
  (428.384 bytes).

Els dos PDFs s'han generat en scratch amb els perfils selectius i s'han muntat
al mateix directori que l'HTML. Els 29 HTML enllacen als dos noms finals i els
fitxers existeixen al paquet publicat.

## Validació i URL

El paquet de publicació conté `docs/index.html`, les parts Teoría/Ejercicios,
els assets CSS/JS/imatges requerits, cerca, la navegació localitzada i els dos
PDFs. La validació estàtica no ha trobat ancores trencades ni IDs duplicats.
La URL pública és https://aspteaching.github.io/FundamentosInferencia/.

## Incidències deliberadament pendents

- El link històric sense esquema `r-tutor.com` continua present; no s'ha
  corregit en aquest checkpoint.
- Es mantenen les incidències de contingut/PDF ja documentades a Phase 1
  (literals `??`, avisos tipogràfics i altres qüestions editorials).
- Aquesta fase no canvia GitHub Pages, el repositori B ni inicia Phase 3B.
