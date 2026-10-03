# Protocol de revisió d'unitats

## 1. Objectiu

Aquest protocol defineix el procediment estàndard per revisar, actualitzar i validar cadascuna de les unitats del bookdown **Fundamentos de Inferencia Estadística**.

La revisió ha de ser sistemàtica, reproduïble i tan autònoma com sigui possible, reservant la intervenció docent per a les decisions que realment requereixen criteri acadèmic.

La **Unitat 1 ja revisada** s'ha d'utilitzar com a referència principal de qualitat editorial, didàctica i tècnica.

---

# 2. Fonts que s'han de considerar

Per revisar una unitat cal considerar conjuntament:

1. El capítol corresponent del bookdown principal.
2. Els exercicis relacionats, inclosos els que es trobin al repositori o estructura d'exercicis.
3. Les unitats immediatament anterior i posterior quan sigui necessari per comprovar:
   - prerequisits;
   - continuïtat conceptual;
   - duplicacions;
   - notació;
   - progressió didàctica.
4. Les preguntes originals de **Statmedia** corresponents al capítol.
5. Les convencions editorials i tècniques establertes al projecte.
6. La Unitat 1 revisada com a patró de referència.

---

# 3. Localització dels qüestionaris Statmedia

Tota la carpeta original de Statmedia es troba ara dins de:

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
- utilitzar `Y = 0` només com a suport per entendre la navegació, organització o metadades originals;
- no assumir que totes les preguntes originals són correctes o adequades.

La correspondència entre número de capítol Statmedia i unitat actual del bookdown s'ha de comprovar abans de modificar res. Si no és inequívoca, s'ha d'assenyalar com a decisió docent.

---

# 4. Fase 1 — Auditoria

Abans de modificar cap fitxer, fer una auditoria completa de la unitat.

Cal revisar:

## 4.1 Contingut estadístic

Comprovar:

- correcció conceptual;
- definicions;
- hipòtesis i condicions d'aplicació;
- fórmules;
- notació;
- interpretacions;
- terminologia;
- exemples;
- coherència entre text, fórmules i resultats;
- possibles continguts obsolets;
- absències importants per al nivell de l'assignatura.

No ampliar contingut simplement perquè sigui possible. Les ampliacions han de tenir justificació docent.

## 4.2 Estructura didàctica

Comprovar:

- ordre dels conceptes;
- prerequisits;
- progressió de dificultat;
- transicions entre seccions;
- explicacions massa abruptes;
- repeticions;
- seccions excessivament llargues o fragmentades;
- exemples que apareixen abans de la teoria necessària;
- relació entre teoria i exercicis.

## 4.3 Coherència global

Comprovar:

- coherència amb unitats anteriors;
- anticipacions innecessàries de contingut posterior;
- notació consistent;
- terminologia consistent;
- absència de contradiccions;
- referències creuades correctes.

## 4.4 Format i presentació

Comprovar:

- jerarquia de títols;
- blocs especials;
- taules;
- figures;
- equacions;
- fragments de codi;
- espais;
- llistes;
- referències;
- llegibilitat HTML i PDF;
- coherència visual amb la Unitat 1 revisada.

## 4.5 Codi R

Quan hi hagi codi:

- comprovar que s'executa;
- evitar dependències innecessàries;
- comprovar que els resultats concorden amb el text;
- revisar noms d'objectes i comentaris;
- evitar codi obsolet;
- mantenir un nivell adequat per als estudiants.

---

# 5. Classificació de les incidències

Totes les incidències detectades s'han de classificar en tres categories.

## A. Correcció automàtica

Canvis inequívocs que es poden aplicar sense consulta:

- errates;
- errors Markdown;
- errors tipogràfics;
- referències trencades;
- incoherències de format;
- notació accidentalment inconsistent;
- codi que falla per un error evident;
- duplicacions accidentals;
- problemes tècnics inequívocs.

## B. Millora recomanada

Canvis que milloren clarament el material però poden tenir algun component editorial:

- explicacions poc clares;
- transicions millorables;
- exemples poc pedagògics;
- ordre millorable;
- paràgrafs excessivament densos;
- necessitat d'una breu aclariment;
- presentació millor adaptada a l'estil de la Unitat 1.

Codex pot proposar una solució concreta i preparar-la.

## C. Decisió docent

No aplicar sense intervenció explícita:

- eliminar contingut substantiu;
- afegir teoria nova important;
- canviar el nivell matemàtic;
- canviar l'enfocament estadístic;
- modificar conceptes o terminologia amb implicacions docents;
- reestructurar profundament una unitat;
- discrepàncies conceptuals no trivials;
- decisions sobre què entra o no entra a l'assignatura.

L'objectiu és minimitzar el nombre d'incidències C.

---

# 6. Informe després de l'auditoria

