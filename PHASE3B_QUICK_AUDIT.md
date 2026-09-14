# Phase 3B — Quick robustness audit

Data: 2026-09-14  
Base auditada: publicació de Phase 3A a `main` (`c5e2858`).

## Abast i comprovacions

Auditoria ràpida orientada a problemes greus d'ús, sense repetir la revisió
visual humana de Phase 3A ni modificar contingut, CSS o PDFs.

- Portada i navegació a `index.html`: càrrega correcta, navegació de capítols i
  enllaços de descàrrega visibles.
- Capítol teòric amb fórmules: `estimación-puntual.html`.
- Capítol amb taules: `distribuciones-de-probabilidad-multidimensionales.html`.
- Capítol d'exercicis amb codi i output: `ex-inferencia-aplicada.html`.
- Vista estreta de navegador: portada, text, codi i taules comprovats; no s'han
  observat figures tallades ni blocs de codi fora de lloc.
- Recursos locals: presents `index.html`, els dos PDFs, `search.json`,
  `blocks.css`, `bs4-style.css` i les llibreries locals de Bootstrap, jQuery i
  bs4_book.
- Localització i enllaços: `Tabla de contenidos`, `En esta página` i els dos
  enllaços PDF són presents a l'HTML publicat. L'estat HTTP 200 dels PDFs ja es
  va verificar al checkpoint de publicació; no s'han regenerat PDFs.

## A — Bloquejants

Cap incidència A detectada. No s'ha aplicat cap correcció.

## B — Important però no urgent

| Capítol | Fitxer | Problema | Recomanació |
| --- | --- | --- | --- |
| 7. Estimación puntual | `docs/estimación-puntual.html` | En vista estreta, algunes fórmules en línia molt llargues excedeixen l'amplada del contingut i activen desplaçament horitzontal de pàgina. El text i les fórmules continuen accessibles. | A Phase 3C, estudiar un tractament responsive específic de MathJax que no alteri la composició d'escriptori. |
| 4. Distribuciones de probabilidad multidimensionales | `docs/distribuciones-de-probabilidad-multidimensionales.html` | Les taules de moltes columnes requereixen desplaçament horitzontal en mòbil. Es mostren correctament i no trenquen la columna de lectura. | Mantenir el desplaçament com a solució segura o valorar, en una fase posterior, una presentació responsive per a taules amples. |
| 8. Estimación por intérvalos | `docs/estimación-por-intérvalos.html` | Dos enllaços visibles «R-Tutor» tenen `href="r-tutor.com"`, sense esquema ni URL absoluta; poden resoldre's com a rutes locals inexistents. | Corregir només en una fase editorial/contingut posterior, apuntant a l'URL HTTPS ja citada al costat. |

## C — Cosmètic / diferible

| Capítol | Fitxer | Problema | Recomanació |
| --- | --- | --- | --- |
| Navegació global | `profiles/bs4-book-es.html` (generat a `docs/*.html`) | El text de suport del botó mòbil (`Show table of contents`) i el placeholder/etiqueta de cerca (`Search`) continuen en anglès. No impedeixen navegar ni cercar. | Completar la localització de l'accessibilitat i de la cerca dins d'una fase posterior de configuració de plantilla. |

## Estabilitat

El llibre publicat continua estable per a l'ús normal: navegació, cerca, recursos
locals i enllaços PDF estan disponibles. No s'ha fet cap canvi de producció ni
cap rerenderització.
