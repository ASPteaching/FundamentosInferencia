# Protocol de revisió d'unitats

## 1. Objectiu

Aquest protocol defineix el procediment estàndard per revisar, actualitzar, validar i publicar cadascuna de les unitats del bookdown **Fundamentos de Inferencia Estadística**.

La revisió ha de ser:

- sistemàtica;
- reproduïble;
- tan autònoma com sigui possible;
- rigorosa des del punt de vista estadístic;
- pedagògicament orientada;
- tècnicament validada;
- revisada finalment pel docent abans de publicar.

La **Unitat 1 revisada** i les unitats posteriorment validades constitueixen la referència editorial, pedagògica i tècnica.

Codex ha de fer de manera autònoma les tasques mecàniques i les millores inequívocament justificades. La intervenció docent s'ha de reservar per a decisions substantives.

---

# 2. Fonts que s'han de considerar

Per revisar una unitat cal considerar conjuntament:

1. El capítol corresponent del bookdown principal.
2. Els exercicis relacionats.
3. Les unitats immediatament anterior i posterior quan sigui necessari per comprovar:
   - prerequisits;
   - continuïtat conceptual;
   - duplicacions;
   - notació;
   - progressió didàctica.
4. Les preguntes originals de **Statmedia** corresponents al capítol.
5. Les convencions editorials i tècniques establertes al projecte.
6. Les unitats ja revisades com a patró de qualitat.
7. Els documents de handoff, auditoria, integració del QuestionBank i scripts vigents.

Les fonts històriques, sortides generades i còpies antigues no s'han d'editar si existeix una font canònica més recent.

---

# 3. Localització dels qüestionaris Statmedia

Tota la carpeta original de Statmedia es troba dins de:

`InferenciaEstadistica2026/statmedia/`

Dins de `statmedia` hi ha una carpeta per capítol.

Cada capítol conté quatre fitxers HTML amb noms que segueixen aproximadament el patró:

`B1CXm3tY.htm`

on:

- `X` identifica el número de capítol;
- `Y = 0` correspon al navegador o índex de preguntes;
- `Y = 1, 2 o 3` correspon als tres qüestionaris de preguntes.

Per revisar el capítol X:

- utilitzar els tres fitxers amb `Y = 1, 2, 3` com a font principal de preguntes;
- utilitzar `Y = 0` com a suport per entendre organització i navegació;
- inspeccionar també els recursos gràfics o fórmules associats quan sigui necessari;
- preservar els originals;
- no assumir que les claus, opcions o formulacions originals són correctes.

La correspondència entre número de capítol Statmedia i unitat actual del bookdown s'ha de comprovar pel contingut, no només pel número.

---

# 4. Fase 1 — Auditoria

Abans de modificar les fonts docents, fer una auditoria completa de la unitat.

## 4.1 Contingut estadístic

Comprovar:

- correcció conceptual;
- definicions;
- hipòtesis;
- condicions d'aplicació;
- fórmules;
- notació;
- càlculs;
- interpretacions;
- terminologia;
- exemples;
- coherència entre text, fórmules, codi i resultats;
- possibles continguts obsolets;
- mancances importants per al nivell de l'assignatura.

No ampliar contingut simplement perquè sigui possible. Les ampliacions han de tenir justificació docent.

## 4.2 Estructura didàctica

Comprovar:

- ordre dels conceptes;
- prerequisits;
- progressió de dificultat;
- transicions;
- repeticions;
- explicacions massa abruptes;
- seccions excessivament denses o fragmentades;
- relació entre teoria, exemples i exercicis;
- anticipacions de conceptes encara no introduïts.

## 4.3 Densitat d'abstracció

Comprovar explícitament si els conceptes abstractes s'acompanyen prou aviat d'una representació concreta.

Quan sigui pedagògicament útil, afegir **exemples breus** que ajudin l'estudiant a interpretar el concepte abans de continuar amb la formalització.

Aquests exemples:

- han de ser breus;
- han d'aparèixer prop del concepte que il·lustren;
- no han de repetir exemples desenvolupats existents;
- s'han de presentar amb el mateix estil visual dels exemples del curs;
- han d'utilitzar la numeració de la secció quan correspongui, per exemple:
  `Ejemplo 3.2.1`, `Ejemplo 3.2.2`, etc.

