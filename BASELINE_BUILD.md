# Phase 0 — Safety, reproducibility and baseline

Data: 2026-09-12. Resultat final: **READY WITH ENVIRONMENT EXCEPTION**.

Els quatre outputs s'han generat i validat correctament, amb les incidències
preexistents detallades en aquest informe. El procés R acaba amb un error natiu
reproduïble fora dels llibres carregant paquets R. Per decisió de projecte,
`0xC00000FF` d'R x64 sobre Windows ARM64 s'accepta com una excepció de plataforma,
no com un bloqueig del projecte. No s'instal·larà ara R ARM64 experimental.
Queda pendent validar exit code 0 en un entorn R natiu compatible si més endavant
es considera necessari. Aquesta acceptació no converteix el codi observat en 0.

## Environment

| Component | Entorn observat |
| --- | --- |
| OS | Windows 11, build 26200; arquitectura física ARM64 |
| R | 4.4.3 (2025-02-28 ucrt), x86_64-w64-mingw32/x64 |
| Rscript | `C:/Program Files (x86)/R/R-4.4.3/bin/x64/Rscript.exe` |
| Biblioteques R | `C:/Users/sanpl/AppData/Local/R/win-library/4.4`; biblioteca base de R 4.4.3 |
| bookdown / rmarkdown / knitr | 0.46 / 2.31 / 1.51 |
| Pandoc | 3.6.3, `C:/Program Files/RStudio/resources/app/bin/quarto/bin/tools/pandoc.exe` |
| pdfLaTeX | MiKTeX-pdfTeX 4.23 (MiKTeX 25.12), pdfTeX 1.40.28 |
| XeLaTeX | MiKTeX-XeTeX 4.16 (MiKTeX 25.12) |
| MiKTeX binaries | `C:/Users/sanpl/AppData/Local/Programs/MiKTeX/miktex/bin/x64` |
| Altres paquets | kableExtra 1.4.0, ggplot2 4.0.2, scatterplot3d 0.3-45, DescTools 0.99.60, coin 1.4-3, survival 3.8-6, dplyr 1.2.0, tidyr 1.3.2, tinytex 0.59 |
| Validació auxiliar | Python del runtime de Codex, lxml, pypdf 6.10.0, Poppler; navegador local GitBook |

R no era al PATH. Les biblioteques de l'usuari requereixen executar fora del
sandbox del compte auxiliar. No s'ha instal·lat ni actualitzat R, cap paquet ni
LaTeX. Usar el Pandoc inclòs amb RStudio no implica migrar a Quarto.

