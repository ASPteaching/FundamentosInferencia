## TEMA 9 : CONTRAST D'HIPÒTESIS

## Índex del tema 9

$\qquad$
1
9.1. Verificació d'hipòtesis
9.2. Del Ilenguatge natural a la hipòtesi paramètrica ..... 32
9.3. Hipòtesi nul•la contra hipòtesi alternativa ..... 6
9.4. Compatibilitat de resultats i d'hipòtesis ..... 8
9.5. No tot és igualment probable... ..... 10
9.6. El paper privilegiat de la hipòtesi nul•la: criteri de decisió ..... 11
9.7. Hipòtesi nul•la i nivell de significació ..... 12
9.8. Regió crítica i formalització del contrast ..... 14
9.9. Taula de decisió del contrast ..... 16
9.10. Relació entre l'error de tipus I i el de tipus II ..... 18
9.11. Potència i test més potent ..... 20
9.12. Efecte de la grandària mostral ..... 22
9.13. Hipòtesis simples vs. hipòtesis compostes ..... 23
9.14. Funció de potència ..... 26
9.15. Tests òptims ..... 28
9.16. Proves bilaterals i proves unilaterals ..... 29
9.17. Elecció del nivell de significació ..... 32
9.18. El p-valor ..... 32
9.19. Proves exactes i proves asimtòtiques ..... 37
9.20. Relació amb els intervals de confiança ..... 38
9.21. Grandàries de mostra. Diferència mínima significativa ..... 39
9.22. Esquema d'un contrast correctament plantejat ..... 41
9.23. Significació estadística i significació aplicada ..... 41

### Verificació d'hipòtesis

Abans d'introduir els conceptes associats al contrast estadístic d'hipòtesis, és convenient situar aquest tema en el context més general de la confirmació d'hipòtesis, matèria que la filosofia de la ciència estudia en profunditat. Així doncs, en aquest punt només es plantegen consideracions generals, deixant pels següents com aborda l'Estadística aquest tema.

Una qüestió essencial en qualsevol branca de la ciència -bàsica o aplicada- és com verificar hipòtesis sobre un determinat fenomen real. Nombroses vegades, quan s'exposa aquest tema a l'estudiant durant les primeres etapes de la seva formació científica, l'anomenat mètode de raonament científic, es simplifica en excés, presentant la verificació d'hipòtesis en termes absoluts. En aquest esquema simplificat del mètode científic s'exposa com teoritzar sobre un determinat aspecte de la realitat més o menys de la forma següent:

- a) es formula una teoria (o una hipòtesi, o una llei, ...) sobre el fenomen d'estudi
- b) es fa el disseny d'un experiment per tractar de corroborar aquesta teoria
- c) si els resultats de l'experiment concorden amb la teoria, aquesta es dóna provisionalment com a vàlida
- d) si l'experiment contradiu la teoria, es torna a l'apartat a), es modifica la llei o se n'elabora una de nova, per tal que s'ajusti a la realitat experimental.
- e) qualsevol teoria relacionada amb aspectes de la realitat és sempre provisional, pendent de ser revisada en entrar en conflicte amb resultats d'experiments posteriors.

Aquesta forma de procedir -com veurem, excessivament simplista- es basa doncs en el fet d'assumir que en qualsevol experiment s'obtindran resultats que seran o bé totalment contradictoris amb la teoria (i per tant s'haurà d'abandonar immediatament) o bé concordants amb la teoria (i per tant resulta raonable mantenir-la).

Abans s'ha qualificat aquest mètode de validació com a absolut: si obviem el possible error experimental, la decisió que es prengui no comportarà cap error, ja que és suficient verificar els resultats de l'experiment per acceptar o refusar la teoria.

Ha de quedar clar al lector que l'esquema anterior no és el d'un contrast estadístic, i de fet el desenvolupament d'aquest tema s'encarregarà de revisar-ho. En els pròxims apartats s'exposarà, per començar, una primera idea fonamental en Estadística: quan s'introdueix un model de probabilitat per explicar un fenomen, emergeix inevitablement un error ja en la mateixa presa de decisió. En altres paraules, l'esquema anterior s'ha de revisar en els punts c) i d).

Una vegada s'han exposat aquestes qüestions fonamentals en els primers punts del capítol, entrarem al nucli d'aquest tema que consisteix en el desenvolupament ja purament tècnic del contrast estadístic d'hipòtesis.

### Del llenguatge natural a la hipòtesi paramètrica

És necessari considerar, abans d'afrontar la validació estadística d'una hipòtesi, com es planteja aquesta en termes estadístics, ja que la seva formulació exigeix una traducció del llenguatge natural.

Potser convindria recordar que una hipòtesi sobre un determinat fenomen es formula en llenguatge natural com una proposició sobre la realitat. Per exemple, si es considera una determinada espècie d'ocells, una hipòtesi és que la proporció de mascles és idèntica a la de femelles. Un segon exemple, si el problema tracta ara sobre una determinada hormona humana, és proposar com a hipòtesi que la taxa es manté constant quan se subministra un fàrmac anabolitzant.

Statmedia inclou bàsicament una inferència basada en l'estadística paramètrica. En relació amb aquesta perspectiva, els fenòmens reals es modelen segons una determinada llei de probabilitat: per exemple una variable Normal, o una Binomial, o una Poisson, etc.

Això comporta que en estadística paramètrica les proposicions -hipòtesis- es formulin en funció dels paràmetres del model de distribució que modelen aquell aspecte de la realitat.

Aquest és per tant el primer esforç que ha de realitzar l'experimentador: traslladar les seves hipòtesis, que generalment expressa en llenguatge natural, a afirmacions (proposicions) sobre paràmetres, que és la forma en que l'estadística paramètrica comprova les hipòtesis.

En els casos pràctics següents, la solució completa dels quals es veurà al llarg del capítol, es presenten dues situacions diferents.

#### Cas 1: Presentació del cas

Dos coneguts ornitòlegs, especialistes en aus autòctones de l'Amazones Central, discrepen sobre la interpretació de les dades d'una nova espècie de cacatua que ha ressenyat un d'ells. La discussió la centrarem aquí en una de les variables de l'estudi: la proporció de femelles i mascles en els nius. És important precisar que aquestes cacatues es caracteritzen per incubar un sol ou per niu.

El Dr. da Souza Faria ha censat deu nius, les dades dels quals es detallaran després. Segons la seva experiència, aquesta espècie té una gran semblança amb una altra espècie millor estudiada, amb una proporció idèntica de mascles i femelles. Recolzat per les dades obtingudes, conclou que també la nova espècie té la mateixa proporció d'individus de cada sexe.

El Dr. Calves discrepa en aquesta apreciació i manté que la proporció ha de ser de sis femelles per cada 4 mascles.

#### Cas 1: Model de probabilitat

El Dr. da Souza Faria ha comptat en 10 nius el nombre de femelles (complementàriament, el de mascles). La variable és, per tant, discreta i el seu suport és el conjunt $\{0,1,2,3,4,5,6,7,8,9,10\}$.

Si assumim que el possible naixement de femelles és independent entre nius, i definim:

$$
X=\text { nombre de femelles en un total de } 10 \text { nius. }
$$

la distribució de $X$ és una distribució binomial, de paràmetres $n=10$ i $p$ desconeguda.

$$
f(k)=p(X=k)=\binom{10}{k} p^{k}(1-p)^{10-k}
$$

l'únic paràmetre desconegut és la proporció $\boldsymbol{p}$ de femelles. Les hipòtesis estadístiques es referiran només a $p$.

#### Cas 2: Presentació del cas

En el món de l'esport professional es controlen amb molta precisió alguns metabòlits que apareixen en baixes concentracions en condicions normals. Aquest és el cas de la statdrolona(*), que en individus normals presenta una concentració mitjana de 7.0 nanograms per ml d'orina. Aquest valor s'ha establert mitjançant una mostra molt gran d'esportistes després d'anys d'anàlisis abans, durant i després de competicions. Així mateix, s'ha descrit que la desviació estàndard és de $\mathbf{2 . 4 ~ n g} / \mathbf{m l}$. Aquests dos valors poblacionals serveixen com a justificació mèdica a les autoritats esportives per declarar quan la taxa de statdrolona s'associa a un presumpte dopatge.

No obstant això, un estudi recent encarregat per l'associació d'esportistes ADG a un prestigiós departament universitari de fisiologia propugna que, quan es mesura la concentració de statdrolona en individus no dopats amb un cert tipus d'aliments sobreabundants en la seva dieta (formatge parmesà, per exemple), el valor de la mitjana poblacional és de l'ordre de $\mathbf{1 . 5}$ unitats més gran. En canvi, la desviació estàndard poblacional es manté en el valor $2,4 \mathrm{ng} / \mathrm{ml}$, és a dir, equivalent a la normal. Si aquesta hipòtesi fos certa, permetria explicar alguns dels falsos positius detectats en els últims temps. Com a prova experimental aporten una sèrie de dades sobre 16 esportistes que es detallaran més endavant.
(*) La statdrolona no és cap hormona, s'ha adaptat aquí la informació d'hormones reals.

#### Cas 2: Model de probabilitat

L'anàlisi de la concentració de statdrolona es mesura en termes de nanograms per $\mathrm{mil} \cdot$ lilitre, per tant, sembla raonable considerar-la com una variable contínua. El conjunt de resultats possibles serà un subconjunt dels reals.

Amb moltes altres variables antropomètriques, la concentració es pot associar a la distribució Normal. Es pot justificar l'adopció d'aquest model d'acord amb el teorema central del límit.

Segons les autoritats esportives, els valors en un esportista no dopat han de correspondre a una mitjana de $7.0 \mathrm{ng} / \mathrm{ml}$, mentre que per a ADG la mitjana pot ser major en algunes circumstancies. En qualsevol cas la variable:

$$
X=\text { concentració de statdrolona en un esportista. }
$$

s'acceptarà que té distribució Normal. Així, la discussió se centrarà només en el paràmetre $\mu$ desconegut, mentre que la desviació estàndard es prendrà, per simplificar l'explicació, com a $\sigma=2.4$ (coneguda), encara que se sap que és més realista seleccionar-la com a desconeguda (vegeu més endavant el tema 10).

La fórmula de la densitat Normal:

$$
f_{X}(x)=\frac{1}{2.4 \sqrt{2 \pi}} \exp \left(-\frac{(x-\mu)^{2}}{2 \times 2.4^{2}}\right)
$$

indica per aquest cas que l'únic paràmetre desconegut és la mitjana de la població $\boldsymbol{\mu}$, a la que es referiran les hipòtesis estadístiques.

Ara bé, també resulta important descriure la densitat de la mitjana dels setze esportistes, ja que jugarà un paper important en la construcció del test. Si acceptem la distribució $\mathrm{N}(\mu, 2.4)$ per un esportista, i considerem que el mostratge és aleatori simple, aleshores:

$$
\bar{X}_{16}=\text { mitjana concentració statdrolona en } 16 \text { esportistes }
$$

que tindrà una densitat de la forma:

$$
\bar{X}_{16} \approx N(\mu, 2.4 / \sqrt{16})
$$

Simplificant 2.4 per l'arrel quadrada de 16 resulta 0.6 , així doncs:

$$
f_{\bar{X}_{16}}(x)=\frac{1}{0.6 \sqrt{2 \pi}} \exp \left(-\frac{(x-\mu)^{2}}{2 \times 0.6^{2}}\right)
$$

Una expressió més general per a tot $n$ seria:

$$
\bar{X}_{n} \approx N(\mu, 2.4 / \sqrt{n})
$$

La densitat per a tot $n$ és:

$$
f_{\bar{X}_{n}}(x)=\frac{\sqrt{n}}{2.4 \sqrt{2 \pi}} \exp \left(-\frac{n \times(x-\mu)^{2}}{2 \times 2.4^{2}}\right)
$$

I una expressió per a tot $n$ i qualsevol variància és:

$$
f_{\bar{X}_{n}}(x)=\frac{\sqrt{n}}{\sigma \sqrt{2 \pi}} \exp \left(-\frac{n \times(x-\mu)^{2}}{2 \times \sigma^{2}}\right)
$$

### Hipòtesi nul•la contra hipòtesi alternativa

Un contrast d'hipòtesis estadístic es planteja com una decisió entre dues hipòtesis.
La hipòtesi nul•la consisteix en una afirmació sobre la població d'origen de la mostra. Usualment és més simple (menor nombre de paràmetres, per exemple) que la seva antagonista. La hipòtesi nul lla es designa amb el símbol $\mathbf{H}_{\mathbf{0}}$.

