# Phase 3A — layout i tipografia

Data: 2026-09-13. Estat: **PHASE 3A NEEDS FIXES**. El CSS i el render són
correctes, però falta una inspecció visual efectiva en navegador abans de
declarar la revisió preparada.

## Fitxers modificats o creats

- `_output.yml`: el perfil `bookdown::bs4_book` carrega ara `blocks.css` i el
  nou full específic `bs4-style.css`.
- `bs4-style.css`: estil exclusiu de l'HTML `bs4_book`.

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

## Incidència bloquejant la revisió visual

La política del navegador disponible ha bloquejat l'obertura del preview local
`file://`; no s'ha intentat eludir-la amb un altre navegador ni servidor. Per
tant, encara no hi ha una comprovació visual real de desktop ni responsive:
només s'ha verificat la presència dels breakpoints i selectors en el CSS/HTML.

## Per a Phase 3B/3C

Quan es pugui obrir el preview local en un navegador autoritzat, cal fer la
revisió desktop i mòbil d'aquest lot abans d'iniciar Phase 3B. Phase 3B podrà
considerar ajustos visuals derivats d'aquella revisió; Phase 3C és on s'hauran
de tractar les caixes pedagògiques, sense barrejar-les amb aquest lot.