L'entorn heretava `LC_ALL=C.UTF-8`, que aquesta instal·lació Windows R no accepta.
El runner fixa **només per al procés** `LC_ALL=English_United States.utf8` i
`RSTUDIO_PANDOC`; restaura els valors després. Això resol l'error de parsing de
`Presión` a B/08-Inferencia_Aplicada.Rmd, chunk 81 del document combinat
(línies 4588–4616 en l'intent inicial). No s'ha canviat aquesta variable ni el codi docent.

### Error de sortida nativa

Els renders finals imprimeixen `Output created` i `EXIT_STATUS: 0` dins de R,
però Windows retorna **-1073741569 (0xC00000FF)** en acabar el procés.
El runner PowerShell conserva el fracàs; no converteix aquest error en èxit.
També es reprodueix carregant només `bookdown`, `ggplot2` o `dplyr`, sense llibre:

```powershell
& 'C:/Program Files (x86)/R/R-4.4.3/bin/x64/Rscript.exe' --vanilla -e 'library(bookdown); cat("LOADED\n")'
$LASTEXITCODE
```

La consulta bàsica de versió de R acaba amb 0. Això separa la incidència del
contingut dels llibres. L'arquitectura ARM64 amb R x64 és una hipòtesi plausible,
no una causa demostrada ni una atribució a un paquet concret. Hi ha un
[cas relacionat reportat al projecte Quarto](https://github.com/quarto-dev/quarto-cli/issues/14642).
Cal validar una instal·lació/entorn R compatible abans d'acceptar un build amb
sortida 0; no s'ha canviat la instal·lació en aquesta fase.

### Revalidació específica de l'entorn — 2026-09-12

S'han repetit proves independents amb l'executable x64 anterior, `--vanilla`,
les biblioteques de l'usuari i `LC_ALL=English_United States.utf8` temporal.
Cada fila correspon a un procés nou; el locale anterior s'ha restaurat.

| Expressió R | Resultat abans de sortir | Codi de procés Windows |
| --- | --- | --- |
| `cat(R.version.string, R.version$arch)` | R 4.4.3, x86_64 | 0 |
| `library(bookdown); cat("LOADED bookdown")` | LOADED bookdown | -1073741569 |
| `library(ggplot2); cat("LOADED ggplot2")` | LOADED ggplot2 | -1073741569 |
| `library(dplyr); cat("LOADED dplyr")` | LOADED dplyr | -1073741569 |

La càrrega arriba a completar-se; l'error natiu apareix després. No es pot
atribuir a un chunk ni demostrar encara que ARM64 el resolgui.

**R ARM64 disponible: no s'ha trobat.** La cerca recursiva de `Rscript.exe`
a Program Files, Program Files (x86), programes locals de l'usuari, possibles
ubicacions R/Rtools/Scoop i Documents/Downloads només localitza els dos
executables de R 4.4.3 x64 (`bin/Rscript.exe` i `bin/x64/Rscript.exe`).
El registre consultat apunta a aquesta instal·lació. No existeixen les rutes
`C:/Program Files/R-aarch64`, `C:/Users/sanpl/AppData/Local/Programs/R-aarch64`
ni la biblioteca local `R/aarch64-library`. No és una garantia sobre còpies
no registrades en ubicacions arbitràries. `C:/rtools44` conté el toolchain
`x86_64-w64-mingw32.static.posix`; una carpeta Msys2 anomenada `clangarm64`
no acredita tenir R ni el toolchain Rtools ARM64 complet.

**Instal·lació proposada, no executada:** R **4.4.3 per Windows aarch64**,
`R-4.4.3-aarch64.exe`, per mantenir la versió del baseline i variar només
l'arquitectura inicialment. Figura a l'[índex oficial de builds signades](https://www.r-project.org/nosvn/winutf8/aarch64/R-4-signed/).
L'índex indexat confirma el nom, però tant l'accés directe al directori com
la petició HEAD al fitxer han retornat **HTTP 403** en aquesta sessió: no s'ha
pogut confirmar una descàrrega accessible, ni s'ha descarregat cap instal·lador.

Passos pendents, que requereixen una instal·lació posterior autoritzada:

1. Obtenir aquest instal·lador des del projecte R quan sigui accessible i
   instal·lar-lo en un directori separat, per exemple
   `C:/Users/sanpl/AppData/Local/Programs/R-aarch64/R-4.4.3`.
   Conservar R x64; no canviar PATH, associacions de fitxers ni selecció global
   de R/RStudio. Invocar després explícitament `bin/Rscript.exe` d'ARM64.
2. Preparar una biblioteca de paquets ARM64 separada; no reutilitzar les DLL
   de `win-library/4.4` x64. Per compilar dependències cal
   [Rtools44 per ARM64](https://cran.r-project.org/bin/windows/Rtools/rtools44/rtools.html),
   corresponent a R 4.4.x, separat del Rtools x64 existent. La documentació
   oficial indica que aquesta plataforma és experimental i que els paquets
   amb codi natiu s'han d'instal·lar des de fonts. Caldrà verificar-ne la
   compatibilitat, sense actualitzacions massives de la biblioteca actual.
3. Repetir les proves mínimes i, quan funcionin les dependències necessàries,
   els quatre renders scratch amb el path ARM64 explícit i capturant el codi
   real de procés. La convivència d'ambdues arquitectures està
   [prevista pel projecte R](https://cran.r-project.org/bin/windows/base/rw-FAQ.html).

No s'han repetit A HTML, A PDF, B HTML ni B PDF: falta l'entorn ARM64 executable
i les seves dependències. Es conserva l'evidència x64 anterior (artefactes
complets però codi no zero) i la conclusió **NOT READY**. No s'ha instal·lat,
desinstal·lat ni canviat configuració global, i no s'ha començat Phase 1.

## Protecció inicial

Arrel local: `C:/Users/sanpl/Dropbox/SotaCV/Estadistica/InferenciaEstadistica2026`.
Tots dos repositoris eren a `main`, sense canvis en fitxers versionats ni staging.

| Repo | Subdirectori | HEAD inicial | Remote origin |
| --- | --- | --- | --- |
| A | `FundamentosInferencia` | `3e30a2d04f1ad497ede4aaa6bb00e65fc3b7b78c` | `https://github.com/ASPteaching/FundamentosInferencia.git` |
| B | `FundamentosInferencia-Ejercicios` | `50c07aa8c5031519a225fd81123de7aa13d32985` | `https://github.com/ASPteaching/FundamentosInferencia-Ejercicios.git` |

`git status --short` inicial d'A: `?? AUDIT_FORMAT.md` (auditoria del torn anterior).
Estat inicial de B, tres fitxers no versionats preexistents:

```text
?? docs/EjerciciosInferenciaEstadistica (ID77853's conflicted copy 2026-02-04).tex
?? docs/distribuciones-de-probabilidad-multidimensionales (ID77853's conflicted copy 2026-02-04).html
?? docs/reference-keys.txt
```

S'han preservat aquests quatre fitxers, sense incorporar-los als commits.
S'han pres hashes SHA256 inicials i finals dels arbres, excloent `.git` i
`.Rproj.user`. Els únics canvis previstos són els de la taula de correccions.
Git usa `-c safe.directory=<ruta exacta>` per ordre, sense configuració global.
No s'ha fet fetch, pull, reset, clean ni push.

## Com reproduir sense embrutar els checkouts

Des de l'arrel local, amb PowerShell 7 i les biblioteques de l'usuari accessibles:

```powershell
$baselineRunner = './FundamentosInferencia/scripts/baseline.ps1'
$baselineR = 'C:/Program Files (x86)/R/R-4.4.3/bin/x64/Rscript.exe'
$baselinePandoc = 'C:/Program Files/RStudio/resources/app/bin/quarto/bin/tools'
& $baselineRunner -Repository './FundamentosInferencia' -Format html -ScratchDirectory './_phase0-scratch/A-html-new' -Rscript $baselineR -PandocDirectory $baselinePandoc
& $baselineRunner -Repository './FundamentosInferencia' -Format pdf -ScratchDirectory './_phase0-scratch/A-pdf-new' -Rscript $baselineR -PandocDirectory $baselinePandoc
& $baselineRunner -Repository './FundamentosInferencia-Ejercicios' -Format html -ScratchDirectory './_phase0-scratch/B-html-new' -Rscript $baselineR -PandocDirectory $baselinePandoc
& $baselineRunner -Repository './FundamentosInferencia-Ejercicios' -Format pdf -ScratchDirectory './_phase0-scratch/B-pdf-new' -Rscript $baselineR -PandocDirectory $baselinePandoc
```

Cada directori scratch ha de ser nou i extern als checkouts. No executar
`renderBook.R` directament al checkout: els chunks poden reescriure imatges.
Els scripts auxiliars copien només el manifest, configuracions, Rmd actius,
CSS, bibliografia i recursos `images/`, `Rcode/`, `htmlWidgets/`, mantenint rutes.
No copien els `docs/` publicats, caches, `.RData` ni cap història Git.

**Precisió respecte de l'auditoria:** el widget de probabilitat condicionada
és una dependència activa de l'HTML: A/01-probabilidad.Rmd:345 el llegeix amb
`readLines()`. S'ha copiat a scratch sense modificar-lo. Ometre'l en el primer
intent va causar un error del mecanisme de còpia; no era una font absent al repo.

Cada execució deixa `render.log` amb temps, missatges i `sessionInfo()` complet;
`inputs.csv`, `outputs.csv` i `changes.csv` registren paths, mides i hashes de
fitxers abans/després. `changes.csv` compara estats finals: no és una traça de
fitxers transitoris creats i esborrats durant el render ni de reescriptures idèntiques.

## Repository A

HEAD de referència: `3e30a2d04f1ad497ede4aaa6bb00e65fc3b7b78c`.

| Format | Render / procés | Temps | Evidència scratch | Output |
| --- | --- | --- | --- | --- |
| GitBook HTML | Artefacte complet / error natiu en sortir | 50,1 s | `A-html-utf8` | `work/docs/index.html` i 18 altres HTML, inclòs 404 |
| PDF, pdfLaTeX actual | Artefacte complet / error natiu en sortir | 84,1 s | `A-pdf-original` | `work/docs/FundamentosInferenciaEstadistica.pdf`, 320 pàgines, 8.671.642 bytes |

- Els 15 capítols numerats, portada, agraïments i bibliografia es conserven.
  La comparació amb els HTML homònims de `docs/` coincideix en h1–h3, taules,
  blocs de codi/output R, fórmules, captions, paths d'imatge i relacions prev/next.
- El PDF conserva les 320 pàgines i 48 objectes d'imatge raster; el text normalitzat
  coincideix en 319 pàgines. La primera canvia per la data dinàmica del document.
  Això no acredita identitat de píxels ni revisió estadística.
- HTML final sense warning de Pandoc observat. L'intent anterior amb locale
  invàlid mostrava un Div no tancat; no reapareix en el baseline UTF-8.
- PDF: cinc avisos `Command \textsterling invalid in math mode`, línies
  12972/13005 del TeX generat. No hi ha error LaTeX fatal.
- Hi ha quatre ocurrències literals de `??` a estimació puntual, ja a la font
  (línies 272, 284, 302 i 1195); PDF pàgines 109, 110 i 126.
- No s'han trobat àncores locals inexistents. Dos links docents a `r-tutor.com`
  sense esquema es resolen erròniament com a ruta local; font
  `08-estimacionIntervalos.Rmd:464,523`. Es documenten sense editar aquesta font.
- `blocks.css` es carrega; el `style.css` propi d'A continua sense carregar-se.
- Scratch HTML: 121 fitxers creats/modificats (104 a docs, 15 a
  `FundamentosInferenciaEstadistica_files`, 2 a images). PDF: 41 (2 a docs,
  36 al directori de figures, 1 log, 2 a images). Es generen figures HTML/LaTeX
  i es modifiquen `images/LLN1.png` i `images/pmfTrinomial.png` només a scratch.
  La simulació `rnorm()` a grans mostres pot variar figures entre execucions;
  no s'han afegit seeds. Els hashes no exigeixen identitat binària de gràfics.

## Repository B

HEAD de referència: `50c07aa8c5031519a225fd81123de7aa13d32985`.

| Format | Render / procés | Temps | Evidència scratch | Output |
| --- | --- | --- | --- | --- |
| GitBook HTML corregit | Artefacte complet / error natiu en sortir | 11,4 s | `B-html-fixed` | `work/docs/index.html` i 10 altres HTML, inclòs 404 |
| PDF, XeLaTeX actual | Artefacte complet / error natiu en sortir | 19,9 s | `B-pdf-fixed` | `work/docs/EjerciciosInferenciaEstadistica.pdf`, 96 pàgines, 428.389 bytes |

També s'han generat els baselines previs a les correccions: `B-html-utf8`
(12,7 s) i `B-pdf-original` (33,3 s, 96 pàgines, 421.540 bytes). Mateix error
natiu final. L'intent `B-html-original` amb locale invàlid va fallar en el chunk
esmentat a Environment; no falta cap paquet necessari.

- Es conserven els nou capítols, fórmules, contingut de taules, captions,
  resultats numèrics `## [n]` comparats i navegació prev/next.
- Canvis esperats: títol llegible en lloc de `.knit`, metadades de portada,
  prefix `Capítulo` aplicat i eliminació de la imatge ornamental absent.
- El recompte inicial per posició trobava 11 diferències d'outputs R: són
  missatges de càrrega en anglès, absència d'un antic avís de versió de ggplot2
  i canvi de text de deprecació, que desplacen els blocs següents. Comparats
  separadament, els blocs numèrics `## [n]` coincideixen; no s'ha identificat
  una diferència de resultat estadístic en aquesta comprovació.
- El PDF manté 96 pàgines: 80 coincideixen en text normalitzat amb `docs/`;
  la portada/TOC nous redistribueixen les primeres pàgines i canvien missatges R.
  Abans de corregir metadades coincidien 94/96 pàgines.
- ggplot2 avisa de la deprecació de `size` per línies (ja present al material).
  Al PDF hi ha dos avisos de substitució de `→` per `->` en llegendes de gràfic.
  No hi ha error LaTeX fatal ni HTML literal detectat.
- PDF pàgina 92: `$8 ? ? ? ? ?$` ja és a `08-Inferencia_Aplicada.Rmd:512`.
  La taula d'Exercici 15 superposa l'etiqueta de tractament amb una dada;
  s'ha comprovat visualment també al PDF antic. No s'ha corregit contingut.
- No hi ha àncores locals inexistents ni imatges referenciades absents després
  de la correcció. El PDF es genera separadament, per tant l'enllaç requereix
  col·locar-lo amb els HTML. `style.css` i `blocks.css` continuen carregats.
- Scratch HTML: 53 fitxers creats/modificats (47 a docs, 6 al directori
  `EjerciciosInferenciaEstadistica_files`). PDF: 13 (2 a docs, 11 al directori
  de figures). Els gràfics PDF són vectorials: zero imatges raster no significa
  absència de figures.

## Validació funcional i visual

Evidència local a `../_phase0-scratch/`, fora dels dos repositoris. Els informes
`*-validation.json`, `*-pdf-validation.json` i `supplement.json` contenen les
comparacions. `check_baseline.py` i `supplement.py` són auxiliars locals de
validació, no dependències del build. Els logs complets inclouen tots els
paquets carregats, inclosos namespaces transitivament carregats.

S'ha muntat `preview/A` i `preview/B` copiant els HTML generats i el PDF
corresponent dels renders separats. No s'ha copiat cap output als `docs/` originals.
Servits localment amb HTTP, els dos links PDF retornen 200 i els PDFs es poden
obrir/analitzar. La manca de PDF dins d'un render només HTML no és una regressió.

Comprovat al navegador: portades, índexs, cerca (`grandes` a A, `bootstrap` a B),
navegació i fórmules; B també amb clic real next/previous entre capítols 2 i 3.
Mostres A/probabilitat: 177 expressions MathJax, zero errors MathJax i cap imatge
trencada; B/variables: 301 expressions, 76 blocs de codi, una taula, zero errors
MathJax i cap imatge trencada. Sense warnings/errors de consola a aquestes
mostres. L'escaneig de tots els HTML confirma assets locals href/src existents,
excepte els links R-Tutor d'A ja indicats i el PDF encara no ensamblat.
No s'ha fet auditoria responsive ni validació exhaustiva dels serveis externs.

PDFs renderitzats a PNG i inspeccionats: A pàgines 1, 34, 108, 109 i 320;
B pàgines 1, 11, 27 i 92, més pàgina 92 del PDF antic. Es veuen accents,
numeració, TOC, equacions, codi/output R, figures i bibliografia d'A. B conserva
les referències com a notes, inclosa Hesterberg al capítol 9; no té un capítol
bibliogràfic separat. La llegenda «Figura 2.1» a A/p108 és text sense una figura
associada en aquell punt; es conserva com al PDF antic. La revisió és mostral,
no de totes les pàgines. Poppler ha avisat de fonts de substitució Symbol i
ArialUnicode en la mostra del gràfic de B, que es visualitza.

## Fixes applied

| Repo | File | Problem | Change | Reason | Risk |
| --- | --- | --- | --- | --- | --- |
| A | `BASELINE_BUILD.md` | Faltava baseline executat | Aquest registre | Distingir estat previ i futur | Documental |
| A | `scripts/baseline.ps1`, `scripts/baseline-render.R` | R fora del PATH, locale invàlid i renders que escriuen assets | Còpia scratch, executables explícits, locale temporal, logs i hashes | Reproducció segura de cada format | Runner específic per aquests manifests plans; requereix PowerShell 7 |
| B | `_bookdown.yml` | Majúscula divergent al manifest | Referència al nom real `03-Distribuciones_multivariantes.Rmd` | Portabilitat a sistemes case-sensitive | Baix; no es renomena el fitxer |
| B | `_bookdown.yml` | `ui` fora de `language` | Indentació mínima | Aplicar `chapter_name` | Canvi esperat de prefix visible |
| B | `_output.yml` | PDF i icona inexistents | Nom PDF real i retirada de la icona | Descàrrega resoluble | Baix |
| B | `index.Rmd` | Títol `.knit` sense YAML | Metadades mínimes de títol, autors existents i site | Identificar el llibre | Portada/TOC del PDF es repaginen; cos intacte |
| A i B | `renderBook.R` | HTML executat dues vegades | Eliminar la primera crida redundant | HTML + PDF són els dos outputs sol·licitats | Baix; mantenir la segona crida i els motors actuals |

La primera crida sense format usa el primer format de `_output.yml`, GitBook;
la segona ja demana GitBook i PDF. S'ha eliminat només la primera. El baseline
executa cada format separadament per aïllar-ne errors; no introdueix perfils futurs.

## Known issues

1. **Excepció d'entorn acceptada:** sortida nativa no zero de R, reproduïble fora
   dels llibres. S'accepten els artefactes validats; es conserva el codi real.
2. Literals `??`, taula solapada de B, captions antigues i avisos LaTeX/gràfics
   descrits més amunt. Cal conservar-los com a incidències anteriors a la fusió.
3. Dos links R-Tutor d'A són rutes relatives malformades. La cerca i navegació
   principal funcionen, però no es declara absència total de links trencats.
4. Figures de simulació i data de portada poden variar. No s'han fixat seeds,
   versions ni creat `renv.lock`; les versions efectives queden registrades.
5. El widget actiu d'A impedeix excloure indiscriminadament `htmlWidgets/`.
   Els materials històrics restants continuen intactes i fora del manifest.
6. Els `.gitignore` actuals ignoren l'estat R i `_bookdown_files/`, però no tots
   els directoris `*_files` ni intermedis observats. No s'han afegit patrons:
   scratch ja evita embrutar els repositoris i no convé ocultar recursos docents
   amb un wildcard ampli. No s'ha retirat de Git cap output versionat.

## Phase 1 readiness

**READY WITH ENVIRONMENT EXCEPTION.** La decisió de projecte substitueix la
conclusió anterior NOT READY que consta al registre històric de proves.
Phase 0 queda tancada i es pot iniciar la fusió controlada amb GitBook, comprovant
els artefactes en scratch. Els quatre outputs del baseline estan generats i
validats; la incidència de sortida de plataforma no bloqueja Phase 1. Validar
exit code 0 en un entorn R natiu compatible queda ajornat i no s'instal·larà
R ARM64 experimental ara. Les incidències editorials preexistents continuen
separades de les possibles regressions d'integració.

Els commits es divideixen en documentació/scripts a A, configuració a B i
eliminació del render redundant a cada repositori. `AUDIT_FORMAT.md` i els tres
fitxers no versionats de B es mantenen fora d'aquests commits. No hi ha push,
fusió, importació, canvi de contingut docent, renderer, CSS o GitHub Pages.