La hipòtesi alternativa és igualment una afirmació sobre la població d'origen. Moltes vegades, encara que no sempre, consisteix simplement en negar l'afirmació de $\mathrm{H}_{0}$. La hipòtesi alternativa es designa amb el símbol $\mathbf{H}_{1}$.

De moment tractarem el cas més senzill, en el qual les dues hipòtesis fan referència a un únic valor del paràmetre. En aquesta situació general, les hipòtesis es refereixen a un paràmetre $\theta$ (theta). La formulació és:

$$
\begin{aligned}
& \mathrm{H}_{0}: \theta=\theta_{0} \\
& \mathrm{H}_{1}: \theta=\theta_{1}
\end{aligned}
$$

En la teoria del contrast d'hipòtesis aquest tipus de plantejament es coneix com contrast d'hipòtesis simple contra simple. Així doncs, una hipòtesi simple postula que el paràmetre $\theta$ només pot prendre un valor, o, més tècnicament, que el conjunt de paràmetres d'una hipòtesi simple consisteix en un sol punt.

#### Cas 1: Hipòtesi per dirimir la controvèrsia sobre el nombre de femelles

El Dr. da Souza Faria postula la mateixa proporció per mascles i femelles. En termes de la proporció de la variable $X$ ( $\mathrm{n}^{\mathrm{o}}$ de femelles en 10 nius) això equival a la hipòtesi que la proporció (en la població) és $\mathbf{0 . 5}$.

En canvi, segons el Dr. Calves la proporció és 6:4 a favor de les femelles, i per tant equival a la hipòtesi que el paràmetre $p$ en la variable Binomial és 0.6.

Així doncs, si $X$ és el nombre de femelles en 10 nius, i $p$ és la proporció de femelles, la forma final del contrast és:

$$
\begin{aligned}
& \mathrm{H}_{0}: \mathrm{p}=0.5 \\
& \mathrm{H}_{1}: \mathrm{p}=0.6
\end{aligned}
$$

Respecte a les dades obtingudes per da Souza són:

| Niu | Pollet | Niu | Pollet |
| :--- | :--- | :--- | :--- |
| 1 | femella | 6 | mascle |
| 2 | mascle | 7 | femella |
| 3 | femella | 8 | femella |
| 4 | femella | 9 | mascle |
| 5 | mascle | 10 | femella |

En resum, ha observat que en $\mathbf{6}$ dels nius hi ha una femella.

#### Cas 2: Hipòtesi a contrastar en el problema de la taxa de statdrolona

Les autoritats esportives postulen una mitjana de $7.0 \mathrm{ng} / \mathrm{ml}$, mentre que ADG indica una mitjana de $8.5 \mathrm{ng} / \mathrm{ml}$ per als individus sotmesos a aquest tipus de dieta. Per tant, en síntesi el contrast consistirà en:

$$
\begin{aligned}
& \mathrm{H}_{0}: \mu=7,0 \\
& \mathrm{H}_{1}: \mu=8,5
\end{aligned}
$$

tant per $\mathrm{H}_{0}$ com per $\mathrm{H}_{1}$ el model contempla $\sigma=2,4$.
Les dades de l'estudi que ha obtingut l'associació ADG, i que segons ells recolzaven la seva tesis, han estat les següents:

| Individu | Concentració | Individu | Concentració |
| :---: | :---: | :---: | :---: |
| 1 | 10.47 | 9 | 7.01 |
| 2 | 5.39 | 10 | 11.36 |
| 3 | 6.70 | 11 | 10.11 |
| 4 | 9.91 | 12 | 5.89 |
| 5 | 5.99 | 13 | 10.39 |
| 6 | 11.67 | 14 | 10.67 |
| 7 | 6.23 | 15 | 6.89 |
| 8 | 6.69 | 16 | 11.27 |

La mitjana aritmètica dels 16 atletes és $\mathbf{8 . 5 4} \mathrm{ng} / \mathrm{ml}$.

### Compatibilitat de resultats i d'hipòtesis

Tornant a la qüestió fonamental de la verificació d'hipòtesis, un resultat incompatible amb una hipòtesi és aquell que no pot haver-se produït de cap de les maneres si aquesta hipòtesi és certa.

En aquest sentit, incompatible és sinònim de impossible. En termes de probabilitat, un resultat incompatible és aquell que té probabilitat zero de produir-se si la hipòtesi és certa. La lògica elemental indica que si s'obté un resultat incompatible amb una hipòtesi, aquesta última és forçosament falsa.

Ara bé, quan es pren un model aleatori per tal d'explicar el fenomen observat, el caràcter probabilístic del model habitualment evita que es descarti qualsevol hipòtesi per haver obtingut dades que hi son incompatibles.

Al contrari, tots els resultats seran estrictament compatibles amb les dues hipòtesis, o dit d'una altra manera, qualsevol conjunt de dades que s'obtingui en l'estudi es pot arribar a observar tant sota $\mathrm{H}_{0}$ com sota $\mathrm{H}_{1}$. Això trenca l'esquema excessivament simple exposat abans en la verificació ideal d'hipòtesis.

En definitiva, si es modela la realitat com un fenomen aleatori, s'ha d'abandonar la idea de la presa de decisions basada només en una inspecció de resultats que descarti sense error en la presa de decisió una de les dues hipòtesis.

#### Cas 1: Compatibilitat de resultats i d'hipòtesis

El Dr. da Souza Faria ha obtingut una mostra de 6 femelles i 4 mascles en els 10 nius. Tanmateix, aquest és només un dels resultats possibles que es podien donar sota la hipòtesi nul•la. Si hagués escollit com a mostra altres nius, podria haver trobat un altre nombre de femelles.

Com ja hem vist, $X$ ( $\mathrm{n}^{\circ}$ de femelles en 10 nius) és una $\operatorname{Binomial}(10,0.5)$. En la taula següent es detallen els resultats que podien haver succeït sota $\mathrm{H}_{0}$, juntament amb la probabilitat d'obtenir-los segons la fórmula de la densitat binomial:
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-08.jpg?height=521&width=849&top_left_y=1941&top_left_x=609)

Igual que per $\mathrm{H}_{0}$, la mostra obtinguda pel Dr. da Souza Faria amb 6 femelles i 4 mascles és només un dels resultats possibles que es podien donar sota la hipòtesi alternativa. En aquest cas $X$ ( $\mathrm{n}^{\mathrm{o}}$ de femelles en 10 nius) és una $\operatorname{Binomial}(10,0.6)$.

En la taula següent es detallen els resultats que podien haver esdevingut sota $\mathrm{H}_{1}$, juntament amb la probabilitat d'obtenir-los segons la fórmula de la densitat binomial.
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-09.jpg?height=507&width=838&top_left_y=386&top_left_x=615)

Consultant Statmedia en el seu format Html es pot comprovar quines probabilitats tenen els onze resultats sota d'altres hipòtesis que es podrien formular sobre el veritable valor de la probabilitat $p$ de la població. Podem entendre aquestes diferents " $p$ " com a hipòtesis diferents que es podrien haver establert com a alternativa a $\mathrm{H}_{0}$. Excepte en els casos trivials $p=0$ o $p=1$, no hi ha cap resultat que no es pugui presentar, encara que sigui amb probabilitats molt petites.

#### Cas 2: Compatibilitat de resultats i d'hipòtesis

L'associació ADG ha obtingut una mostra de mitjana $8.54 \mathrm{ng} / \mathrm{ml}$ de statdrolona per a 16 esportistes. Ja hem vist en el model de probabilitat quina densitat associem amb la variable de cada esportista i amb la mitjana de tots ells. Cal recordar que una variable contínua té probabilitat zero d'obtenir un resultat puntual i que les probabilitats en variables contínues es calculen sobre intervals. Així doncs el valor 8.54 s'ha d'interpretar com un interval, ja que les mesures dels esportistes individualment corresponen en realitat a un cert interval de precisió experimental (per exemple, 0.3 $\mathrm{ng} / \mathrm{ml}$ ). El valor 8.54 triat com a marca d'un cert interval no és incompatible en absolut amb la hipòtesi nul lla. De fet és possible obtenir qualsevol mitjana.

En la taula esquerra es detallen les probabilitats de diferents resultats que podien haver succeït sota $\mathrm{H}_{0}$ expressades en termes de la funció de distribució. La mitjana dels 16 resultats correspon a una Normal (7.0, 0.6). En la taula dreta es detallen les probabilitats per intervals d'amplada $0.3 \mathrm{ng} / \mathrm{ml}$ més propers a la mitjana sota $\mathrm{H}_{0}$.

| Mitiana $(x)$ | Prob. $X=\mathrm{X}=\mathrm{X}$ |
| :---: | :---: |
| 5,8 | 0.0228 |
| 6,1 | 0.0668 |
| 6,4 | 0.1587 |
| 6,7 | 0.3085 |
| 7 | 0.5000 |
| 7,3 | 0.6915 |
| 7,6 | 0.8413 |
| 7,9 | 0.9332 |
| 8,2 | 0.9772 |
| 8,5 | 0.9938 |
| 8,8 | 0.9987 |


| Mitiana pern | Prob. Interval |
| :---: | :---: |
| $\leq 5,8$ | 0.0228 |
| $[5,8 ; 6,1]$ | 0.0441 |
| $[6,1 ; 6,4]$ | 0.0918 |
| $[6,4 ; 6,7]$ | 0.1499 |
| $[6,7 ; 7]$ | 0.1915 |
| $[7 ; 7,3]$ | 0.1915 |
| $[7,3 ; 7,6]$ | 0.1499 |
| $[7,6 ; 7,9]$ | 0.0918 |
| $[7,9 ; 8,2]$ | 0.0441 |
| $[8,2 ; 8,5]$ | 0.0165 |
| $[8,5 ; 8,8]$ | 0.0049 |

En el cas de $\mathrm{H}_{1}$ tampoc no és incompatible cap mitjana, i per tant en particular no ho és el valor 8.54. Ara la densitat de la mitjana dels 16 valors és una variable aleatòria Normal $\mathrm{N}(8.5,0.6)$. En la taula esquerra es detallen les probabilitats de diferents resultats que podien haver succeït sota $\mathrm{H}_{1}$ expressades en termes de la funció de distribució. En la taula de la dreta es mostren les probabilitats per intervals d'amplada de $0.3 \mathrm{ng} / \mathrm{ml}$ :

| Mitjana $(\mathrm{x})$ | Prob. $\mathrm{X} \leqslant=\mathrm{x}$ |
| :---: | :---: |
| 6,7 | 0.0013 |
| 7 | 0.0062 |
| 7,3 | 0.0228 |
| 7,6 | 0.0668 |
| 7,9 | 0.1587 |
| 8,2 | 0.3085 |
| 8,5 | 0.5000 |
| 8,8 | 0.6915 |
| 9,1 | 0.8413 |
| 9,4 | 0.9332 |
| 9,7 | 0.9772 |


| Mitiana pern | Prob. Interval |
| :---: | :---: |
| $\leq 6,7$ | 0.0013 |
| $[6,7 ; 7]$ | 0.0049 |
| $[7 ; 7,3]$ | 0.0165 |
| $[7,3 ; 7,6]$ | 0.0441 |
| $[7,6 ; 7,9]$ | 0.0918 |
| $[7,9 ; 8,2]$ | 0.1499 |
| $[8,2 ; 8,5]$ | 0.1915 |
| $[8,5 ; 8,8]$ | 0.1915 |
| $[8,8 ; 9,1]$ | 0.1499 |
| $[9,1 ; 9,4]$ | 0.0918 |
| $[9,4 ; 9,7]$ | 0.0441 |

### No tot és igualment probable...

La segona consideració fonamental en un contrast d'hipòtesis estadístic és que no tots els resultats són igualment probables sota $\mathrm{H}_{0} \circ \mathrm{H}_{1}$. Aquest és el principal argument per tal d'establir un criteri de decisió -una regla- que permeti decidir en la pràctica si és acceptable $\mathrm{H}_{0}$ o bé $\mathrm{H}_{1}$.

La idea provisional que ha de guiar al lector en aquest moment quan s'inspeccionen els casos pràctics és que els resultats (molt) improbables sota una certa hipòtesi mostren que aquesta segurament no és vàlida. Així doncs, en el contrast estadístic d'hipòtesis no hi ha resultats impossibles, només improbables, i per tant en les decisions s'introdueix forçosament una probabilitat d'error.

