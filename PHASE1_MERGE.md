# Phase 1 — Fusió controlada

Data: 2026-09-12. Resultat: **READY FOR PHASE 2**, amb l'excepció d'entorn
acceptada de Phase 0. No s'ha iniciat Phase 2 ni publicat cap output.

## Punt de partida i continuació

A és el repositori canònic. B es conserva independent i intacte a
`fdf029c`; origin continua apuntant al seu repositori original. Phase 0 queda
tancada a `1c6d302` amb **READY WITH ENVIRONMENT EXCEPTION**.

En reprendre després de la interrupció ja existien el commit de tancament de
Phase 0 i els deu fitxers importats a `exercises/`, encara no commitats. S'han
conservat. No hi havia manifests de Phase 1, informe ni builds completats de
Phase 1. S'han executat una vegada els tres perfils, sense repetir els baselines.

## Importació B → A

Les rutes origen són relatives a B; les destinacions, a A.

| Origen B | Destí A | ID de capítol |
| --- | --- | --- |
| `01-Probabilidad.Rmd` | `exercises/01-Probabilidad.Rmd` | `ex-probabilidad` |
| `02-VariablesAleatorias_y_Distribuciones.Rmd` | `exercises/02-VariablesAleatorias_y_Distribuciones.Rmd` | `ex-variables-aleatorias` |
| `03-Distribuciones_multivariantes.Rmd` | `exercises/03-Distribuciones_multivariantes.Rmd` | `ex-distribuciones-multivariantes` |
| `04-Muestreo.Rmd` | `exercises/04-Muestreo.Rmd` | `ex-muestreo` |
| `05-Estimacion.Rmd` | `exercises/05-Estimacion.Rmd` | `ex-estimacion` |
| `06-IntervalosDeConfianza.Rmd` | `exercises/06-IntervalosDeConfianza.Rmd` | `ex-intervalos` |
| `07-Contrastes_de_Hipotesis.Rmd` | `exercises/07-Contrastes_de_Hipotesis.Rmd` | `ex-contrastes` |
| `08-Inferencia_Aplicada.Rmd` | `exercises/08-Inferencia_Aplicada.Rmd` | `ex-inferencia-aplicada` |
| `09-Computacion_Intensiva.Rmd` | `exercises/09-Computacion_Intensiva.Rmd` | `ex-computacion-intensiva` |
| Cos editorial d'`index.Rmd` | `exercises/presentacion.Rmd` | `ex-presentacion`, `ex-objetivo` |
| Metadades d'`index.Rmd` | `profiles/exercises-index.Rmd` | Portada PDF selectiva |

Els nou capítols són idèntics byte a byte als de B després de retirar únicament
l'ID afegit al primer heading. No s'han modificat chunks, nomenclatura,
numeració manual, dades ni contingut docent. La presentació conserva tot el
cos editorial de B; se separa el YAML i es distingeixen els dos IDs per evitar
col·lisions amb la presentació teòrica. Els IDs H1 produeixen les pàgines
`ex-*.html`; els exercicis continuen amb numeració automàtica 16–24 a l'HTML
i 1–9 al PDF selectiu. No s'han afegit IDs a tots els subapartats.

## Fitxers descartats de la importació

No s'importen `docs/`, `all/`, `.git/`, caches, `*_files/`, outputs `.html`,
`.tex`, `.log`, `.pdf`, backups `.bak`, conflicted copies, QMD, `_quarto.yml`,
DOCX preparatoris, `.RData`, `.Rhistory`, estat d'IDE, configuracions i scripts
històrics de B. «Descartats» significa exclosos de la còpia: **no s'han esborrat**.

Els nou capítols actius no llegeixen dades ni imatges locals de B. Les dades
són literals i els gràfics es calculen amb R; l'enllaç Mathpix és un comentari
inactiu. No s'ha importat cap recurs binari ni output generat. Les sis icones
de B ja existien a A i no són necessàries per a aquests capítols.

## Manifests i estructura

