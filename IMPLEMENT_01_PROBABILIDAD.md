# Implementación — Capítulo 1: Probabilidad

| ID | Sección | Tipo | Cambio realizado | Contenido eliminado? | Observaciones |
| --- | --- | --- | --- | --- | --- |
| A1 | Introducción/frecuencia | Corrección | Estabilización intuitiva de la frecuencia relativa al repetir el experimento en las mismas condiciones. | No | Sin anticipar i.i.d. ni modos de convergencia. |
| A2–A3–A6 | Espacio probabilístico | Corrección | Se presenta $P(A)\in[0,1]$ para cada suceso y se deja la sigma-álgebra como nota opcional. | No | Sin requerir formalismo de medida. |
| A4 | Unión | Corrección | Inclusión-exclusión con índices y límites correctos. | No | Añadido ejemplo de dado. |
| A5 | Intersección | Corrección | Regla del producto y cota de Bonferroni identificada. | No | Se advierte el truncamiento a cero. |
| A7–A8 | Condicionada/independencia | Corrección | Notación $\mid$, condición positiva e independencia simétrica. | No | Se evita inferir causalidad. |
| A9 | Total y Bayes | Corrección | Hipótesis de partición y probabilidades positivas. | No | Relación visible con regla del producto. |
| A10 | Experimentos múltiples | Corrección | Se separan producto, conjunta, marginales e independencia. | No | Las marginales no determinan la conjunta. |
| A11–A12 | Combinatoria | Corrección | Se corrige `sin`, multiplicidades y fórmula de PATATA. | No | |
| B1 | Notación | Mejora | Se normalizan las secciones modificadas a $P$, $A^c$, $\varnothing$ y $\Omega$. | No | $\mathcal A$ no es necesaria en el capítulo. |
| B3 | Sucesos | Añadido | Ejemplo integrador con dado. | No | Complemento, unión, intersección e inclusión-exclusión. |
| B4/B5 | Bayes | Añadido | Ejemplo numérico de urna y título conectado. | No | Prior y posterior sin desarrollar el marco bayesiano. |
| B6 | Combinatoria | Mejora | Tabla de decisión, $r$ y restricciones. | No | Laplace exige equiprobabilidad. |
| B7/B9 | Frecuencia/R | Añadido | Chunk reproducible Bernoulli y advertencia de no monotonía. | No | |
| B8 | Widget | Conservación | Se mantiene el widget y su alternativa no HTML. | No | |
| B10/B11 | Caso diagnóstico | Corrección | Notación $D,D^c$, datos didácticos, errores y prevalencia. | No | Se añade comparación de VPP. |
| Caja 1 | Espacio probabilístico | Caja | `Idea clave`. | No | Clase CSS reutilizable. |
| Caja 2 | Operaciones | Caja | `Ejemplo`. | No | |
| Caja 3 | Condicionada | Caja | `Atención`. | No | |
| Caja 4 | Frecuencia | Caja | `En R`. | No | |
| Caja 5 | Diagnóstico | Caja | `Atención`. | No | |

## Contingut no implementat / decisions ajornades

- B2: no se reubica el bloque de frecuencia relativa.
- B12 y C2–C5: no se abre una revisión estilística, de figuras o de estructura global.
- La normalización de notación se limita al capítulo 1 y a los fragmentos modificados.
- No se rediseñan los PDF ni se modifica ningún otro capítulo.

## Ajustes posteriores a la revisión humana

- Criterio editorial para revisiones posteriores: **rigor adecuado al punto
  del curso**. Se evita introducir terminología futura si no es necesaria para
  prevenir una afirmación falsa o seriamente engañosa.
- Se añade una introducción motivadora y los sucesos biomédicos $R$ (respuesta
  al tratamiento) y $V$ (variante genética), antes del dado.
- La frecuencia relativa se explica sin i.i.d. ni convergencia en probabilidad;
  la simulación R y la advertencia sobre fluctuaciones se mantienen.
- La presentación de sigma-álgebras se reduce a una nota opcional; se retiran
  $\mathcal A$, sucesos medibles y el desarrollo de teoría de medida del cuerpo
  docente.

## Validación de render

- 2026-09-19, con `R_LIBS` y `R_LIBS_USER` temporales apuntando a
  `C:/Users/sanpl/AppData/Local/R/win-library/4.4`, el mismo R 4.4.3 detectó
  `rmarkdown` 2.31 y `bookdown` 0.46.
- HTML combinado mediante `scripts/build.ps1`: generado correctamente en el
  scratch externo `../_phase4-ch1-validation-html-r44/work/docs/index.html`.
  Se comprobó el capítulo 1: MathJax, las cinco cajas, el widget, la tabla,
  el ejemplo de Bayes, el caso diagnóstico y la figura del chunk
  `frecuencia-relativa`.
- PDF de teoría mediante `scripts/build.ps1`: generado correctamente en
  `../_phase4-ch1-validation-theory-r44-bg4/work/docs/FundamentosInferencia.pdf`
  (321 páginas). Se verificó la presencia del contenido nuevo en las páginas
  9, 16 y 17 mediante extracción de texto.
- El runner registró el código nativo histórico `-1073741569` al cierre del
  proceso, pero ambos artefactos y sus salidas se generaron; no hubo mensajes
  de error de R, Pandoc o LaTeX en los logs finales.

- 2026-09-19, tras los ajustes de revisión humana, HTML combinado y PDF de
  teoría generados de nuevo en scratches externos `../_phase4-ch1-human2-html`
  y `../_phase4-ch1-human2-theory`. Se comprobó la nueva introducción, la
  transición al dado, la ausencia de i.i.d./convergencia en probabilidad y del
  formalismo retirado, las cinco cajas, la simulación, Bayes y el caso
  diagnóstico. Ambos artefactos se generaron correctamente; el runner volvió
  a registrar el código nativo histórico `-1073741569` al cierre.