#### Cas 1: Una regió amb $n^{0}$ femelles amb baixa probabilitat sota $\mathrm{H}_{0}$

Hem vist abans les probabilitats d'obtenir cadascun dels resultats possibles per $X$ : $0,1, \ldots$, fins a 10 femelles. El sentit comú indica que si s'obtenen valors de X propers a 0 o a 10 , la hipòtesi $p=0.5$ és aleshores poc versemblant.

És important entendre que el veritable valor de $p$ (el valor en la població) no és, ni serà mai, conegut en la pràctica, només formulem hipòtesis sobre aquest valor.

Vegem quina és la probabilitat d'obtenir valors majors que 8 femelles. Per abreujar, designem la regió de valors majors o iguals a 8 amb el símbol $\mathrm{W}_{\alpha}=\{8,9,10\}$.

| Valor de $X$ | Prob. $X>=X$ |
| :---: | :---: |
| 0 | 1.0000 |
| 1 | 0.9990 |
| 2 | 0.9893 |
| 3 | 0.9453 |
| 4 | 0.8281 |
| 5 | 0.6230 |
| 6 | 0.3770 |
| 7 | 0.1719 |
| 8 | 0.0547 |
| 9 | 0.0107 |
| 10 | 0.0010 |

#### Cas 2: Mitjanes de les taxes de statdrolona improbables si es compleix $\mathrm{H}_{0}$

De la mateixa manera que s'ha raonat per al cas 1 , en aquesta ocasió amb les dues hipòtesis ( $\mu=7$ contra $\mu=8.5$ ) que tenim en el cas de la detecció de l'statdrolona, el sentit comú indica que si obtenim una mitjana de statdrolona en els 16 atletes allunyada del valor de referència 7 , farà inversemblant la hipòtesi nul•la.

En la taula següent es mostren les probabilitats d'obtenir valors majors que 7 $\mathrm{ng} / \mathrm{ml}$. Observem particularment la regió de valors majors que 7.9869 , que es representarà amb el símbol $\mathrm{W}_{\alpha}$. Expressada com a interval, $\mathrm{W}_{\alpha}=[7.9869, \infty)$.

| Miljana $(x)$ | Prob. $X=x$ |
| :---: | :---: |
| 6,506 | 0.7946 |
| 6,671 | 0.7083 |
| 6,835 | 0.6080 |
| 7 | 0.5000 |
| 7,165 | 0.3920 |
| 7,329 | 0.2917 |
| 7,494 | 0.2054 |
| 7,658 | 0.1364 |
| 7,823 | 0.0852 |
| 7,987 | 0.0500 |
| 8,152 | 0.0275 |

### El paper privilegiat de la hipòtesi nul•la: criteri de decisió

Un contrast estadístic d'hipòtesis consta forçosament d'un criteri de decisió. En resum, consisteix en una regla operativa que divideix en dues parts disjuntes l'espai mostral. Aquestes parts son anomenades regió crítica i regió d'acceptació respectivament. En qualsevol test estadístic, si la mostra obtinguda pertany a la regió crítica, s'ha d'acceptar $\mathrm{H}_{1}$. En cas contrari, si pertany a la regió d'acceptació, s'acceptarà $\mathrm{H}_{0}$.

Un primer principi bàsic consisteix a prioritzar en el criteri de decisió $\mathrm{H}_{0}$, en el sentit següent: es construeix el criteri fixant a priori la probabilitat d'error associada amb el fet de refusar -erròniament- $\mathrm{H}_{0}$. A fi que el criteri de decisió sigui raonable ha de
resultar improbable obtenir una mostra que pertanyi a la regió crítica quan sigui certa $\mathrm{H}_{0}$. En l'exemple següent es proposarà una regla de decisió provisional.

#### Cas 1: $N^{\circ}$ de nius proposats ad hoc com inici de regió crítica. Regla de decisió resultant

Definirem la regió crítica de la manera següent:

$$
\mathrm{W}_{\alpha}=\{8,9,10\}
$$

Per tant, la regió d'acceptació serà:

$$
\mathrm{W}_{\alpha}^{\mathrm{C}}=\{0,1,2,3,4,5,6,7\}
$$

El criteri de decisió serà per tant:

- si el nombre de femelles és major o igual que 8 , s'accepta $\mathrm{H}_{1}$ (la probabilitat de femelles és 0.6)
- si el nombre de femelles és menor o igual que 7 , s'accepta $\mathrm{H}_{0}$ (la probabilitat de femelles és 0.5 )

És important entendre en aquest moment que es proposa ad hoc la regió crítica. Més endavant es justificarà perquè aquesta proposta és raonable.

Nota: en la mostra obtinguda s'han observat 6 femelles, per tant da Souza ha d'acceptar $\mathrm{H}_{0}$.

### Hipòtesi nul•la i nivell de significació

S'ha indicat anteriorment que, en els contrastos estadístics, la hipòtesi nul la juga un paper privilegiat, ja que la regla de decisió s'ajusta d'acord a la probabilitat d'equivocar-se en rebutjar $H_{0}$ quan aquesta és certa.

Aquesta probabilitat es designa de forma equivalent com:

- error de tipus I (o de primera espècie)
- nivell de significació del contrast
i usualment se simbolitza amb la lletra grega alfa.
El nivell de significació es pot definir equivalentment de les dues maneres següents:
- $\alpha=$ probabilitat de rebuig d' $\mathbf{H}_{\mathbf{0}}$, quan $\mathrm{H}_{0}$ és certa
- $\alpha=$ probabilitat que la mostra pertanyi a la regió crítica, quan $\mathbf{H}_{0}$ és certa.


#### Cas 1: Nivell de significació

En l'apartat 9.5 . 1 s'ha indicat la taula resultant dels càlculs de la cua dreta de la Binomial, quan es verifica la hipòtesi nul•la $(p=0.5)$. Com la definició de nivell de significació és:

$$
\alpha=\text { prob. mostra pertanyi a la regió crítica, quan } \mathbf{H}_{0} \text { és certa }
$$