| Fitxer | Funció |
| --- | --- |
| `_bookdown.yml` | HTML únic: índex A, part Teoría, 15 capítols teòrics, part Ejercicios, presentació i nou capítols importats, bibliografia al final |
| `_bookdown-theory.yml` | Selecció teòrica original, mateix `index.Rmd`, bibliografia i nom `FundamentosInferencia` |
| `_bookdown-exercises.yml` | Selecció només exercicis, nom `FundamentosInferencia-Ejercicios`; `index.Rmd` es prepara al scratch amb la portada específica |
| `frontmatter/theory.Rmd` | Separador natiu bookdown `# (PART) Teoría {-}` |
| `frontmatter/exercises.Rmd` | Separador Ejercicios i restauració de `echo/message/warning = TRUE`, com a B |
| `profiles/exercises-index.Rmd` | Només metadades originals d'exercicis; evita incloure la presentació o setup de teoria al PDF B |
| `_output.yml` | Conserva GitBook i el CSS d'A; només substitueix la descàrrega antiga pels dos PDFs selectius |
| `scripts/build.ps1` | Còpia selectiva a scratch, conservació de subdirectoris, selecció de manifest i portada, logs i inventaris SHA256 |
| `scripts/build-render.R` | Executa un sol format al scratch, registra errors, temps i `sessionInfo()` |
| `renderBook.R` | Wrapper dels tres perfils a directoris temporals independents, sense renderitzar al checkout |

No s'ha mogut cap font de teoria ni canviat `index.Rmd` d'A. No cal una portada
teòrica duplicada: el perfil teoria reutilitza l'índex original. Els manifests
selectius s'han d'executar **mitjançant el runner**, que prepara `_bookdown.yml`
i `index.Rmd` al scratch; no s'ha de llançar un render directe al checkout.
El PDF teoria conserva pdfLaTeX; el runner fixa XeLaTeX només per al PDF exercicis.

## Recursos, CSS i estat R

Es reutilitzen `images/`, `Rcode/`, `htmlWidgets/` i bibliografia d'A quan es
prepara el scratch. El widget condicionat d'A continua actiu. No hi ha noves
còpies de recursos dins del repositori. Els gràfics es regeneren al scratch.

No s'ha editat cap CSS ni creat cap estil nou. L'HTML canònic carrega el
`blocks.css` existent d'A. No s'importa el `blocks.css` de B: les fonts actives
d'exercicis no fan servir aquestes classes. Tampoc s'activa globalment el
`style.css` de B/A, cosa que canviaria l'aparença de teoria. Els petits estils
genèrics de B per codi/captions no es traslladen al web conjunt; no es declara
identitat visual píxel a píxel amb el web separat B. Els PDFs conserven motors
i configuracions efectives, sense homogeneïtzació tipogràfica.

L'HTML comparteix sessió R entre capítols, com bookdown original. Es restauren
els tres flags de chunks a l'inici dels exercicis perquè no heretin la supressió
de missatges de teoria. Alguns paquets ja estan carregats i els seus missatges
de càrrega poden desaparèixer; els resultats numèrics comparats coincideixen.
No s'han introduït seeds ni modificat el codi dels exemples.

## Execució reproduïble

Des de l'arrel que conté A i B, PowerShell 7:

```powershell
$phase1Runner = './FundamentosInferencia/scripts/build.ps1'
$phase1R = 'C:/Program Files (x86)/R/R-4.4.3/bin/x64/Rscript.exe'
$phase1Pandoc = 'C:/Program Files/RStudio/resources/app/bin/quarto/bin/tools'
& $phase1Runner -Repository './FundamentosInferencia' -Profile html -ScratchDirectory './_phase1-scratch/html-new' -Rscript $phase1R -PandocDirectory $phase1Pandoc
& $phase1Runner -Repository './FundamentosInferencia' -Profile theory -ScratchDirectory './_phase1-scratch/theory-new' -Rscript $phase1R -PandocDirectory $phase1Pandoc
& $phase1Runner -Repository './FundamentosInferencia' -Profile exercises -ScratchDirectory './_phase1-scratch/exercises-new' -Rscript $phase1R -PandocDirectory $phase1Pandoc
```

El scratch ha de ser nou i estar fora dels checkouts. `renderBook.R`, executat
des de l'arrel d'A, és un wrapper alternatiu que localitza R/Pandoc de la sessió
i invoca els mateixos perfils amb `pwsh`. S'han provat els perfils explícits;
el wrapper s'ha revisat sintàcticament, sense repetir els tres renders.

Cada perfil deixa `render.log`, `inputs.csv`, `outputs.csv`, `changes.csv` i
`result.json` (inclou el codi natiu real). El runner i el wrapper no amaguen
sortides no zero. L'acceptació de l'excepció requereix també el render complet
i la validació d'artefactes; no s'aplica automàticament a qualsevol error.

Els scripts `baseline.*` i `BASELINE_BUILD.md` documenten la configuració
anterior a la fusió: per reproduir aquella selecció, cal consultar el commit
de Phase 0. Per al manifest unificat actual s'utilitza `build.ps1`, que conserva
les rutes `exercises/` i `frontmatter/`.

## Resultats dels tres outputs

