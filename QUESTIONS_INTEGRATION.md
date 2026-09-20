# Cuestiones: integración HTML

La fuente canónica editable es `../Cuestiones/Unidad_1/questions.yml`. Es un
banco JSON válido también como YAML 1.2, independiente de Bookdown y de futuros
formatos LMS.

En el perfil HTML `scripts/build.ps1` llama a `scripts/build-questions.ps1`.
El script valida el banco y genera `docs/questions/unit1.json` en el resultado
del build. Ese recurso público contiene únicamente `id`, `topic`,
`difficulty`, `question`, `options`, `correct` y, cuando existe,
`explanation`.

El motor estático está en `questions/index.html`, `questions/quiz.js` y
`questions/quiz.css`; el build lo copia a `docs/questions/`. La navegación
HTML incluye Teoría, Problemas y Cuestiones. Para probarlo localmente, ejecute
el perfil HTML en un scratch nuevo con `scripts/build.ps1` y sirva el
directorio `work/docs`; abra `questions/index.html`.

Las claves están visibles deliberadamente en el JSON porque la funcionalidad es
de autoevaluación en el navegador, no una prueba evaluativa. Se posponen
intencionadamente usuarios, historial, almacenamiento, adaptación, selección
por dificultad, exportación Canvas/QTI y explicaciones para los ítems heredados.