en la fila corresponent a prob $(\mathrm{X} \geq 8)$ de la taula anterior es pot observar la probabilitat de rebutjar $\mathrm{H}_{0}$ quan aquesta és certa (vegeu el criteri de decisió adoptat a l'apartat 9.6.1).

Simbòlicament hem calculat:

$$
\alpha=p\left(X \geq 8 / H_{0}\right)=\sum_{i=8}^{10} p\left(X=i / H_{0}\right)=\sum_{i=8}^{10}\binom{10}{i} 0.5^{10}
$$

Resulta doncs: $\quad \alpha=0.0547$.

#### Cas 1: Elecció de la regió crítica

S'ha proposat abans, de forma directa, la regió crítica:

$$
\mathrm{W}_{\alpha}=\{8,9,10\}
$$

Podem considerar ara una altra regió que ens proporcionaria un nivell de significació idèntic (veure taula de probabilitats sota $\mathrm{H}_{0}$ ):

$$
\begin{gathered}
\mathrm{W}_{\alpha}^{\prime}=\{0,1,2\} \\
\alpha=0.0010+0.0098+0.0439=0.0547
\end{gathered}
$$

Ara bé, un criteri de decisió basat en $\mathrm{W}^{\prime}{ }_{\alpha}=\{0,1,2\}$ és absurd, tenint en compte que $\mathrm{H}_{1}$ és $p=0.6$. Vegem perquè.

El valor $\alpha=0.0547$ indica que és improbable obtenir menys de 3 femelles sota $\mathrm{H}_{0}$. Si es tria $\mathrm{W}^{\prime}{ }_{\alpha}$ com a regió crítica, implica acceptar $\mathrm{H}_{1}$ quan el nombre de femelles és menor que 3. No obstant això, quan es consulta la taula de probabilitats sota $\mathrm{H}_{1}$, resulta:
prob. (nombre femelles $<3 / \mathrm{H}_{1}$ certa $)=0.0001+0.0016+0.0106=0.0123$
És, per tant, encara més improbable obtenir 3 femelles sota $\mathrm{H}_{1}$. En altres paraules, $\mathrm{W}^{\prime}{ }_{\alpha}$ indueix un criteri absurd, ja que portaria a acceptar la hipòtesi més inversemblant de les dues.

#### Cas 2: Elecció de la regió crítica

A continuació es defineixen les regions crítica i d'acceptació, respectivament, com:

$$
\mathrm{W}_{\alpha}=[7.9869,+\infty) \quad \mathrm{W}_{a}{ }^{\mathrm{C}}=(-\infty, 7.9869)
$$

El criteri de decisió serà, per tant:
si el nivell de statdrolona és major o igual que 7.9869, s'accepta $\mathbf{H}_{\mathbf{1}}$ (el nivell és 8.5)
Com en el cas 1 , també s'ha proposat la regió crítica de manera ad hoc. Si es consulten en la taula de l'apartat 9.5.2 els valors de la cua dreta de la Normal, com la definició de nivell de significació és:

$$
\alpha=\text { prob. mostra pertanyi a la regió crítica, quan } \mathbf{H}_{0} \text { és certa }
$$

en la fila corresponent a prob ( $\mathrm{X}>=7.987$ ) de la taula es pot observar la probabilitat de rebutjar $\mathrm{H}_{0}(\mu=7.0)$ quan aquesta és certa. Simbòlicament hem calculat:

$$
\alpha=p\left(\bar{X}_{16} \geq 7.9869 / H_{0}\right)=\int_{7.9869}^{\infty} \frac{1}{0.6 \sqrt{2 \pi}} \exp \left(-\frac{(x-7)^{2}}{2 \times 0.6^{2}}\right) d x=1-F_{Z}\left(\frac{7.9869-7}{2.4 / \sqrt{16}}\right)
$$

on $F_{z}$ és la funció de distribució de la Normal tipificada $N(0,1)$.
La regió crítica $\mathrm{W}_{\alpha}=[7.9869,+\infty)$ porta associat un nivell de significació $\alpha=0.05$. Ara bé, com que l'estadístic mitjana mostral és una variable contínua, concretament Normal, es poden trobar infinites regions que satisfan la condició

$$
\operatorname{prob}\left(\operatorname{mostra} \text { en } \mathrm{W}_{\alpha} / \mathrm{H}_{0}\right)=0.05
$$

### Regió crítica i formalització del contrast

La regla de decisió queda definida sempre (encara que sigui implícitament) a partir d'una regió crítica. A aquesta regió crítica li correspon un determinat nivell de significació.
La informació continguda en la mostra es resumeix mitjançant un estadístic de test, així que una pràctica habitual és definir la regió crítica en funció de l'estadístic de test emprat. Un estadístic de test és una variable aleatòria i, com a tal, té associada una llei de distribució que juga un paper capital en el contrast.

Reunint els conceptes, en un contrast d'hipòtesi $\mathrm{H}_{0}$ contra $\mathrm{H}_{1}$, tenim:

$$
\begin{aligned}
\alpha & =\text { nivell de significació, } \\
\mathrm{W}_{\alpha} & =\text { regió crítica, subconjunt de l'espai mostral definit a partir de } \mathrm{T}
\end{aligned}
$$

Regla de decisió:

- si la mostra pertany a $\mathrm{W}_{\alpha}$ aleshores rebutjar $\mathrm{H}_{0}$
- si la mostra no pertany a $\mathrm{W}_{\alpha}$ aleshores rebutjar $\mathrm{H}_{1}$

Finalment:

$$
\alpha=\text { prob.(rebutjar } H_{0} / H_{0} \text { certa) = prob.(mostra pertanyi a } W_{\alpha} / H_{0} \text { certa) }
$$

#### Cas 1: Resum de conceptes associats al contrast. Regió crítica

| Regió crítica | $\mathrm{W}_{\alpha}=\{8,9,10\}$ |
| :--- | :---: |
| Regió d'acceptació | $\mathrm{W}_{\alpha}{ }^{\mathrm{C}}=\{0,1,2,3,4,5,6,7\}$ |
| Estadístic de test | $\mathrm{T}=$ nombre de femelles totals en els 10 nius |
| Criteri de decisió: |  |
| acceptar $\mathrm{H}_{1} \mathrm{si}$ | $\mathrm{T} \geq 8$ |
| acceptar $\mathrm{H}_{0} \mathrm{si}$ | $\mathrm{T} \leq 7$ |
| Nivell de significació | $\alpha=0.0547$ |

La distribució de l'estadístic de test T és una Binomial B (10, p). Es pot adoptar un estadístic alternatiu: la freqüència relativa $=\mathbf{f r}$ de nombre de femelles en els 10 nius.

#### Cas 2: Taula resum de la regió crítica, l'estadístic de test i del criteri de decisió

| Regió crítica | $\mathrm{W}_{\alpha}=[7.9869,+\infty)$ |
| :--- | :---: |
| Regió d'acceptació | $\mathrm{W}_{\alpha} \mathrm{C}=(-\infty, 7.9869)$ |
| Estadístic de test | $\mathrm{T}=$ mitjana de statdrolona en 16 atletes |
| Criteri de decisió: |  |
| acceptar $\mathrm{H}_{1} \mathrm{si}$ | $\mathrm{T} \geq 7.9869$ |
| acceptar $\mathrm{H}_{0} \mathrm{si}$ | $\mathrm{T}<7.9869$ |
| Nivell de significació | $\alpha=0.05$ |

La distribució de l'estadístic de test T sota $\mathrm{H}_{0}$ és una normal $\mathrm{N}(7,0.6)$.

### Taula de decisió del contrast

Quan es resol un contrast la decisió final pot ser correcta o bé conduir a un error. En aquesta taula es presenten les quatre possibles situacions que es poden produir:

|  | Hipòtesi veritable |  |
| :---: | :---: | :---: |
| Hipòtesi acceptada | $\mathrm{H}_{0}$ | $\mathrm{H}_{1}$ |
| $\mathrm{H}_{0}$ | - | error tipus II |
| $\mathrm{H}_{1}$ | error tipus I | - |

Existeix, per tant, un segon tipus d'error, designat com a error de tipus II o de segona espècie. Es pot definir de manera equivalent per a qualsevol de les dues expressions següents:

- $1-\beta=$ probabilitat de rebutjar $\mathrm{H}_{1}$, quan $\mathrm{H}_{1}$ és certa
- $1-\beta=$ probabilitat que la mostra no pertanyi a la regió crítica, quan $\mathbf{H}_{1}$ és certa

En realitat només una de les hipòtesis és veritable. Una vegada s'obtingui la mostra, s'acceptarà o es rebutjarà $\mathrm{H}_{1}$ segons el criteri de decisió. Si es decideix de manera equivocada, es produirà només un dels dos errors, segons quin sigui la hipòtesi veritable. És a dir, a posteriori es produeix, com a molt, només un dels errors.

Ara bé, el contrast es porta a terme precisament perquè s'ignora quina de les dues hipòtesis és la veritable. Com a conseqüència, sense que això contradigui el paràgraf anterior, els dos errors tenen importància a priori.

Un contrast serà més adequat si son menors els dos errors associats.

#### Cas 1: Avaluació dels dos errors associats al contrast

El criteri de decisió que s'ha adoptat per a aquest cas consisteix en:

| acceptar $\mathrm{H}_{1} \mathrm{si}$ | $\mathrm{T} \geq 8$ |
| :---: | :---: |
| acceptar $\mathrm{H}_{0} \mathrm{si}$ | $\mathrm{T} \leq 7$ |
| Nivell de significació | $\alpha=0.0547$ |

Suposem que $\mathrm{H}_{1}$ és certa, és a dir, que $p=0,6$. En la taula següent podem trobar el valor de l'error de tipus II:

| Valor de $X$ | Prob. $X<=\mathrm{X}$ |
| :---: | :---: |
| 0 | 0.0001 |
| 1 | 0.0017 |
| 2 | 0.0123 |
| 3 | 0.0548 |
| 4 | 0.1662 |
| 5 | 0.3669 |
| 6 | 0.6177 |
| 7 | 0.8327 |
| 8 | 0.9536 |
| 9 | 0.9940 |
| 10 | 1.0000 |

$1-\beta=$ prob. $\left(\right.$ rebutjar $H_{1} / H_{1}$ certa $)=$ prob. $\left(T<=7 / H_{1}\right.$ certa $)=\mathbf{0 . 8 3 2 7}$
Simbòlicament correspon a calcular:

$$
1-\beta=p\left(X<8 / H_{1}\right)=\sum_{i=0}^{7} p\left(X=i / H_{1}\right)=\sum_{i=0}^{7}\binom{10}{i} 0.6^{i} 0.4^{10-i}
$$

#### Cas 2: Càlcul explícit dels errors de primera ( $\alpha$ ) $i$ segona espècie (1- $\beta$ )

El criteri de decisió que s'ha triat per a aquest cas consisteix en:

| acceptar $\mathrm{H}_{1}$ si | $\mathrm{T} \geq 7.9869$ |
| :---: | :---: |
| Nivell de significació | $\alpha=0.05$ |

Suposem que és certa $\mathrm{H}_{1}$, és a dir, que $\mu=8.5$. En la taula següent podem trobar el valor de l'error de tipus II:

| Mitiana $(x)$ | Prob. $X==x$ |
| :---: | :---: |
| 5,933 | 1.0000 |
| 6,189 | 0.9999 |
| 6,446 | 0.9997 |
| 6,703 | 0.9986 |
| 6,96 | 0.9949 |
| 7,216 | 0.9838 |
| 7,473 | 0.9565 |
| 7,73 | 0.9004 |
| 7,987 | 0.8040 |
| 8,243 | 0.6656 |
| 8,5 | 0.5000 |

$1-\beta=$ prob. $\left(\right.$ rebutjar $\mathrm{H}_{1} / \mathrm{H}_{1}$ certa $)=$ prob. $\left(\mathrm{T}<7.9869 / \mathrm{H}_{1}\right)=1-0.8040=0.1960$
Simbòlicament, correspon a calcular:

$$
\begin{aligned}
1-\beta & =p\left(\bar{X}_{16}<7.9869 / H_{1}\right)=\int_{-\infty}^{7.9869} \frac{1}{0.6 \sqrt{2 \pi}} \exp \left(-\frac{(x-8.5)^{2}}{2 \times 0.6^{2}}\right) d x \\
& =F_{Z}\left(\frac{7.9869-8.5}{2.4 / \sqrt{16}}\right)
\end{aligned}
$$

### Relació entre l'error de tipus I i el de tipus II

És important entendre que no és possible reduir simultàniament els dos errors en un contrast d'hipòtesi.

Suposem que s'intenta reduir a zero el nivell de significació. Això equival a plantejar que la probabilitat que una mostra pertanyi a la regió crítica, en el cas que sigui certa $\mathrm{H}_{0}$, és zero. En la majoria de situacions aplicades aquest fet dóna lloc a una regió crítica igual al conjunt buit, o el que és el mateix, provoca que s'accepti sempre $\mathrm{H}_{0}$, independentment del resultat obtingut en la mostra. S'arriba per tant a la situació absurda de poder prescindir de la mostra, acceptant sempre $H_{0}$ ! Així, reduir $\alpha$ a zero té la greu contrapartida de rebutjar sempre $\mathrm{H}_{1}$, que implica a la seva vegada que l'error de tipus II sigui un. De manera anàloga es pot raonar per un error de tipus II nul. En conclusió, els dos errors estan relacionats: disminuir $\alpha$ comporta reduir la grandària de la regió crítica, i, per tant, augmentar 1- $\beta$.

#### Cas 1: Avaluació d'a i 1- $\beta$ per a diferents regions crítiques

Una vegada s'especifica la regió crítica, els errors de tipus I i II queden determinats. En els dos quadres següents hi han dues regions crítiques i els seus errors associats. En la versió interactiva del document es pot canviar dinàmicament la regió crítica i es calculen automàticament els errors:
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-18.jpg?height=375&width=1312&top_left_y=1417&top_left_x=372)

En el gràfic següent es representen els dos errors simultàniament per a diferents regions crítiques. Per tal de simplificar la comprensió del gràfic, es consideren només regions de la forma $\{a, a+1, \ldots 10\}$, on $a$ és un enter entre 0 i 10 . Així, per exemple, el punt d'abscisses 8 representa la regió crítica $\{8,9,10\}$. La hipòtesi alternativa considerada és $p_{1}=0.6$, tal i com s'indica en la llegenda del gràfic.
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-18.jpg?height=544&width=778&top_left_y=2118&top_left_x=639)

#### Cas 2: Relació entre els errors de primera ( $\alpha$ ) i segona espècie (1- $\beta$ )

La relació entre els errors de tipus I i II és més fàcil d'interpretar en aquest cas, atès que la mitjana és un estadístic de distribució contínua. En els quadres següents es presenten dues regions crítiques i els errors associats, visualitzant l'àrea que representen. En la versió interactiva es pot modificar la regió crítica mitjançant el lliscador, i es calculen automàticament els dos errors visualitzant l'àrea que representa cadascun.
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-19.jpg?height=1283&width=1486&top_left_y=775&top_left_x=291)

En el gràfic següent es representen els dos errors simultàniament. Prenent sempre la mateixa alternativa:

$$
\mathrm{H}_{1}: \mu_{1}=8.5
$$

i per a cada regió crítica de la forma $[a,+\infty)$ es calculen $\alpha$ i $1-\beta$. En l'eix d'abscisses es representa l'extrem inferior (a) de les regions crítiques més rellevants, les pròximes a $\mu_{0}$.
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-20.jpg?height=581&width=854&top_left_y=246&top_left_x=601)

### Potència i test més potent

La potència d'un contrast es defineix com:
$\beta=$ prob.(acceptar $H_{1} / H_{1}$ certa) = prob.(mostra pertanyi a $W_{a} / H_{1}$ certa)
és, per tant, la probabilitat complementària a l'error del tipus II.
Reprenent idees anteriors, un contrast ha de pretendre un compromís raonable entre el nivell de significació (el més baix possible) i la potència (la més alta possible).

En principi, si hi ha diversos tests alternatius (basats en diferents regles de decisió i/o estadístics) per a resoldre un mateix contrast paramètric, el millor test serà aquell que, una vegada fixats $\mathrm{H}_{0}, \mathrm{H}_{1} \mathrm{i}$ el nivell de significació $\alpha$, proporcioni la potència més alta d'entre tots ells.

Un test que tingui aquesta propietat es denomina test més potent. Simbòlicament, si $m p$ designa el test més potent, haurà de complir:

$$
\begin{aligned}
& \beta_{m p}=\text { prob.(acceptar } \mathrm{H}_{1} \text { amb el test } m p / \mathrm{H}_{1} \text { certa) } \\
& \geq \beta_{t}=\text { prob.(acceptar } \mathrm{H}_{1} \text { amb el test } t / \mathrm{H}_{1} \text { certa) }
\end{aligned}
$$

on $t$ és qualsevol altre test amb el mateix nivell de significació que $m p$.

#### Cas 1: Potència en hipòtesi simple vs simple

En la taula següent s'indica la probabilitat per a cadascun dels valors del suport. Es destaca en color diferent la regió crítica.
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-21.jpg?height=520&width=852&top_left_y=234&top_left_x=605)

Es pot llegir aleshores que la potència és:

$$
\beta=\operatorname{prob} .\left(\operatorname{acceptar} \mathrm{H}_{1} / \mathrm{H}_{1}\right)=\operatorname{prob} .\left(X \text { en } \mathrm{W}_{\alpha} / \mathrm{H}_{1}\right)=0.1673
$$

Simbòlicament hem calculat:

$$
\beta=p\left(X \geq 8 / \mathrm{H}_{1}\right)=\sum_{i=8}^{10} p\left(X=i / \mathrm{H}_{1}\right)=\sum_{i=8}^{10}\binom{10}{i} 0.6^{i} 0.4^{10-i}
$$

Observem que coincideix amb el càlcul anterior de l'error de tipus II per a aquest exemple.

#### Cas 2: Potència en hipòtesi simple vs simple

Hem definit abans la regió crítica per a aquest cas. En el quadre següent es pot visualitzar els dos errors ( $I=$ verd i II = taronja) i, opcionalment, la potència del test (regió groga).
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-21.jpg?height=649&width=1477&top_left_y=1680&top_left_x=295)

La definició de potència aplicada a aquest cas resulta:

$$
\beta=\operatorname{prob} .\left(\operatorname{acceptar} \mathrm{H}_{1} / \mathrm{H}_{1}\right)=\operatorname{prob} .\left(\mathrm{X} \text { en } \mathrm{W}_{\alpha} / \mathrm{H}_{1}\right)=0.80377
$$

Simbòlicament hem calculat:

$$
\beta=p\left(\bar{X}_{16} \geq 7.9869 / H_{1}\right)=\int_{7.9869}^{\infty} \frac{1}{0.6 \sqrt{2 \pi}} \exp \left(-\frac{(x-8.5)^{2}}{2 \times 0.6^{2}}\right) d x
$$