| Perfil | Artefacte scratch | Render | Temps | Codi natiu |
| --- | --- | --- | --- | --- |
| HTML combinat | `html/work/docs/index.html` i 28 altres HTML, inclòs 404 | VALIDAT | 65,4 s | -1073741569 |
| PDF teoria | `theory/work/docs/FundamentosInferencia.pdf`, 320 pàgines, 8.671.006 bytes | VALIDAT | 88,7 s | -1073741569 |
| PDF exercicis | `exercises/work/docs/FundamentosInferencia-Ejercicios.pdf`, 96 pàgines, 428.384 bytes | VALIDAT | 22,0 s | -1073741569 |

Evidències locals a `../_phase1-scratch/`: logs, manifests de fitxers,
`validation.json`, script de comparació i PNG de mostreig PDF. Es mantenen
fora dels repositoris. `preview/` reuneix còpies dels HTML i els dos PDFs
generats per provar les descàrregues; no és una publicació ni altera `docs/`.

Comprovacions completades:

- 24 capítols amb numeració contínua 1–24, parts I Teoría / II Ejercicios,
  presentacions diferenciades, bibliografia i cerca conjunta.
- Tots els capítols comparats conserven taules, fórmules i blocs numèrics
  `## [n]` del baseline corresponent. La comparació exclou el TOC global nou.
- Zero IDs duplicats dins de pàgina i zero àncores locals inexistents en
  l'escaneig dels 29 HTML. Figures, CSS i JS referenciats són presents.
- Els dos links PDF es resolen a HTTP 200 al preview local després d'ajuntar
  els outputs selectius. Abans d'ajuntar-los, un render només HTML no conté PDFs.
- Navegació real verificada: capítol 15 → presentació d'exercicis → capítol 16.
  Cerca `bootstrap` amb resultats de teoria i exercicis.
- Mostra HTML capítol 17: 320 nodes MathJax incloent el TOC, zero errors de
  MathJax, cap imatge trencada, una taula i 75 blocs de codi/output; sense errors
  de consola en la mostra. La diferència en missatges de paquets és l'esperada.
- PDF exercicis: text normalitzat idèntic en 96/96 pàgines al baseline corregit.
  PDF teoria: 319/320 pàgines coincideixen. Mateixa selecció, ordre i paginació;
  la comprovació no exigeix identitat binària ni de figures de simulació.
- Inspecció visual PNG de portades/TOC de tots dos PDFs i pàgina 27 d'exercicis
  amb gràfic, fórmula i output R. No HTML literal detectat en cap PDF.
- Verificació mecànica que els nou cossos importats coincideixen amb B, sense
  alteracions més enllà dels IDs. B i els outputs originals es preserven.

## Incidències i riscos abans de Phase 2

1. `0xC00000FF` és l'excepció de plataforma acceptada; no és un nou error
   d'integració. Validar codi 0 en un entorn natiu compatible queda ajornat.
2. Continuen els literals `??` de teoria (PDF p109,110,126), els interrogants
   literals de B (p92), la taula solapada preexistent i els avisos de
   `\textsterling`, ggplot2 `size` i substitució de fletxes al PDF d'exercicis.
   No s'han corregit estadística, dades, captions ni contingut editorial.
3. Els dos links R-Tutor sense esquema d'A continuen malformats. No hi ha
   altres recursos locals absents en l'escaneig, un cop reunits els PDFs.
4. Els títols/URLs antics de B no es publiquen com a redirects. B segueix
   disponible; una publicació futura haurà de tractar compatibilitat d'URLs
   i noms PDF, i revisar links del campus abans de substituir cap lloc.
5. Els IDs `ex-*` preparen navegació futura. La correspondència temàtica i els
   links bidireccionals dins de cada tema queden per una tasca posterior;
   no s'han afegit referències creuades que fallin als PDFs selectius.
6. No hi ha garantia de reproducibilitat binària, revisió estadística ni
   auditoria visual responsive. Abans d'un canvi de renderer/aparença cal
   reutilitzar aquests artefactes per distingir regressions visuals.

## Git i límits de la fase

Commits locals separats: tancament de Phase 0, importació de fonts i
infraestructura/documentació de Phase 1. `AUDIT_FORMAT.md` continua no versionat
com abans; no s'incorporen els tres fitxers no versionats preexistents de B.
No s'ha fet push, canvi de GitHub Pages, bs4_book, CSS visual, caixes pedagògiques,
reorganització massiva, eliminació de materials històrics ni importació d'història Git.

**READY FOR PHASE 2** significa que la fusió funcional està validada sota
l'excepció acordada. Phase 2 no s'ha començat.
