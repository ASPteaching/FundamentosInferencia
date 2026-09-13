# Phase 2 — pilot `bs4_book`

Data: 2026-09-13. Resultat: **READY FOR VISUAL PHASE**. Aquest document tanca
únicament el pilot funcional del renderer HTML; no modifica `docs/`, no publica
res i no inicia la fase visual.

## Canvi pilot

El perfil HTML ara accepta `bs4_book` (per defecte) o `gitbook` (rollback
explícit). Els PDFs selectius continuen passant a `bookdown::pdf_book` i els
seus manifests no canvien. `prepare-bs4.R` actua només dins del scratch, abans
del render HTML:

- extreu l'agraïment de `index.Rmd` a `agradecimientos.Rmd`;
- separa les dues parts del capítol 11 a `11-Contrastes_Poblaciones_Normales.Rmd`
  i `11b-Contrastes_Dos_Muestras.Rmd`;
- incorpora els separadors PART al primer capítol de cada part, sense crear una
  pàgina buida.

Per tant, les fonts canòniques i els manifests PDF no es reestructuren. El
renderer rep un capítol per fitxer i un únic H1 ordinari per fitxer només en la
còpia de treball temporal. `_output.yml` defineix la configuració mínima
`bs4_book`, conserva `blocks.css`, fixa notes no inline i inclou dos enllaços
PDF visibles. No s'ha afegit CSS visual ni s'ha canviat Bootstrap.

## Evidència ja existente i validació completada

En reprendre, ja existia un render complet del scratch
`../_phase2-scratch/bs4`: `render.log` registra `bookdown 0.46`, R 4.4.3,
Pandoc 3.6.3, `bs4_book`, 405 chunks, 147,37 s i `EXIT_STATUS: 0`. No s'ha
repetit aquest render.

S'ha completat la validació estàtica amb `scripts/validate-bs4.R`, reutilitzant
els dos PDFs ja validados de Phase 1 només per comprovar les descàrregues (no
s'han reconstruït PDFs):

- 29 HTML, amb capítols continus 1--24;
- zero recursos locals inesperadament absents, zero ancores trencades i zero
  IDs duplicats;
- la barra `bs4_book` és present a les 28 pàgines de llibre; `404.html` queda
  exclosa perquè és una pàgina especial sense barra;
- MathJax apareix a 29 pàgines, taules a 16 i figures/captions a 12; no queda
  cap literal `\\@ref{...}` en l'HTML;
- els dos enllaços PDF resolen després del muntatge temporal dels artefactes
  selectius de Phase 1.

## Regressions i límits

No s'ha detectat cap regressió funcional atribuïble al pilot. Persisteix el
link sense esquema `r-tutor.com`, ja documentat a Phase 1, que el comprovador
informa separadament i no atribueix al renderer. Aquest pilot no és una
validació visual, responsive ni de compatibilitat final amb GitHub Pages; això
queda deliberadament per a la fase visual. No s'ha fet push.