En el document interactiu s'especifica l'expressió per a tot $n$.

### Efecte de la grandària mostral

Els contrastos òptims per a les situacions aplicades més habituals ja estan completament resolts, de manera que usualment l'experimentador només ha d'escollir el nivell de significació que desitgi, (veure per exemple el capítol de contrastos d'una població).

Una vegada escollit $\alpha$ queden fixades tant la regió crítica com la potència del contrast. L'única manera d'aconseguir que un contrast millori la seva potència sense que repercuteixi en un augment excessiu d' $\alpha$ és incrementar la grandària mostral $N$.

Augmentar $N$ varia la llei de distribució de l'estadístic de test, i generalment en disminueix la variància. La conseqüència de mantenir $\boldsymbol{\alpha}$ constant i incrementar $N$ es tradueix en una millora de les propietats del test. Una pregunta crucial -oberta, de moment- és: quanta mostra fa falta?

#### Cas 1

En el document interactiu es presenta un applet on es calcula l'error de tipus II quan augmenta N. Aquí només es presenta el gràfic on es representen els dos errors simultàniament per a diferents regions crítiques de la forma $\{a, a+1, \ldots N\}$. La hipòtesi alternativa està indicada a la llegenda.
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-22.jpg?height=507&width=1474&top_left_y=1728&top_left_x=294)

#### Cas 2

Veurem aquí només com afecta la grandària de mostra (per a $N=16$ i $N=30$ ) als dos errors, mantenint la regió crítica constant. En el document interactiu es poden consultar altres combinacions. En augmentar $N$, les distribucions en el mostreig de la mitjana sota $\mathrm{H}_{0}$ i $\mathrm{H}_{1}$ presenten cada vegada un menor solapament.
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-23.jpg?height=718&width=1486&top_left_y=235&top_left_x=271)

En el gràfic següent s'observa l'efecte de $N$ per a tot el rang de regions crítiques:
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-23.jpg?height=604&width=869&top_left_y=1080&top_left_x=591)

### Hipòtesis simples vs. hipòtesis compostes

Fins a ara hem tractat el cas més senzill de contrast: dues hipòtesis simples. En la pràctica, les situacions realment interessants comporten -almenys- una hipòtesi composta. Un dels contrastos d'hipòtesis més habituals consisteix en:

$$
\begin{aligned}
& \mathrm{H}_{0}: \theta=\theta_{0} \\
& \mathrm{H}_{1}: \theta \neq \theta_{0}
\end{aligned}
$$

és a dir, la hipòtesi alternativa és la simple negació de la nul lla. Aquest contrast es coneix com el de l'alternativa bilateral.

Els conceptes d'estadístic de test, de regió crítica, de regió d'acceptació i de nivell de significació seguiran sent els mateixos. Ara bé, com es veurà a continuació, s'ha d'ampliar la definició de potència respecte al cas simple contra simple.

#### Cas 1: Hipòtesis compostes

Canviant el plantejament inicial, suposem que la polèmica sobre la proporció de femelles en els nius és refereix a si és equitativa o no respecte al nombre de mascles. Les hipòtesis a verificar aleshores seran:

$$
\begin{aligned}
& \mathrm{H}_{0}: \mathrm{p}=0.5 \\
& \mathrm{H}_{1}: \mathrm{p} \neq 0.5
\end{aligned}
$$

Observem primer que ja no és consistent mantenir una regió crítica basada només en la cua dreta de la distribució, com en el cas simple contra simple, que en resum consistia en:

| Regió crítica | $\mathrm{W}_{\alpha}=\{8,9,10\}$ |
| :--- | :---: |
| Estadístic de test | $\mathrm{T}=$ nombre de femelles totals en els 10 nius |
| Nivell de significació | $\alpha=0.0547$ |

Ara aquesta regió ja no és adequada. N'hi ha prou amb considerar l'exemple d'obtenir una mostra amb $\mathrm{T}=0$. Tot i ser summament improbable sota $\mathrm{H}_{0}$, el criteri imposa acceptar la hipòtesi nul lla, en contra d'altres hipòtesis més plausibles (qualsevol amb p < 0.5).

El sentit comú indica que la regió crítica ha d'abastar ara els dos extrems del suport. Si prenem per exemple:

$$
\mathrm{W}_{\alpha}=\{0,1,2,8,9,10\}
$$

![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-24.jpg?height=527&width=852&top_left_y=1504&top_left_x=605)
la suma següent (que correspon als valors destacats en la taula):

$$
\begin{aligned}
\alpha & =p\left(X \leq 2 / H_{0}\right)+p\left(X \geq 8 / H_{0}\right)=\sum_{i=0}^{2} p\left(X=i / H_{0}\right)+\sum_{i=8}^{10} p\left(X=i / H_{0}\right) \\
& =\left[\binom{10}{0}+\binom{10}{1}+\binom{10}{2}+\binom{10}{8}+\binom{10}{9}+\binom{10}{10}\right] 0.5^{10}
\end{aligned}
$$

ens proporciona el nivell de significació d'aquest test bilateral.

#### Cas 2: Hipòtesis compostes

Malgrat que segurament encara no és el contrast d'hipòtesi que realment interessa a l'associació ADG , per raons didàctiques suposarem que es pretén dirimir simplement si és acceptable la mitjana proposada en la bibliografia. Les hipòtesis que cal verificar seran aleshores:

$$
\begin{aligned}
& H_{0}: \mu=7 \\
& H_{1}: \mu \neq 7
\end{aligned}
$$

Ja no és consistent mantenir una regió crítica basada només en la cua dreta de la distribució, com en el plantejament original d'aquest cas (que contrastava una hipòtesi simple contra una altra simple).

Per entendre-ho es pot considerar per exemple una mostra amb una mitjana mostral de 5. Tot i ser summament improbable sota $\mathrm{H}_{0}$, atès que pertany a la regió d'acceptació, el criteri imposa acceptar la hipòtesi nul•la, en contra d'altres hipòtesis més plausibles (qualsevol amb $\mu<7$ ).

Novament, el sentit comú indica que la regió crítica ha d'abastar ara els dos extrems del suport. Si prenem per exemple:

$$
\mathrm{W}_{\alpha}=(-\infty, 6.0131] \mathrm{U}[7.9869,+\infty)
$$

S'obté $\alpha=0.1$. En el quadre següent es visualitza la regió crítica i s'avalua el nivell de significació resultant:
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-25.jpg?height=672&width=849&top_left_y=1503&top_left_x=609)

Simbòlicament, el nivell de significació d'aquest test es calcula de la forma següent:

$$
\begin{aligned}
\alpha & =p\left(\bar{X}_{16} \leq 6.0131 / H_{0}\right)+p\left(\bar{X}_{16} \geq 7.9869 / H_{0}\right) \\
& =\int_{-\infty}^{6.0131} f_{\bar{X}_{16}}(x) d x+\int_{7.9869}^{\infty} f_{\bar{X}_{16}}(x) d x \\
& =F_{Z}\left(\frac{6.0131-7}{2.4 / \sqrt{16}}\right)+1-F_{z}\left(\frac{7.9869-7}{2.4 / \sqrt{16}}\right)
\end{aligned}
$$

On:

$$
f_{\bar{X}_{16}}(x)=\frac{1}{0.6 \sqrt{2 \pi}} \exp \left(-\frac{(x-7)^{2}}{2 \times 0.6^{2}}\right)
$$

### Funció de potència

Una de les diferències conceptuals més importants entre el cas d'una hipòtesi simple contra una altra de simple i el cas amb una alternativa composta es troba en la definició de potència. En aquest segon cas ja no es presenta un únic possible valor del paràmetre sota la hipòtesi alternativa, sinó que es contempla tot un conjunt. En la majoria de tests habituals, serà un interval real o una reunió d'intervals reals. Per exemple:

$$
\mathrm{H}_{1}: \theta \neq \theta_{0}
$$

Des del punt de vista de l'estadística paramètrica clàssica, una vegada fet l'experiment aleatori, $\theta$ presenta només un dels possibles valors dins del subconjunt de l'alternativa, encara que aquest sigui desconegut. Per tant, la definició de potència enunciada abans:

$$
\beta=\operatorname{prob} .\left(\operatorname{acceptar} \mathrm{H}_{1} / \mathrm{H}_{1}\right. \text { certa) }
$$

no es pot calcular globalment per a tot $\mathrm{H}_{1}$, sinó que s'ha de distingir cadascun dels valors possibles dins de $\mathrm{H}_{1}$. D'aquí ve l'interès de definir la funció de potència:

$$
\beta(\theta)=\operatorname{prob}\left(\operatorname{acceptar} \mathrm{H}_{1} / \theta \text { cert }\right)
$$

on $\theta$ és un valor qualsevol del paràmetre, fins i tot valors corresponents a $\mathrm{H}_{0}$. Si $\mathrm{H}_{0}$ és simple (un sol paràmetre $\theta_{0}$ ), resultarà:

$$
\beta\left(\theta_{0}\right)=\operatorname{prob}\left(\operatorname{acceptar} \mathrm{H}_{1} / \theta_{0} \text { cert }\right)=\alpha
$$

#### Cas 1: Funció de potència

Ara la potència depèn de la proporció concreta de femelles que es triï com alternativa. L'expressió general és:

$$
1-\beta=p\left(3 \leq X \leq 7 / H_{1}\right)=\sum_{i=3}^{7} p\left(X=i / H_{1}\right)=\sum_{i=3}^{7}\binom{10}{i} p^{i}(1-p)^{10-i}
$$

atès que la regió crítica és $\mathrm{W}_{\alpha}=\{0,1,2,8,9,10\}$. En els quadres següents s'obté el valor de la potència $(\beta)$ inicialment per $p=0.6$ i per $p=0.8$ (en el document interactiu es pot variar arbitràriament la proporció sota $\mathrm{H}_{1}$ ):

| Valor de X | Prob. $\mathrm{X}=\mathrm{X}$ |
| :---: | :---: |
| 0 | 0.0001 |
| 1 | 0.0016 |
| 2 | 0.0106 |
| 3 | 0.0425 |
| 4 | 0.1115 |
| 5 | 0.2007 |
| 6 | 0.2508 |
| 7 | 0.2150 |
| 8 | 0.1209 |
| 9 | 0.0403 |
| 10 | 0.0060 |


| Valor de X | Prob. $\mathrm{X}=\mathrm{X}$ |
| :---: | :---: |
| 0 | 0.0000 |
| 1 | 0.0000 |
| 2 | 0.0001 |
| 3 | 0.0008 |
| 4 | 0.0055 |
| 5 | 0.0264 |
| 6 | 0.0881 |
| 7 | 0.2013 |
| 8 | 0.3020 |
| 9 | 0.2684 |
| 10 | 0.1074 |

En el gràfic següent es representa la funció de potència per a tot el rang de paràmetres:
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-27.jpg?height=546&width=546&top_left_y=898&top_left_x=572)
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-27.jpg?height=178&width=358&top_left_y=902&top_left_x=1106)

#### Cas 2: Funció de potència

Ara la potència depèn de la mitjana concreta $\mu_{1}$ que es triï com a alternativa. L'expressió general de l'error de tipus II és:

$$
\begin{aligned}
1-\beta & =p\left(6.0131 \leq \bar{X}_{16} \leq 7.9869 / H_{1}\right) \\
& =\int_{6.0131}^{7.9869} \frac{1}{0.6 \sqrt{2 \pi}} \exp \left(-\frac{\left(x-\mu_{1}\right)^{2}}{2 \times 0.6^{2}}\right) d x \\
& =F_{z}\left(\frac{6.0131-\mu_{1}}{2.4 / \sqrt{16}}\right)+1-F_{z}\left(\frac{7.9869-\mu_{1}}{2.4 / \sqrt{16}}\right)
\end{aligned}
$$

atès que la regió crítica és $\mathrm{W}_{\alpha}=(-\infty, 6,0131] \mathrm{U}[7,9869,+\infty)$.
En el quadre següent s'obté el valor de la potència ( $\beta$ ) inicialment per a $\mu=8.5$. En el document interactiu es pot canviar aquest valor de la alternativa i observar els canvis en els dos errors i en la potència:
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-28.jpg?height=809&width=929&top_left_y=235&top_left_x=569)

