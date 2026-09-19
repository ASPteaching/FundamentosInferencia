# Implementación — Capítulo 1: Probabilidad

| ID | Sección | Tipo | Cambio realizado | Contenido eliminado? | Observaciones |
| --- | --- | --- | --- | --- | --- |
| A1 | Introducción/frecuencia | Corrección | Convergencia para un suceso fijo bajo repeticiones i.i.d. | No | No se presenta como definición. |
| A2–A3–A6 | Espacio probabilístico | Corrección | Se define $P:\mathcal A\to[0,1]$ y se explica sigma-álgebra de modo intuitivo. | No | Se integra la definición repetida. |
| A4 | Unión | Corrección | Inclusión-exclusión con índices y límites correctos. | No | Añadido ejemplo de dado. |
| A5 | Intersección | Corrección | Regla del producto y cota de Bonferroni identificada. | No | Se advierte el truncamiento a cero. |
| A7–A8 | Condicionada/independencia | Corrección | Notación $\mid$, condición positiva e independencia simétrica. | No | Se evita inferir causalidad. |
| A9 | Total y Bayes | Corrección | Hipótesis de partición y probabilidades positivas. | No | Relación visible con regla del producto. |
| A10 | Experimentos múltiples | Corrección | Se separan producto, conjunta, marginales e independencia. | No | Las marginales no determinan la conjunta. |
| A11–A12 | Combinatoria | Corrección | Se corrige `sin`, multiplicidades y fórmula de PATATA. | No | |
| B1 | Notación | Mejora | Se normalizan las secciones modificadas a $P$, $A^c$, $\varnothing$, $\Omega$, $\mathcal A$. | No | |
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

## Validación de render

- 2026-09-19, perfil HTML combinado mediante `scripts/build.ps1`, scratch
  externo `../_phase4-ch1-validation-html`: **fallido antes del render**.
  Se usaron explícitamente R 4.4.3 y el directorio Pandoc indicados. El error
  exacto del runner fue: `there is no package called 'rmarkdown'`.
- Por instrucción, no se intentó el PDF de teoría tras este fallo y no se
  modificó contenido para resolverlo.