Evitar denominacions com «Microejemplo».

Un exemple no numerat només és acceptable en una introducció o situació en què la numeració resulti artificial; en aquest cas es pot utilitzar, per exemple, «Ejemplo breve».

## 4.4 Coherència global

Comprovar:

- coherència amb unitats anteriors;
- connexió amb unitats posteriors;
- notació consistent;
- terminologia consistent;
- absència de contradiccions;
- referències creuades;
- coherència del nivell matemàtic.

## 4.5 Format i presentació

Comprovar:

- jerarquia de títols;
- caixes pedagògiques;
- exemples;
- taules;
- figures;
- captions;
- text alternatiu;
- equacions;
- fragments de codi;
- llistes;
- referències;
- llegibilitat HTML i PDF;
- consistència amb les unitats ja revisades.

### Figures reproduïbles

Identificar els gràfics estadístics estàtics heretats i valorar-ne la substitució per codi R reproduïble, mantenint la coherència matemàtica i visual amb el contingut original.

Inventariar les imatges i distingir gràfics estadístics d’altres recursos. Quan es reconstrueixin, verificar suport, paràmetres, salts de les CDF, etiquetes, peus i llegibilitat HTML/PDF. Fer servir dependències i estils existents, conservar els originals fins a validar la substitució i registrar la correspondència imatge–chunk a l’expedient. Quan sigui possible, mostrar el codi desplegable en HTML mantenint visible la figura.

## 4.6 Codi R

Quan hi hagi codi:

- comprovar que s'executa;
- comprovar que els resultats coincideixen amb el text;
- evitar codi obsolet;
- evitar dependències innecessàries;
- revisar noms d'objectes;
- mantenir un nivell adequat per als estudiants.

Comprovar també si hi ha conceptes que es beneficiarien d'un **fragment breu d'R**.

R s'ha d'incorporar quan ajudi a entendre o aplicar el concepte, no simplement per augmentar la quantitat de codi.

Són especialment útils fragments curts per:

- representar una distribució;
- comprovar probabilitats;
- calcular esperança o variància;
- visualitzar una massa, densitat o CDF;
- relacionar fórmules i funcions d'R;
- fer simulacions senzilles quan aportin intuïció.

---

# 5. Classificació de les incidències

Les incidències s'han de classificar en tres categories.

## A — Correcció automàtica

Canvis inequívocs:

- errates;
- errors matemàtics evidents;
- errors numèrics;
- errors Markdown;
- referències trencades;
- problemes de format;
- notació accidentalment inconsistent;
- codi que falla per error evident;
- duplicacions accidentals;
- problemes tècnics inequívocs.

No cal consultar el docent.

## B — Millora recomanada

Canvis amb justificació pedagògica o editorial clara:

- explicacions poc clares;
- transicions millorables;
- exemples breus necessaris;
- ordre local millorable;
- textos excessivament densos;
- petites precisions conceptuals;
- connexions útils amb R;
- millores visuals;
- millor coherència amb les unitats revisades.

Codex pot proposar i preparar una solució concreta.

## C — Decisió docent

No aplicar sense intervenció explícita:

- eliminar contingut substantiu;
- afegir teoria nova important;
- canviar el nivell matemàtic;
- canviar l'enfocament estadístic;
- reubicar contingut entre unitats;
- modificar l'abast curricular;
- adoptar terminologia amb conseqüències docents;
- discrepàncies conceptuals no trivials.

L'objectiu és que el nombre de decisions C sigui petit.

---

# 6. Informe després de l'auditoria

L'auditoria no ha de convertir-se en una discussió exhaustiva secció per secció.

Presentar un resum compacte amb:

- valoració global;
- nombre d'incidències A, B i C;
- principals problemes;
- millores pedagògiques proposades;
- situació del codi R;
- observacions preliminars del QuestionBank;
- decisions C que necessiten criteri docent;
- possibles bloquejos.

Mostrar amb detall sobretot les decisions C.

Crear o actualitzar:

`_REVISION/units/UXX.md`

utilitzant sempre dos dígits:

- `U01.md`
- `U02.md`
- `U03.md`
- etc.

Estat en aquesta fase:

**EN AUDITORIA — PENDENT DE DECISIONS DOCENTS**