En el gràfic següent es representen dues funcions de potència, per a $\alpha=0.05, \sigma=$ 2.4 i que respectivament corresponen a $n=16$ (la situació d'aquest cas 2) i a $n=1$. En el document interactiu es poden variar tots aquells paràmetres que afecten $\beta: \alpha, \sigma \mathrm{i} n \mathrm{i}$ comparar-los amb la situació original.
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-28.jpg?height=692&width=966&top_left_y=1322&top_left_x=545)

### Tests òptims

En moltes situacions aplicades es poden plantejar diferents regles de decisió per resoldre un mateix contrast, de manera que proporcionen un mateix error de tipus I. És necessari adoptar aleshores un criteri addicional per escollir quin és el millor test possible per resoldre aquest contrast. Tal com hem vist en el cas d'hipòtesi simple vs. simple, això passa forçosament per analitzar l'error de tipus II associat amb cada test. En el cas d'una alternativa composta, això porta a estudiar el comportament de la funció de potència en tot el rang de paràmetres associats amb l'alternativa.

L'estudi dels tests que presenten propietats òptimes des del punt de vista de la potència sobrepassa els objectius marcats per Statmedia. El lector interessat pot consultar alguna definició més en els complements, encara que aquesta informació no és estrictament necessària per seguir ni la resta d'aquest tema ni els ulteriors. En els pròxims capítols només s'assenyalarà, a títol informatiu, quan un test és òptim des del punt de vista de la potència. En el nostre desenvolupament és suficient conèixer que existeixen resultats generals en estadística matemàtica que permeten assegurar quan existeix aquest tipus de test i com obtenir-lo.

### Proves bilaterals i proves unilaterals

Un contrast bilateral adopta en general la forma:

$$
\mathrm{H}_{0}: \theta=\theta_{0} \quad \text { contra } \quad \mathrm{H}_{1}: \theta \neq \theta_{0}
$$

En determinades ocasions l'experimentador prefereix plantejar directament un contrast de la forma:

$$
\mathrm{H}_{0}: \theta=\theta_{0} \quad \text { contra } \quad \mathrm{H}_{1}: \theta>\theta_{0}
$$

conegut com a contrast unilateral dret. Òbviament, una altra possibilitat és l'unilateral esquerre:

$$
\mathrm{H}_{0}: \theta=\theta_{0} \quad \text { contra } \quad \mathrm{H}_{1}: \theta<\theta_{0}
$$

En aquests tres casos, el contrast d'hipòtesis és simple contra composta. En la majoria de situacions aplicades, en realitat es pretenen resoldre contrastos unilaterals que comporten hipòtesis compostes. L'unilateral dret és aleshores:

|  | $\mathrm{H}_{0}: \theta \leq \theta_{0}$ | contra | $\mathrm{H}_{1}: \theta>\theta_{0}$ |
| :--- | :--- | :--- | :--- |
| l 'esquerre és: | $\mathrm{H}_{0}: \theta \geq \theta_{0}$ | contra | $\mathrm{H}_{1}: \theta<\theta_{0}$ |

Encara que aquesta última formulació està relacionada amb els contrastos unilaterals simple contra composta anteriors, les dues hipòtesis no són tècnicament equivalents. A fi de simplificar la interpretació dels contrastos unilaterals, atenent als casos de què s'encarrega Statmedia, es formulen els contrastos d'aquesta última manera (composta contra composta) i es pren el nivell de significació com si fos el del contrast simple contra composta.

En qualsevol cas, és important entendre que només s'ha resolt un dels tres contrastos (bilateral o unilateral) amb un conjunt de dades concret. Per exemple, és incorrecte des del punt de vista metodològic començar contrastant bilateralment, i fer després un test unilateral. El contrast que s'ha d'emprar s'ha de decidir tenint com a base coneixements previs del problema, o bé seguint la qüestió d'interès aplicat que es vol respondre.

#### Cas 1: Prova unilateral

Suposem que la controvèrsia entre els dos ornitòlegs s'hagués plantejat originalment en els termes següents. Segons da Souza, el nombre de femelles per niu és com a màxim del $50 \%$. En canvi, per a Calves, hi ha més femelles que no pas mascles. El contrast que cal resoldre per dirimir quin especialista té raó seria, doncs:

$$
\begin{aligned}
& \mathrm{H}_{0}: \mathrm{p} \leq 0.5 \\
& \mathrm{H}_{1}: \mathrm{p}>0.5
\end{aligned}
$$

Respecte al cas general se substitueix el paràmetre genèric $\theta$ per p , i el valor $\theta_{0}=$ 0.5 . Prenent la regió crítica com a $\mathrm{W}_{\alpha}=\{8,9,10\}$, en el quadre següent es presenta el nivell de significació:

| Valor de X | Prob. $X=x$ |  |
| :---: | :---: | :---: |
| 0 | 0.0010 | Valor de p a la binomial |
| 1 | 0.0098 |  |
| 2 | 0.0439 | 0.5 |
| 3 | 0.1172 |  |
| 4 | 0.2051 |  |
| 5 | 0.2461 |  |
| 6 | 0.2051 |  |
| 7 | 0.1172 |  |
| 8 | 0.0439 | Surna valors a la regió critica |
| 9 | 0.0098 |  |
| 10 | 0.0010 | 0.0547 |

En el document interactiu s'inclou un quadre on es pot explorar la potència amb diferents alternatives.

#### Cas 2: Prova unilateral

El plantejament següent s'aproxima més al que realment hauria d'intentar aclarir l'associació d'esportistes ADG. Si fan cas a la forta sospita que la taxa de statdrolona ha augmentat, és més coherent plantejar les hipòtesis següents:

$$
\begin{aligned}
& \mathrm{H}_{0}: \mu \leq 7 \\
& \mathrm{H}_{1}: \mu>7
\end{aligned}
$$

Tal com ja s'ha plantejat en el cas 1, ara s'ha de considerar una regió crítica basada en la cua dreta de la distribució. Es deixa al lector raonar per què ha de ser així. Quan es pren, per exemple:

$$
\mathrm{W}_{\alpha}=[7,9869,+\infty)
$$

s'obté $\alpha=0.05$. En el quadre següent es presenta la regió crítica (en el document interactiu es pot variar la regió crítica, i modificar per tant el nivell de significació):
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-31.jpg?height=804&width=966&top_left_y=232&top_left_x=545)

Simbòlicament, es calcula:

$$
\alpha=p\left(\bar{X}_{16} \geq 7.9869 / H_{0}\right)=\int_{7.9869}^{\infty} \frac{1}{0.6 \sqrt{2 \pi}} \exp \left(-\frac{(x-7)^{2}}{2 \times 0.6^{2}}\right) d x=1-F_{z}\left(\frac{7.9869-7}{2.4 / \sqrt{16}}\right)
$$

que ens proporciona el nivell de significació d'aquest test unilateral. Així doncs, no hi ha cap diferència ni en el càlcul ni en el gràfic respecte al que ja hem vist en l'apartat d'hipòtesi simple contra simple. En relació amb la potència, es tracta d'una funció que depèn de la $\mu$ concreta de la hipòtesi alternativa (simple), i per aquesta raó resulta:
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-31.jpg?height=798&width=924&top_left_y=1574&top_left_x=569)

Una observació final referent a aquest cas 2. En el plantejament actual només queda ja l'arbitrarietat consistent a assumir una $\sigma=2.4$ poblacional fixa. En el tema 10, s'estudiarà com abordar aquest estudi sense assumir més condició que el model de probabilitat Normal.

### Elecció del nivell de significació

Quin nivell de significació s'ha d'utilitzar? En contra de certa pràctica estadística, desgraciadament bastant estesa, en realitat no es pot respondre a aquesta pregunta donant simplement un valor al nivell de significació. Si es consulten publicacions científiques aplicades per conèixer quin $\alpha$ emprar, en la majoria d'estudis s'obtindrà que el més utilitzat és $\alpha=0.05$ ( $5 \%$ d'error), essent el segon lloc ex aequo $\alpha=0.01$ ( $1 \%$ ) i $\alpha=0.1$ (10 \%). Aquests són els nivells aconsellats en molts textos elementals d'estadística. Vegem per què s'ha anat aconsellant aquests valors.

Abans de la universalització de l'ús de l'ordinador, els càlculs estadístics es completaven mitjançant diferents taules per trobar les fronteres de la regió crítica i decidir quina hipòtesi acceptar. Els valors $5 \%, 1 \%$ i $10 \%$ van ser inicialment triats com els més representatius en les colleccions de taules, ja que no resultava pràctic publicar taules per a qualsevol $\alpha$. Així, aquests valors es van anar convertint, amb el pas del temps, en un convencionalisme més. S'ha arribat a produir l'efecte pervers, en alguns camps del coneixement, que alguns editors mal informats només accepten treballs amb un $5 \%$ de significació.

No obstant això, no hi ha cap raó científica que indiqui que aquests valors són forçosament els més adequats. Ja hem vist que la potència té també una importància capital quan s'ha de qualificar la bondat del test, sense oblidar la influencia que té la grandària de la mostra sobre $1-\beta$. La metodologia més raonable és obtenir el p-valor i, si és possible, definir abans de l'obtenció de la mostra una diferència mínima significativa que garanteixi la potència desitjada (definirem a continuació aquests dos conceptes). Només amb aquestes tres quantitats el contrast queda satisfactòriament plantejat.

Des del nostre punt de vista, avui en dia, exposar les conclusions de qualsevol estudi només a partir d'un nivell de significació fix per a tots els contrastos és un procediment estadístic molt rudimentari.

### El p-valor

L'elecció del nivell de significació, tal com s'ha comentat anteriorment, és en certa manera arbitrària. Tanmateix, una vegada obtinguda la mostra, es pot calcular una quantitat que sí que permet resumir el resultat de l'experiment de manera objectiva. Aquesta quantitat és el p-valor que correspon al nivell de significació més petit possible que es pot escollir, per al qual encara s'acceptaria la hipòtesi alternativa amb les observacions actuals. Qualsevol nivell de significació escollit inferior al p-valor (simbòlicament $\mathrm{p}_{\mathrm{v}}$ ) comporta acceptar $\mathrm{H}_{0}$. Òbviament, com que és una probabilitat, es compleix que:

$$
0 \leq p_{v} \leq 1
$$

El p-valor és una mesura directa de com d'inversemblant resulta obtenir una mostra com l'actual si és certa $\mathrm{H}_{0}$. Els valors petits indiquen que és molt infreqüent obtenir una mostra com l'actual, en canvi, els valors alts mostren que és freqüent. El pvalor s'utilitza per indicar quant (o quant poc) contradiu la mostra actual la hipòtesi alternativa.

Informar sobre quin és el p-valor té l'avantatge de permetre que qualsevol decideixi quina hipòtesi accepta basant-se en el seu propi nivell de risc $\boldsymbol{\alpha}$. Això no és possible quan s'informa, com ha estat tradicional, indicant només el resultat de la decisió, és a dir, acceptant o rebutjant $\mathrm{H}_{0}$ amb un $\alpha$ fix.

Quan es proporciona el p-valor obtingut amb la mostra actual, la decisió es fa segons la regla següent:

$$
\begin{aligned}
& \text { si } \mathrm{p}_{\mathrm{v}} \leq \alpha, \text { acceptar } \mathrm{H}_{1} \\
& \text { si } \mathrm{p}_{\mathrm{v}}>\alpha, \text { acceptar } \mathrm{H}_{0}
\end{aligned}
$$

Des del punt de vista pràctic, alguns paquets estadístics proporcionen en els seus llistats el "significance level", la traducció literal del qual és "nivell de significació", quan en moltes ocasions es refereixen en realitat al p-valor ("p-value").

#### Cas 1: Càlcul del p-valor (prova unilateral)

Seguim amb la hipòtesi unilateral:

$$
\begin{aligned}
& H_{0}: p \leq 0.5 \\
& H_{1}: p>0.5
\end{aligned}
$$

Suposem que, una vegada obtinguda la mostra de $n=10$ nius, resulta que en sis d'ells el pollet correspon a una femella. Cal recordar primerament que en aquest cas l'estadístic de test T és una variable discreta, i per tant no és possible obtenir qualsevol $\alpha$.

El p-valor és el menor $\alpha$ que permet acceptar $\mathrm{H}_{1}$. Amb la taula següent:

| Valor de $X$ | Prob. $X>=X$ |
| :---: | :---: |
| 0 | 1.0000 |
| 1 | 0.9990 |
| 2 | 0.9893 |
| 3 | 0.9453 |
| 4 | 0.8281 |
| 5 | 0.6230 |
| 6 | 0.3770 |
| 7 | 0.1719 |
| 8 | 0.0547 |
| 9 | 0.0107 |
| 10 | 0.0010 |

s'obté el p-valor associat a $\mathrm{T}=6$ femelles. Considerem principalment els casos següents:

1. Si s'escollís $\alpha=0.1719$, la regió crítica corresponent seria $\mathrm{W}_{\alpha}=\{7,8,9,10\}$. Com que no s'inclouen 6 femelles, s'hauria d'acceptar $H_{0}$. Per tant, $\alpha$ no compleix la definició de p-valor, atès que s'ha de rebutjar $\mathrm{H}_{0}$ : $\mathrm{p}_{\mathrm{v}}$ ha de ser forçosament major.
2. Si es triés $\alpha^{\prime}=0.3770$, la regió crítica corresponent seria $W_{a^{\prime}}=\{6,7,8,9,10\}$. Amb $\alpha^{\prime}$ es rebutjaria $H_{0}$.
3. Si se seleccionés $\alpha^{\prime \prime}=0.6230$, la regió crítica corresponent seria $\mathrm{W}_{\alpha^{\prime \prime}}=\{5,6,7$, $8,9,10\}$. Amb $\alpha^{\prime \prime}$ també es rebutjaria $\mathrm{H}_{0}$.

Observem que $\alpha^{\prime}<\alpha^{\prime \prime}, \mathrm{i}$ entre els dos valors no és possible obtenir cap altre nivell de significació amb el test que hem plantejat. Per tant, $\alpha^{\prime}$ és el mínim nivell de significació amb el qual rebutjaríem $H_{0}$ amb la mostra actual o, dit d'una altra manera, $\alpha^{\prime}$ és el p-valor.

Aquest és el detall de com es calcula el p-valor. Usualment, d'això se n'encarrega software especialitzat (un paquet estadístic, un full de càlcul,...), que retorna simplement la informació $\mathrm{p}_{\mathrm{v}}=0.3770$. Ara bé, el que no resol el programa és què ha de decidir finalment l'experimentador, és a dir, en el nostre cas, da Souza o Calves.

Doncs bé, en aquest moment, s'haurà de comparar $\mathrm{p}_{\mathrm{v}} \mathrm{amb}$ el nivell de significació escollit a priori (per exemple, $\alpha=0.05$ ):

$$
\mathrm{p}_{\mathrm{v}}=0.3770>\alpha=0.05 \text { per tant, acceptar } \mathbf{H}_{\mathbf{0}} .
$$

El valor de $p_{v}$ indica que hi ha una frequància del $37.7 \%$ d'obtenir mostres amb T $\geq 6$ femelles sota $\mathrm{H}_{0} \mathrm{i}$, per tant, que no hi ha indicis suficients de discrepància entre la mostra obtinguda i la hipòtesi de da Souza consistent en que $\mathrm{p} \leq 0.5$.

Una vegada més s'ha d'insistir en el fet que $\mathrm{p}_{\mathrm{v}}$ és un valor objectiu -qualsevol experimentador donarà el mateix valor una vegada obtinguda la mostra-, mentre que $\alpha$ és subjectiu, escollit per l'experimentador segons la seva experiència.

#### Cas 2: Càlcul del p-valor (prova unilateral)

Considerem primer el càlcul del $p$-valor quan les hipòtesis són:

$$
\mathrm{H}_{0}: \mu \leq 7 \quad \text { contra } \quad \mathrm{H}_{1}: \mu>7
$$

En el quadre següent es presenten les dades obtingudes en l'experiment, la seva mitjana i la desviació estàndard corregida, així com el p-valor i la decisió final segons el nivell de significació 0.05 . Com que $\mathrm{T}=8.54$, el p -valor correspon a la cua de la corba Normal situada a la dreta de T. En el gràfic es superposa el color vermell del p-valor al verd de la zona corresponent a $\alpha$ en la part més extrema de la cua.
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-35.jpg?height=1026&width=1021&top_left_y=235&top_left_x=523)

