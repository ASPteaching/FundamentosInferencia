# Phase 3A — layout i tipografia

Data: 2026-09-13. Estat: **READY FOR PHASE 3B**. La revisió visual humana de
desktop i responsive s'ha realitzat i ha estat satisfactòria.

## Fitxers modificats o creats

- `_output.yml`: el perfil `bookdown::bs4_book` carrega ara `blocks.css` i el
  nou full específic `bs4-style.css`.
- `bs4-style.css`: estil exclusiu de l'HTML `bs4_book`.
- `profiles/bs4-book-es.html`: plantilla localitzada de `bs4_book`.
- `scripts/build.ps1`: inclou la plantilla localitzada entre els inputs del
  scratch HTML.

No s'han modificat fonts `.Rmd`, manifests PDF, contingut, numeració, IDs,
chunks, CSS de les caixes existents, `docs/`, GitHub Pages ni el repositori B.

## Decisions visuals

S'ha definit una capa mínima, mantenible i sense dependències externes:

- família de sistema `system-ui, -apple-system, Segoe UI, Roboto, Arial`;
  cos de 17,5 px i interlineat 1,62 (16 px / 1,58 en mòbil);
- contingut amb màxim de 46 rem, padding 2,35 rem en escriptori i 1 rem en
  mòbil; fons blanc, tinta neutra i accent únic blau `#1f5b87`;
- H1/H2/H3 amb pes, mida, color i espaiat jerarquitzats;
- sidebar esquerra clara, TOC local compacte, estats actiu/focus accessibles i
  navegació de descàrregues discreta;
- codi/output amb gris molt suau i vora lateral, taules amb capçalera blau
  suau, zebra molt lleugera i captions atenuats;
- dos breakpoints: sota 992 px es relaxen els marges i la sidebar esdevé una
  franja superior; sota 576 px es redueixen tipografia, padding, codi i taules.

Les quatre caixes pedagògiques es mantenen deliberadament fora d'aquesta fase.

## Render i comprovacions

S'ha renderitzat només l'HTML a
`../_phase3a-scratch/html-render/work/docs/`: 29 pàgines, 405 chunks,
117,05 s i `EXIT_STATUS: 0` (el codi natiu `-1073741569` és l'excepció de
plataforma ja acceptada a fases anteriors). El nou CSS apareix a les 29 pàgines.
La mostra estructural inclou portada, teoria, codi (18 pàgines), taules (16),
MathJax (29), exercicis, bibliografia i navegació de descàrregues en les pàgines
representatives comprovades. No s'han repetit les validacions funcionals
exhaustives de Phase 2.

## Tancament i enllaços PDF

Les etiquetes natives de la plantilla s'han localitzat a `Tabla de contenidos`
i `En esta página` mitjançant `template:` del perfil `bookdown::bs4_book`; no
s'han fet substitucions de l'HTML generat. S'ha preservat la plantilla oficial
excepte per aquestes dues etiquetes i els atributs `aria-label` corresponents.

El preview final és
`../_phase3a-scratch/html-localized/work/docs/`: 29 pàgines, 405 chunks i
`EXIT_STATUS: 0`. S'hi han muntat, sense rerenderitzar-los, els PDFs selectius
validats de Phase 1: `FundamentosInferencia.pdf` (8.671.006 bytes) i
`FundamentosInferencia-Ejercicios.pdf` (428.384 bytes). Els dos fitxers són al
mateix directori que les pàgines HTML i coincideixen amb els `href` de la
navegació de descàrregues; per tant funcionen en aquest preview assemblat.

## Per a Phase 3B/3C

Phase 3B podrà considerar ajustos visuals derivats de la revisió humana; Phase
3C és on s'hauran de tractar les caixes pedagògiques, sense barrejar-les amb
aquest lot.