---

# 7. Fase 2 — Decisions docents

El docent revisa les decisions C i fixa el criteri.

Codex ha d'aplicar després aquestes decisions com a instruccions definitives per a la unitat.

Si durant la implementació apareix una nova decisió docent substantiva:

- documentar-la;
- aturar només aquella modificació;
- continuar amb la resta de treball que no depengui d'aquesta decisió.

---

# 8. Fase 3 — Implementació

Una vegada resoltes les decisions docents:

1. aplicar les correccions A;
2. aplicar les millores B justificades;
3. aplicar les decisions C;
4. revisar la coherència global després dels canvis;
5. incorporar exemples breus quan siguin necessaris;
6. incorporar connexions breus amb R quan aportin valor;
7. mantenir l'estil de les unitats ja revisades;
8. evitar modificacions laterals innecessàries.

No editar les sortides publicades com a substitut de les fonts canòniques.

---

# 9. Fase 4 — Revisió de preguntes Statmedia

Revisar formalment totes les preguntes associades.

Per cada pregunta:

1. identificar què avalua;
2. comprovar correspondència amb la unitat;
3. verificar l'enunciat;
4. verificar totes les opcions;
5. recalcular la resposta correcta;
6. detectar:
   - claus incorrectes;
   - ambigüitats;
   - més d'una resposta correcta;
   - cap resposta correcta;
   - formulacions obsoletes;
   - dependències d'una pregunta anterior;
   - redundàncies;
   - continguts perifèrics.
7. convertir fórmules en imatge a matemàtiques accessibles quan sigui possible;
8. conservar traçabilitat amb la font original.

Les preguntes han de ser **autosuficients**, perquè el motor pot seleccionar-les en ordre aleatori.

Els originals de Statmedia no s'han de modificar.

---

# 10. Cobertura del QuestionBank

Comparar el banc revisat amb el contingut efectiu de la unitat.

Detectar:

- conceptes importants sense preguntes;
- conceptes sobrerrepresentats;
- excés de preguntes purament mecàniques;
- manca d'interpretació;
- manca d'aplicació;
- manca de connexió amb R quan sigui pertinent.

Afegir preguntes noves quan existeixi un buit pedagògic clar.

Les preguntes noves han de quedar identificades internament com a noves i diferenciades de les procedents de Statmedia.

No s'ha de forçar un nombre fix de preguntes per raons tècniques.

---

# 11. Integració del QuestionBank

Utilitzar el motor compartit existent.

No crear motors independents per unitat.

El sistema ha de permetre:

- múltiples unitats;
- nombre variable de preguntes;
- identificadors únics;
- selecció aleatòria;
- explicacions;
- canvi entre unitats;
- reinici de respostes;
- creixement a futures unitats.

Cada nova unitat ha de conservar la regressió funcional de les unitats anteriors.

---

# 12. Fase 5 — Validació tècnica

Executar:

## 12.1 R

- tots els chunks rellevants;
- comprovació dels resultats numèrics;
- comprovació dels gràfics;
- absència d'avisos nous rellevants.

## 12.2 HTML

Comprovar:

- render complet;
- navegació;
- àncores;
- MathJax;
- figures;
- taules;
- caixes;
- codi;
- absència de desbordaments evidents.

## 12.3 PDF

Comprovar:

- PDF de teoria;
- PDF d'exercicis;
- fórmules;
- figures;
- taules;
- salts de pàgina;
- títols;
- caixes.

## 12.4 QuestionBank

Comprovar:

- exportació;
- nombre d'ítems;
- IDs;
- una única resposta correcta;
- càrrega de la unitat;
- selecció aleatòria;
- correcció;
- explicacions;
- canvi entre unitats;
- regressió de bancs anteriors.

## 12.5 Prova local

Quan existeixi una versió HTML local per a revisió, comprovar també el comportament real de la versió lliurada al docent.

Si el sistema té comportaments diferents entre:

- `file://`
- servidor HTTP local
- GitHub Pages

cal explicitar-los.

Un test automatitzat no substitueix una prova manual quan l'entorn d'ús és diferent.

Estat després d'aquesta fase:

**VALIDACIÓ TÈCNICA COMPLETADA — PENDENT REVISIÓ DOCENT I PUBLICACIÓ**