Així doncs, es rebutja $\mathbf{H}_{0}$, ja que $\alpha=0.05>\mathrm{p}_{\mathrm{v}}=0.00513$. En el document interactiu és possible escollir altres nivells de significació. Segons el nivell escollit s'acceptarà o es rebutjarà la hipòtesi nul lla.

El quadre anterior il•lustra la relació entre els conceptes del p-valor i del nivell de significació, ara bé, el lector NO ha de treure la conclusió que ha d'ajustar $\alpha$ en cap sentit: $\alpha$ es tria sempre a priori (abans de l'anàlisi), mai en funció de les dades (o del p-valor). Respecte al càlcul simbòlic del p-valor, en l'exemple s'ajusta a l'expressió següent:

$$
\begin{aligned}
p v & =p\left(\bar{X}_{16} \geq 8.54 / H_{0}\right) \\
& =\int_{8.54}^{\infty} \frac{1}{0.6 \sqrt{2 \pi}} \exp \left(-\frac{(x-7)^{2}}{2 \times 0.6^{2}}\right) d x \\
& =1-F_{z}\left(\frac{8.54-7}{0.6}\right)=0.0513
\end{aligned}
$$

En el document interactiu es poden canviar les dades dels setze atletes, fet que permet resoldre algunes de les qüestions plantejades més endavant. Alternativament al p -valor, també es pot visualitzar la potència o l'error de tipus II.

#### Cas 2: càlcul del p-valor (prova bilateral)

Considerem ara el càlcul del p-valor quan les hipòtesis són:

$$
\mathrm{H}_{0}: \mu=7 \quad \text { contra } \quad \mathrm{H}_{1}: \mu \neq 7
$$

El p-valor correspon ara a dues cues de la corba Normal: una és la mateixa que en el cas unilateral, és a dir, la situada a la dreta de $\mathrm{T}=8.54$, la segona és la cua simètrica a l'anterior respecte a $\mu=7$, és a dir, la cua esquerra situada en $2 \mu-\mathrm{T}=5.46$. Com abans, en el quadre se superposa el color vermell del p-valor al verd de la zona corresponent a $\alpha$ en la part més extrema de les dues cues. En el document interactiu es poden canviar dades, el nivell de significació i el punt on es calcula la potència.
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-36.jpg?height=981&width=975&top_left_y=689&top_left_x=543)

El càlcul del p-valor es correspon,amb les dades originals, a:

$$
\begin{aligned}
p v & =p\left(\bar{X}_{16} \leq 5.46 / H_{0}\right)+p\left(\bar{X}_{16} \geq 8.54 / H_{0}\right) \\
& =\int_{-\infty}^{5.46} f_{\bar{X}_{16}}(x) d x+\int_{8.54}^{\infty} f_{\bar{X}_{16}}(x) d x \\
& =2 p\left(\bar{X}_{16} \geq 8.54 / H_{0}\right)=.01027
\end{aligned}
$$

Així doncs, es rebutja $\mathbf{H}_{\mathbf{0}}$, atès que:

$$
\alpha=0.05>\mathrm{pv}=0.01027
$$

En general, si la distribució de l'estadístic és contínua, com en aquest cas, es pot calcular fàcilment el p-valor de la prova bilateral a partir de la unilateral, i viceversa. Així, si designem amb $\mathrm{p}_{\text {uni }}$ i $\mathrm{p}_{\text {bil }}$, respectivament els p -valors de la prova unilateral i bilateral, tindrem que:

- $\quad$ Si $\mathrm{p}_{\text {uni }} \leq 0.5$, aleshores $\mathrm{p}_{\text {bil }}=2 \mathrm{p}_{\text {uni. }}$. És a dir, el p-valor és exactament el doble que el de la prova unilateral.
- $\quad$ Si $\mathrm{p}_{\text {uni }}>0.5$, aleshores $\mathrm{p}_{\text {bil }}=2\left(1-\mathrm{p}_{\text {uni }}\right)$. És a dir, el p -valor és exactament el doble que el complementari del p-valor de la prova unilateral.


### Proves exactes i proves asimptòtiques