No generar una llarga discussió secció per secció.

Produir primer un resum executiu semblant a:

- Nombre d'incidències A.
- Nombre d'incidències B.
- Nombre d'incidències C.
- Valoració global de la unitat.
- Principals problemes detectats.
- Decisions docents que cal prendre.

Mostrar amb detall sobretot les incidències de tipus C.

No començar la implementació de les decisions C fins que s'hagin resolt.

---

# 7. Fase 2 — Implementació

Una vegada resoltes les decisions docents:

1. Aplicar totes les correccions A.
2. Aplicar les millores B acceptades o clarament justificades.
3. Aplicar les decisions C segons les instruccions rebudes.
4. Mantenir l'estil i estructura establerts a la Unitat 1.
5. Evitar canvis laterals en altres unitats, excepte quan siguin imprescindibles per coherència.

Si durant la implementació apareix una nova decisió docent important, documentar-la en comptes d'improvisar.

---

# 8. Fase 3 — Revisió de preguntes Statmedia

Després d'actualitzar el contingut principal, revisar els tres qüestionaris Statmedia associats.

Per cada pregunta:

1. Identificar què avalua.
2. Comprovar que correspon realment al contingut de la unitat.
3. Comprovar que l'enunciat és correcte.
4. Comprovar que les respostes són correctes.
5. Detectar:
   - ambigüitats;
   - errors;
   - formulacions obsoletes;
   - opcions múltiples potencialment correctes;
   - preguntes redundants;
   - preguntes trivials;
   - preguntes excessivament perifèriques.
6. Adaptar la redacció si cal, preservant el contingut útil de l'original.
7. No conservar errors simplement perquè provenen de Statmedia.

---

# 9. Cobertura del qüestionari

Després de revisar les preguntes originals, comparar-les amb els objectius i continguts efectius de la unitat.

Detectar:

- conceptes importants sense cap pregunta;
- conceptes sobrerrepresentats;
- excés de preguntes memorístiques;
- falta de preguntes d'interpretació o aplicació;
- redundàncies.

Quan sigui útil, proposar preguntes noves per cobrir buits.

Les preguntes noves s'han d'identificar internament com a noves durant la revisió, encara que després s'integrin normalment en el banc.

---

# 10. Integració del qüestionari

Integrar el qüestionari utilitzant **exactament la mateixa infraestructura tècnica i criteris de presentació establerts per a la Unitat 1**, tret que hi hagi una raó explícita per modificar-los.

No crear una infraestructura alternativa.

Comprovar:

- compatibilitat amb el banc de preguntes existent;
- identificadors;
- format;
- resposta correcta;
- feedback si correspon;
- renderització;
- funcionament de la interfície.

---

# 11. Fase 4 — Validació final

La unitat només es considera acabada quan s'ha comprovat:

### Contingut

- correcció estadística;
- coherència conceptual;
- notació consistent;
- terminologia consistent;
- progressió didàctica adequada.

### Material

- exemples correctes;
- exercicis coherents;
- codi executable;
- figures correctes;
- taules correctes;
- referències creuades correctes.

### Qüestionari

- preguntes revisades;
- respostes correctes;
- absència d'ambigüitats evidents;
- cobertura adequada del contingut;
- integració tècnica correcta.

### Build

- HTML correcte;
- PDF correcte, sempre que l'entorn permeti generar-lo;
- absència d'errors de renderització;
- absència d'enllaços interns trencats;
- absència d'identificadors duplicats;
- navegació correcta.

---

# 12. Definition of Done

Una unitat es pot marcar com a **VALIDADA** només quan:

1. s'ha completat l'auditoria;
2. s'han resolt les decisions docents;
3. s'han aplicat les correccions;
4. s'ha revisat el qüestionari Statmedia;
5. s'ha comprovat la cobertura del qüestionari;
6. s'ha integrat el qüestionari;
7. s'ha fet el build;
8. no queden incidències substantives obertes.

---

# 13. Expedient de la unitat

Mantenir un únic document de seguiment per unitat, per exemple:

`_REVISION/units/UXX.md` (dos dígits: `U01.md`, `U02.md`, `U03.md`, ...)

amb aquesta estructura:

## Estat

PENDENT / EN AUDITORIA / EN REVISIÓ / VALIDADA

## Auditoria

Resum dels principals problemes detectats.

## Decisions docents

Només decisions que han requerit intervenció.

## Canvis realitzats

Resum dels canvis substantius.

## Qüestionari

- fitxers Statmedia utilitzats;
- preguntes originals revisades;
- preguntes descartades o corregides;
- preguntes noves afegides;
- cobertura final.

## Validació

Resultat dels builds i comprovacions.

## Pendents

Només problemes que realment quedin oberts.

No generar múltiples informes redundants ni conservar artefactes temporals si no tenen utilitat posterior.