---

# 13. Fase 6 — Revisió docent manual

El docent revisa la versió generada abans de publicar.

Aquesta revisió ha de centrar-se especialment en:

- llegibilitat;
- exemples;
- abstracció excessiva;
- coherència pedagògica;
- quantitat i utilitat d'R;
- figures;
- caixes;
- exercicis;
- funcionament real del qüestionari;
- qualsevol canvi conceptual important.

La validació automàtica de Codex no substitueix aquesta revisió.

Si el docent detecta problemes:

1. implementar les correccions;
2. repetir els tests afectats;
3. tornar a presentar la versió revisada.

La unitat només passa a publicació quan existeix acceptació docent explícita.

---

# 14. Fase 7 — Publicació

Un cop acceptada la revisió docent:

1. comprovar `git status`;
2. identificar exactament els repositoris afectats;
3. excloure:
   - scratch;
   - logs;
   - artefactes temporals;
   - builds de prova;
4. confirmar que les fonts canòniques contenen la versió aprovada;
5. generar o actualitzar la sortida canònica publicada;
6. comprovar que els fitxers de QuestionBank necessaris estan inclosos;
7. fer commits clars;
8. fer `push`;
9. comprovar que el push s'ha completat correctament.

---

# 15. Fase 8 — Validació postpublicació

La publicació no es considera correcta només perquè `git push` hagi acabat.

Comprovar la versió publicada real:

- pàgina principal;
- unitat revisada;
- exemples;
- figures;
- codi;
- enllaços;
- selector de QuestionBank;
- càrrega de la unitat nova;
- generació d'un qüestionari;
- resposta i explicació;
- almenys una unitat anterior per comprovar regressions.

Si GitHub Pages necessita temps per actualitzar-se, la comprovació s'ha de fer quan la versió publicada estigui disponible.

---

# 16. Definition of Done

Una unitat només es pot declarar finalitzada quan:

1. auditoria completada;
2. decisions docents resoltes;
3. correccions implementades;
4. revisió pedagògica completada;
5. exemples breus incorporats quan són necessaris;
6. connexions amb R revisades;
7. preguntes Statmedia revisades;
8. cobertura del QuestionBank revisada;
9. integració del QuestionBank completada;
10. builds HTML/PDF correctes;
11. validació tècnica correcta;
12. regressió de les unitats anteriors correcta;
13. revisió docent manual completada;
14. acceptació docent explícita;
15. fonts canòniques actualitzades;
16. commits i push completats;
17. versió publicada comprovada.

L'estat final és:

**VALIDADA, REVISADA DOCENTMENT I PUBLICADA**

No utilitzar aquest estat abans de completar la comprovació postpublicació.

---

# 17. Expedient de la unitat

Mantenir un únic document:

`_REVISION/units/UXX.md`

amb aquesta estructura:

## Estat

Utilitzar, segons el moment:

- `EN AUDITORIA — PENDENT DE DECISIONS DOCENTS`
- `EN REVISIÓ`
- `VALIDACIÓ TÈCNICA COMPLETADA — PENDENT REVISIÓ DOCENT I PUBLICACIÓ`
- `REVISIÓ DOCENT ACCEPTADA — PENDENT PUBLICACIÓ`
- `VALIDADA, REVISADA DOCENTMENT I PUBLICADA`

## Auditoria

Resum dels problemes detectats.

## Decisions docents

Només les decisions que han requerit intervenció.

## Canvis realitzats

Resum substantiu.

## Revisió pedagògica

- exemples breus afegits;
- exemples desenvolupats modificats;
- millores de claredat;
- connexions amb R.

## Qüestionari

- fonts Statmedia;
- preguntes originals;
- correccions;
- preguntes noves;
- cobertura final;
- funcionament del motor.

## Validació tècnica

- R;
- HTML;
- PDFs;
- QuestionBank;
- regressions.

## Revisió docent

- incidències detectades manualment;
- correccions posteriors;
- acceptació.

## Publicació

- repositoris;
- branca;
- commits;
- push;
- URL publicada;
- comprovació postpublicació.

## Pendents

Només problemes realment oberts.

No generar múltiples informes redundants ni conservar artefactes temporals sense utilitat posterior.