Els dos errors ( $\alpha$ i $1-\beta$ ) implicats en qualsevol contrast són probabilitats que es basen en hipòtesis sobre el paràmetre que volem contrastar. De manera similar als intervals de confiança (vegeu, per exemple, els intervals per a una proporció i per a la mitjana d'una Normal), es poden classificar els tests en relació amb la distribució emprada.

Si es pot establir explícitament per qualsevol mida de mostra $N$ quina distribució té l'estadístic de test, i a més és factible el càlcul dels errors, s'obtindrà una fórmula vàlida per a tot $N$. Aquest és el cas dels dos exemples seguits en aquest capítol. Un test amb aquestes característiques es denomina prova exacta. La prova $t$ de Student per a dues mostres i la prova F de comparació de variàncies en són exemples d'aplicació quotidiana en experiments reals.

En altres casos, quan existeix dificultat per resoldre el càlcul dels errors amb la veritable distribució de l'estadístic, es recorre a les propietats en el límit de les distribucions. Un recurs habitual és aplicar el teorema central del límit si la distribució de l'estadístic tendeix a una Normal. En aquest segon cas, el test obtingut només serà vàlid per a valors grans de $N$, i llavors es denomina prova asimptòtica. Els exemples més coneguts són les diferents proves de Khi-quadrat.

#### Cas 1: Test asimptòtic

Fins al moment ens hem basat per resoldre els contrastos en la distribució exacta de l'estadístic $T=$ nombre de femelles en deu nius, que és una Binomial $\mathrm{B}(\mathrm{n}, \mathrm{p}$ ), amb $n$ $=10 \mathrm{i} \mathrm{p}$ desconeguda. La distribució exacta de T ens permet calcular p-valors, potències, etc. per qualsevol grandària de mostra $n$. No obstant això, els càlculs amb la distribució Binomial es poden aproximar mitjançant la distribució Normal a partir de mides de mostra de trenta o majors. La distribució asimptòtica de $T$ és:

$$
T \approx N(n p, \sqrt{n p(1-p)})
$$

Per exemple, si es pretén contrastar:

$$
\begin{aligned}
& H_{0}: p=0.5 \\
& H_{1}: p \neq 0.5
\end{aligned}
$$

amb $n=36$, sota $\mathrm{H}_{0} T$ serà aproximadament $\operatorname{Normal} \mathrm{N}(18,3)$. En el document interactiu es presenta un quadre on podem comprovar les diferències entre el p-valor exacte i el pvalor segons la distribució asimptòtica per diferents $n$ i diferents valors de T. Per exemple, per a $n=36$ i 28 femelles les diferències són:

$$
\mathrm{p}_{\mathrm{v}} \text { exacte }-\mathrm{p}_{\mathrm{v}} \text { asimptòtic }=0.00119-0.00085<0.004
$$

Quin interès té aleshores la distribució asimptòtica, si coneixem l'exacta? L'avantatge se situa en el terreny del càlcul: la distribució Normal és més fàcil de fer servir computacionalment tant si s'avalua mitjançant taules (i calculadora) com si
s'avalua amb l'ordinador. En canvi, la fórmula de la densitat Binomial comporta dificultats operatives amb els factorials quan $n>30$.

#### Cas 2: Test exacte

Ja s'ha analitzat anteriorment amb detall la distribució de la mitjana de $n$ atletes quan la variable observada és una Normal. En resum, la densitat obtinguda és una Normal de paràmetres:

$$
\bar{X}_{n} \approx N(\mu, 2.4 / \sqrt{n})
$$

Per tant, mitjançant aquesta distribució exacta de l'estadístic per a qualsevol grandària de la mostra, es pot plantejar sense la necessitat d'aproximar a cap altra distribució el càlcul del p-valor, de la potència, etc.

### Relació amb els intervals de confiança

Els contrastos d'hipòtesis estan molt relacionats amb la teoria dels intervals de confiança. En molts casos es pot resoldre la mateixa qüestió aplicada formulant-la per qualsevol de les dues vies. Per exemple, el contrast:

$$
\mathrm{H}_{0}: \theta=\theta_{0} \quad \text { contra } \quad \mathrm{H}_{1}: \theta \neq \theta_{0}
$$

es pot resoldre plantejant l'interval de confiança per $\theta$, amb coeficient de confiança $1-$ $\alpha$. Suposem que l'interval obtingut és $[\mathrm{a} ; \mathrm{b}]$. Aleshores, si:

$$
\begin{aligned}
& \text { si } \theta_{0} \in[\mathrm{a} ; \mathrm{b}] \text { acceptar } \mathrm{H}_{0} \\
& \text { si } \theta_{0} \notin[\mathrm{a} ; \mathrm{b}] \text { acceptar } \mathrm{H}_{1}
\end{aligned}
$$

Aquest contrast tindrà com a nivell de significació $\alpha$. És possible proporcionar fins i tot el p-valor si s'ajusta l'amplada de l'interval perquè sigui el més ample possible i al mateix temps exclogui $\theta_{0}$.

Inversament, és possible utilitzar la regió crítica d'un contrast per a proporcionar una estimació per interval del paràmetre. Els contrastos bilaterals corresponen a intervals també bilaterals centrats, mentre que els contrastos unilaterals drets corresponen a estimacions unilaterals per excés i els unilaterals esquerres, a estimacions per defecte.

#### Cas 2: Relació amb els intervals de confiança

En el tema anterior s'ha estudiat l'interval de confiança per a la mitjana d'una distribució Normal. Continuant amb les premisses que s'han seguit fins ara en el cas de l'statdrolona, haurem de considerar l'interval per a la mesura quan la variància és coneguda.

$$
\bar{X}_{16}-z_{\alpha / 2} \frac{\sigma}{\sqrt{n}} \leq \mu \leq \bar{X}_{16}+z_{\alpha / 2} \frac{\sigma}{\sqrt{n}}
$$

Si prenem com a nivell de confiança $1-\alpha=0.95$, amb les dades obtingudes resulta:

$$
8.54-1.959 \frac{2.4}{\sqrt{16}} \leq \mu \leq 8.54+1.959 \frac{2.4}{\sqrt{16}}
$$

És a dir, s'obté l'interval $[\mathbf{7 , 3 6 4 6}$; 9,7154]. Atenent que la mitjana sota la hipòtesi nul $\cdot$ la és $\mu=7$, i que no està inclosa en l'interval anterior, es rebutja la hipòtesi nul•la: la mitjana és significativament diferent de 7. És la mateixa conclusió que la que hem obtingut en el contrast bilateral anterior. A més, atès que s'ha calculat un interval bilateral, la hipòtesi alternativa corresponent a aquest interval és també bilateral.

### Grandàries de mostra. Diferència mínima significativa

Una de les preguntes més freqüents en estadística aplicada es refereix a quina és la grandària mostral més adient. En primer lloc, si la prova és asimptòtica, $N$ ha de ser suficientment gran perquè la distribució de l'estadístic sota la hipòtesi nul•la estigui ben aproximada. En el cas de les aproximacions normals, valors $N \geq 30$ són usualment acceptats. Aquesta consideració no s'aplica si la prova és exacta.

El segon aspecte que cal considerar es refereix a la potència desitjada en el contrast. Però la potència varia en funció del paràmetre en els contrastos amb alternativa composta, així que, per formular correctament el problema, l'experimentador ha de proporcionar una quantitat addicional: la diferència mínima significativa $\Delta$.

Per abreujar, es detalla ara només el contrast $\mathrm{H}_{0}: \theta=\theta_{0}$ contra $\mathrm{H}_{0}: \theta \neq \theta_{0}$, però la base conceptual és semblant per a les alternatives unilaterals.

El significat de $\Delta$ és aleshores el següent: l'experimentador considera que no és important en la pràctica equivocar-se acceptant la hipòtesi nul la (és a dir, cometre un error de tipus II) en el rang d'alternatives situades en l'interval $\left(\theta_{0}-\Delta ; \theta_{0}+\Delta\right)$. En canvi, $\theta_{0} \pm \Delta$ són els dos primers punts, a mesura que $\theta$ s'allunya de la hipòtesi nul $\cdot$ la, que l'experimentador considera important diferenciar de $\theta_{0}$. És justament en aquests dos punts on s'ajusta la grandària de la mostra per garantir la potència desitjada. Lògicament, la potència serà encara més alta si l'alternativa finalment certa està encara a major distància que $\Delta$.

L'elecció concreta del valor de $\Delta$ depèn de cada situació aplicada, però en qualsevol cas és una quantitat escollida per l'experimentador, no dictada per una regla estadística.

Una vegada escollit $\Delta$ i la potència desitjada en aquest punt, és possible indicar quina és la grandària mínima de la mostra per resoldre adequadament el problema. En alguns casos requerirà un experiment pilot abans de procedir amb l'experiment definitiu.

#### Cas 2: Càlcul de la grandària de la mostra

L'estadístic de test d'aquest cas (la mitjana dels atletes) té una distribució exacta coneguda per a tot $n$ que s'ha descrit anteriorment. Per tant aquí l'experimentador ha de triar la mínima diferència significativa ( $\boldsymbol{\Delta}$ ) i la potència ( $\boldsymbol{\beta}$ ) per determinar la grandària de la mostra adequada. Suposem que es vol fer el contrast bilateral:

$$
\mathrm{H}_{0}: \mu=7 \quad \text { contra } \quad \mathrm{H}_{1}: \mu \neq 7
$$

amb les condicions següents de l'experiment fixades:

$$
\alpha=5 \% \quad \beta=90 \% \quad \Delta=0.8 \mathrm{ng} / \mathrm{ml}
$$

Dit d'una altra manera, es pretén obtenir una potència del $90 \%$ en els punts:

$$
\mu_{0}-\Delta=6.2 \quad \mu_{0}+\Delta=7.8
$$

Aquests són els dos primers valors (menor i major que $\mu_{0}=7$, respectivament) que l'experimentador no vol que es confonguin amb $\mathrm{H}_{0}$, excepte amb un error del $10 \%$. Per tant, s'ha d'ailllar el valor de $n$ que compleixi les condicions següents simultàniament:

$$
\left\{\begin{array}{l}
p\left(\left|\bar{X}_{n}-\mu\right| \sqrt{n} / \sigma \geq z_{\alpha / 2} / \mathrm{H}_{0}\right)=\alpha \\
p\left(\left|\bar{X}_{n}-\mu\right| \sqrt{n} / \sigma \geq z_{\alpha / 2} / \mathrm{H}_{1 \Delta}\right)=\beta
\end{array}\right.
$$

$\mathrm{H}_{1 \Delta}$ correspon a la hipòtesi simple $\mu=\mu_{0}+\Delta$ (7.8 en l'exemple). Atenent a la distribució de la mitjana de $n$ atletes sota cadascuna de les hipòtesis, l'única incògnita és $n$. Les constants $z_{\alpha / 2}$ i $z_{1-\beta}$ corresponen a les cues dretes següents de la variable aleatòria Normal tipificada Z:

$$
p\left(Z \geq z_{\alpha / 2}\right)=\alpha / 2 \quad p\left(Z \geq z_{1-\beta}\right)=1-\beta
$$

Quan es resol el sistema d'equacions anterior en resulta la fórmula que proporciona la grandària desitjada:

$$
n=\left\{\frac{\sigma\left(z_{1-\beta}+z_{\alpha / 2}\right)}{\Delta}\right\}^{2}
$$

Substituint pels valors concrets de l'exemple:

$$
n=\{2,4(1.645+1.960) / 0.8\}^{2}=116.964
$$

Arrodonint, la grandària ha de ser de 117 atletes. En el quadre següent es mostra la grandària de la mostra en funció de la diferència mínima significativa desitjada, juntament amb altres paràmetres que afecten el problema:
![](https://cdn.mathpix.com/cropped/2024_12_15_dc401fd40c75e9888fdeg-41.jpg?height=584&width=838&top_left_y=245&top_left_x=615)

Per als valors extrems de $\alpha(0)$ i de $\beta$ (1), el valor de la grandària de la mostra es fa infinit i no es pot representar en el quadre anterior.

### Esquema d'un contrast correctament plantejat

Els conceptes exposats fins aquí són essencials per entendre què és un contrast estadístic d'hipòtesis i poder aplicar correctament els diferents tests que es detallen en pròxims capítols. En la pràctica, i per la tranquil•litat de l'experimentador, normalment només s'ha de preocupar d'identificar el problema que ha de resoldre (contrast sobre una, dues o més poblacions), la família de distribució i finalment aplicar tests ja deduïts, alguns ja gairebé centenàriament. Ara bé, l'experimentador ha d'escollir les tres quantitats següents:

| 1) nivell de significació $\boldsymbol{\alpha}$ | Si no es té un criteri definit, s'utilitzarà l'estàndard $\alpha=$ <br> 0.05. |
| :--- | :--- |
| 2) diferència mínima <br> significativa $\Delta$ | Escollida sobre la base de l'experiència en el camp <br> concret d'aplicació. |
| 3) potència desitjada en el <br> punt a distància $\Delta$ | Si no es té un criteri definit, s'ha de prendre $\beta=0.8$ per <br> a $\alpha=0.05$. |

Amb aquestes tres quantitats es podrà deduir usualment la grandària de mostra necessària, que completaria el disseny essencial del test. La informació final del resultat del contrast ha d'indicar aquestes tres quantitats juntament amb el p-valor obtingut. Resulta molt aconsellable acompanyar el test amb l'interval de confiança equivalent, que pot orientar sobre la significació aplicada (no estadística) del contrast.

### Significació estadística i significació aplicada

Al final d'aquest tema resulta convenient distingir entre significació estadística i significació aplicada. Quan es resol un contrast d'hipòtesis s'indica que hi ha significació estadística (S.E.) com a sinònim d'acceptació de la hipòtesi alternativa. Al llarg d'aquest tema s'ha vist, en síntesi, que la S.E. es produeix quan les dades obtingudes en l'experiment real i la hipòtesi nul•la presenten una discrepància que no és atribuïble a l'atzar, excepte en el percentatge de casos marcat pel nivell de significació escollit.

Usualment, el límit entre la S.E. i la no-significació (que tècnicament correspon a la frontera de la regió crítica) depèn de la variabilitat de l'estadístic de test utilitzat. Aquí intervé doncs de manera directa la grandària de la mostra $N$ i la variància de l'estadístic, com també s'ha vist en els dos casos presentats.

En determinades situacions, la variabilitat de l'estadístic és molt petita, de manera que el contrast és molt sensible a desviacions petites de la hipòtesi nul lla. Pot succeir aleshores que, quan s'obtenen les dades, el contrast assenyali que hi ha S.E., però que la desviació respecte a la hipòtesi nul•la sigui irrellevant des del punt de vista pràctic. La conclusió és que convé analitzar aquesta significació aplicada (S.A.) quan es fa un contrast d'hipòtesis. En molts casos, la manera més senzilla és obtenir l'interval de confiança adequat i interpretar la informació del contrast juntament amb la de l'interval.

En resum, quan s'aplica un contrast qualsevol no ens hem de conformar amb la simple lectura del p-valor i decidir en correspondència, sinó que:

- si s'ha detectat S.E., cal valorar la S.A., per exemple, mitjançant un interval de confiança. Pot ser que hi hagi S.E. però que no hi hagi S.A.
- si no s'ha detectat S.E., cal valorar si la grandària de la mostra és suficient per detectar (estadísticament) les diferències desitjades per l'experimentador. Pot ser que no hi hagi S.E. per una mida inadequada de la mostra i, per tant, no es podria concloure sobre la S.A. Si la grandària de la mostra és suficient i no hi ha S.E., aleshores tampoc no hi ha S.A.


#### Cas 2: Significació estadística i aplicada

Amb les dades realment obtingudes en l'estudi, i la hipòtesi:

$$
\mathrm{H}_{0}: \mu=7 \quad \text { contra } \quad \mathrm{H}_{1}: \mu \neq 7
$$

ja hem vist que la conclusió, per a $\alpha=0.05$, era indicar que hi ha significació estadística.

Suposem que els fisiòlegs accepten que les diferències en el nivell d'hormona són rellevants quan hi ha més de $0.2 \mathrm{ng} / \mathrm{ml}$ de diferència en la mitjana de la població. L'interval bilateral en la mostra anterior és:
i permet afirmar que també hi ha significació aplicada.
Suposem que la població tingués una desviació estàndard de $0.1 \mathrm{ng} / \mathrm{ml}$ (en lloc de la 2.4 plantejada fins ara), i s'hagués obtingut una mitjana igual a 7.13. El contrast d'hipòtesis detectaria aleshores igualment que hi ha S.E., però en canvi quan s'observa l'interval de confiança:

S'hauria de concloure que no hi ha S.A. En aquest segon cas, la variància tan petita permet que el contrast sigui molt sensible a petites variacions de la mitjana. La S.E. en aquest últim exemple no resulta rellevant en la pràctica.

