# ESTADÍSTICA MATEMÀTICA II APUNTES 

Àlex Sánchez Pla Francesc Carmona

Departament d'Estadística

## 1. Índex

1 INFERENCIA, MUESTREO Y DISTRIBUCIONES MU- ESTRALES ..... 1
1.1 Inferencia estadística ..... 1
1.2 Problemas de inferencia estadística ..... 2
1.3 Distribución de la población ..... 3
1.4 Muestra aleatoria simple ..... 4
1.4.1 Definición ..... 4
1.4.2 Distribución de la muestra ..... 5
1.5 Estadísticos ..... 7
1.5.1 Definición ..... 7
1.5.2 Distribución en el muestreo de un estadístico ..... 7
1.6 La distribución empírica ..... 9
1.6.1 Definición ..... 9
1.7 Los momentos muestrales ..... 11
1.7.1 Definición ..... 11
1.7.2 Distribución en el muestreo de los momentos muestrales ..... 11
1.7.3 Propiedades asintóticas de los momentos muestrales ..... 12
1.8 Muestreo en poblaciones normales ..... 13
1.8.1 La distribución chi-cuadrado ..... 14
1.8.2 Distribución $t$ de Student ..... 15
1.8.3 La distribución $F$ de Fisher ..... 16
2 ESTIMACIÓN PUNTUAL ..... 18
2.1 El problema de la estimación puntual ..... 18
2.1.1 Criterios de optimalidad de estimadores. El Riesgo ..... 19
2.1.2 El error cuadrático medio ..... 22
2.2 Estudio de las propiedades deseables de los estimadores ..... 25
2.2.1 El sesgo ..... 25
2.2.2 Consistencia ..... 28
2.2.3 Eficiencia ..... 31
2.3 Información de Fisher y cota de Cramer-Rao ..... 32
2.4 Estadísticos suficientes ..... 42
2.4.1 Teorema de factorización ..... 45
2.4.2 Propiedades de los estadísticos suficientes ..... 47
3 MÉTODOS DE OBTENCIÓN DE ESTIMADORES ..... 49
3.1 El método de los momentos ..... 49
3.2 El método del máximo de verosimilitud ..... 52
3.2.1 Introducción ..... 52
3.2.2 La función de verosimilitud ..... 53
3.2.3 El método del máximo de verosimilitud ..... 55

## 2. Presentación

El material que se presenta a continuación se originó en las notas de clase de la asignatura Estadística Matemática que hemos impartido en la Diplomatura de Estadística desde su inicio en la Universidad de Barcelona.
El objetivo de estos apuntes no es sustituir los libros citados en la bibliografía, sino, más bien, servir como una guía de estudio para que los estudiantes puedan repasar los razonamientos y los cálculos hechos en clase y asegurarse de que lo entienden todo correctamente.
Este documento es una versión preliminar y, como tal, puede contener algunos errores. Si nos hemos animado a publicarlo de forma electrónica, ha sido con la idea de que pueda resultar de utilidad a aquellos a quienes va destinado, no en un futuro incierto sino desde ahora mismo. Nos gustaría que nos hicieran llegar cualquier error, errata o comentario.

Barcelona, 13 de febrero de 2002
Àlex Sánchez Pla (asanchez@ub.edu)
Francesc Carmona (fcarmona@ub.edu)
Departamento de Estadística
Universidad de Barcelona

## 3. Capítol 1

## 4. INFERENCIA, MUESTREO Y DISTRIBUCIONES MUESTRALES

### 4.1. Inferencia estadística

Para comenzar, vamos a definir cuál es el ámbito de estudio de la inferencia estadística desde su relación con el cálculo de probabilidades. El cálculo de probabilidades proporciona una teoría matemática que permite analizar (o modelizar) las propiedades de los fenómenos donde interviene el azar.
El cálculo de probabilidades utiliza como modelo básico para cualquier situación aleatoria el concepto de espacio de probabilidades $(\Omega, \mathcal{A}, P)$ y una variable aleatoria $X: \Omega \rightarrow \mathbb{R}$ definida sobre él.
El conocimiento de la distribución de la variable aleatoria permite:

1. Análisis deductivo de situaciones. Por ejemplo: si asumimos que el peso de los recién nacidos se distribuye según una distribución $N(\mu=$ $3 \mathrm{~kg}, \sigma=0.25 \mathrm{~kg}$ ), nos puede interesar calcular la probabilidad de que un recién nacido pese entre 2.9 y 3.1 kg , o encontrar unos valores centrados en la media entre los cuales esperemos que se encuentren el $10 \%(25 \%, 50 \%, 95 \%, \ldots)$ de los recién nacidos.
2. Modelización de situaciones aleatorias. Por ejemplo: si asumimos que el tiempo, en años, hasta que se estropea un componente de un ordenador se distribuye según una distribución exponencial $T \sim \xi(\lambda=$ $0.3)$, nos puede interesar calcular la probabilidad de que un componente dado dure más de 4 años.

En los casos anteriores nos encontramos en una situación muy común, donde ya disponemos de un modelo sobre el cual efectuamos los cálculos, pero del cual desconocemos la procedencia. Parece razonable, y de hecho es precisamente así, que si queremos adaptar un modelo a una situación debamos basarnos únicamente en las observaciones del fenómeno.
Si queremos saber cómo se distribuyen los pesos de los recién nacidos tomaremos unos cuantos, los pesaremos y después observaremos la distribución de estos. Puede que no sea necesario pesar a todos los recién nacidos (jde hecho, no es posible!), pero tampoco es posible deducir la ley por consideraciones puramente teóricas.
Ahora, en lugar de partir de un espacio de probabilidades, partiremos de unas observaciones $\left(x_{1}, \ldots, x_{n}\right)$ y el objetivo que perseguiremos será obtener información sobre la distribución de probabilidades de un fenómeno a partir de una observación no exhaustiva del mismo.

### 4.2. Problemas de inferencia estadística

Hemos presentado como objetivo de la inferencia estadística inducir propiedades del modelo probabilístico que representa la población a partir de un conjunto de observaciones.
Según el tipo de conclusión que queramos extraer, diferenciaremos diferentes tipos de problemas:

1. Si queremos utilizar la información proporcionada por la muestra para obtener un pronóstico numérico único (es decir, una única aproximación numérica) de una o más características de la población, tenemos un problema de estimación puntual.
2. Si queremos obtener información sobre un rango de valores dentro del cual podamos afirmar, con un cierto grado de confianza, que podemos capturar un parámetro desconocido de la distribución, hablamos de estimación por intervalo.
3. Si lo que queremos hacer es decidir si podemos aceptar o debemos rechazar una afirmación sobre la distribución de probabilidad del fenómeno estudiado, hablamos de contraste de hipótesis. Este contraste puede ser:

- Paramétrico: si la afirmación (la hipótesis) se refiere a los parámetros de la distribución.
- No paramétrico: si la afirmación es sobre la forma de la distribución.


### 4.3. Distribución de la población

Todo problema de inferencia está motivado por un cierto grado de desconocimiento de la ley de probabilidades que rige un determinado fenómeno aleatorio.
El caso más sencillo que encontramos es cuando nos interesa una cierta variable $X$ con una función de distribución $F$ desconocida en mayor o menor grado.
La distribución que teóricamente sigue la variable de interés $X$ en la población recibe el nombre de distribución teórica o distribución de la población. La distribución de la población es importante ya que, a menudo, se utiliza para determinar la distribución de alguna característica de los individuos de una población.
En los modelos de la inferencia estadística indicamos el relativo grado de desconocimiento sobre la distribución $F$ en función de su pertenencia a una familia $\mathcal{F}$ de distribuciones. Por ello, en lugar de explicar que $X \sim F=F_{0}$ indicaremos que $X \sim F \in \mathcal{F}$, donde $\mathcal{F}$ puede ser un conjunto más o menos amplio de distribuciones de probabilidad, como todas las distribuciones normales o las distribuciones simétricas o las distribuciones discretas sobre $\mathbb{N}$.
Muchas veces, la distribución poblacional $F$ está completamente especificada excepto por el valor de algún parámetro o parámetros. En este caso, podemos concretar más la forma de la familia de distribuciones:

$$
X \sim F \in \mathcal{F}=\left\{F_{\theta}: \theta \in \Theta \subset \mathbb{R}^{k}\right\}
$$

donde $\Theta$ es el espacio de los $k$ parámetros.
La familia de posibles distribuciones de probabilidad para $X$ se denomina, genéricamente, modelo estadístico y se indica como: $\left\{X \sim F_{\theta}: \theta \in \Theta\right\}$. Veamos algunos ejemplos.

Exemple 1.3.1 Supongamos que $X$ representa la duración de un componente electrónico que no envejece, solo se estropea. Es decir, si en un instante $t$ está funcionando, su estado es el mismo que en cualquier momento del pasado y la distribución del tiempo hasta que se estropee es la misma que al principio. Esta propiedad se denomina falta de memoria.
Un modelo razonable para esta situación lo da la distribución de Weibull que, en este caso, podemos definir a través de la siguiente función de densidad:

$$
f_{\theta}(x)= \begin{cases}\alpha \beta x^{\beta-1} e^{-\alpha x^{\beta}} & \text { si } x \geq 0 \\ 0 & \text { si } x<0\end{cases}
$$

La familia de distribuciones asociada es

$$
\mathcal{F}=\left\{F_{\theta}: \theta=(\alpha, \beta) \in(0, \infty) \times(0, \infty)\right\}
$$

Exemple 1.3.2 Supongamos que queremos determinar la masa de un cierto tipo de partículas elementales a partir de las observaciones en una cámara de burbujas. En cada observación obtenemos un dato de la masa de la partícula $x_{i}$ y asociado con ella un cierto error de medida $\varepsilon$. Si la masa común de cada una de ellas es $\mu$, entonces podemos escribir:

$$
x_{i}=\mu+\varepsilon_{i} \quad i=1, \ldots, n
$$

donde la distribución $\varepsilon_{i} \sim F$ es desconocida. Nuestro objetivo es obtener información sobre $F$.
Si admitimos que $P\left(\varepsilon_{i}<0\right)=P\left(\varepsilon_{i}>0\right)$, según el grado de exigencia que queramos tener, podemos suponer:

- Con un enfoque de inferencia paramétrica:

$$
X \sim F \in \mathcal{F}=\left\{N(0, \sigma): \sigma \in \mathbb{R}^{+}\right\}
$$

- Con un enfoque de inferencia no paramétrica:

$$
X \sim F \in \mathcal{F}=\{\text { Distribuciones simétricas }\}
$$

### 4.4. Muestra aleatoria simple

#### 4.4.1. Definición

Para estudiar un problema de inferencia estadística analizamos una muestra de tamaño $n$. Se trata de escoger $n$ individuos o elementos de la población $\Omega$

$$
\omega_{1}, \omega_{2}, \ldots, \omega_{n}
$$

que sean representativos. El valor de $n$ y la forma de elección de los individuos de la muestra es una materia de Estadística llamada Muestreo estadístico. Por ahora y para simplificar, solo hace falta decir que la elección se hace de forma que todos los individuos tienen la misma probabilidad de estar presentes en la muestra, si es necesario con reemplazo, y que el valor de $n$ está dado.
En realidad, lo que nos interesa verdaderamente no son los individuos de la muestra sino las mediciones de una característica $X$ sobre ellos. Es decir, los valores de una variable aleatoria $X$ sobre estos individuos

$$
X\left(\omega_{1}\right)=x_{1}, X\left(\omega_{2}\right)=x_{2}, \ldots, X\left(\omega_{n}\right)=x_{n}
$$

También podemos pensar que los valores muestrales $x_{1}, x_{2}, \ldots, x_{n}$ son generados directamente desde la variable aleatoria. En todo caso, los valores muestrales no son únicos y podemos generar varias muestras

$$
\begin{array}{ccccc}
x_{1}^{1} & x_{2}^{1} & x_{3}^{1} & \ldots & x_{n}^{1} \\
x_{1}^{2} & x_{2}^{2} & x_{3}^{2} & \ldots & x_{n}^{2} \\
\vdots & \vdots & \vdots & & \vdots \\
x_{1}^{s} & x_{2}^{s} & x_{3}^{s} & \ldots & x_{n}^{s}
\end{array}
$$

Si todos los valores son independientes, de la misma forma que $x_{1}, x_{2}, x_{3}, \ldots, x_{n}$ es una muestra generada por $X$, podemos considerar todos los $x_{1}^{i} \quad i=1, \ldots, s$ provenientes de una variable aleatoria $X_{1}$ con la misma distribución que $X$ $X_{1} \stackrel{d}{=} X$ y que genera los primeros valores, los $x_{i}^{2}$ provenientes de una variable aleatoria $X_{2} \stackrel{d}{=} X$ que genera los segundos y así sucesivamente.
Todo esto nos lleva a definir el concepto de muestra aleatoria de una forma muy conveniente para trabajar con ella:

Definició 1.1 Una muestra aleatoria simple de tamaño $n$ de una variable aleatoria $X$ con distribución $F$ es una colección de $n$ variables aleatorias independientes $X_{1}, X_{2}, \ldots, X_{n}$ con la misma distribución $F$ que $X$. Esto se suele indicar como:

$$
\mathbf{X}=X_{1}, X_{2}, \ldots, X_{n} \stackrel{i . i . d}{\sim} X
$$

Definició 1.2 El conjunto $\left(x_{1}, x_{2}, \ldots, x_{n}\right) \in \mathbb{R}^{n}$ de observaciones concretas de $X_{1}, X_{2}, \ldots, X_{n}$ se denomina realización de la muestra.

#### 4.4.2. Distribución de la muestra

Una muestra aleatoria simple, como vector aleatorio $n$-dimensional que es, tiene una distribución conjunta o distribución de la muestra que depende de $F$, pero que obviamente es diferente, ya que en particular $X$ y $\mathbf{X}$ tienen dimensiones diferentes. Sin embargo, gracias a la independencia de las variables $X_{1}, X_{2}, \ldots, X_{n}$, la función de distribución conjunta de $\mathbf{X}$, que podría ser muy complicada, toma una forma muy sencilla. En resumen:

Definició 1.3 Se llama distribución de la muestra de una variable aleatoria $X \sim F$ a la distribución del vector aleatorio $n$-dimensional $\left(X_{1}, X_{2}, \ldots, X_{n}\right)$

$$
G\left(x_{1}, x_{2}, \ldots, x_{n}\right)=F\left(x_{1}\right) F\left(x_{2}\right) \cdots F\left(x_{n}\right)
$$

En los casos particulares en que $X$ sea discreta o absolutamente continua, la distribución conjunta de la muestra suele expresarse mediante la función de masa de probabilidad o la función de densidad:

- Para variables discretas:

$$
\begin{aligned}
p_{G}\left(x_{1}, x_{2}, \ldots, x_{n}\right) & =P\left(X_{1}=x_{1}, X_{2}=x_{2}, \ldots, X_{n}=x_{n}\right) \\
& =\prod_{i=1}^{n} P\left(X=x_{i}\right)=\prod_{i=1}^{n} p_{F}\left(x_{i}\right),
\end{aligned}
$$

- Para variables absolutamente continuas:

$$
g\left(x_{1}, x_{2}, \ldots, x_{n}\right)=\prod_{i=1}^{n} f\left(x_{i}\right)
$$

Exemple 1.4.1 Una moneda tiene una probabilidad $\theta$ de salir cara. Queremos estudiar la variable aleatoria:

$$
X= \begin{cases}1 & \text { si sale cara } \\ 0 & \text { si sale cruz }\end{cases}
$$

con densidad $P\{X=1\}=\theta, P\{X=0\}=1-\theta$. Es decir

$$
X \sim F_{\theta} \in \mathcal{F}=\left\{F_{\theta}=B(1, \theta): \theta \in(0,1)\right\}
$$

Supongamos que hacemos tres lanzamientos. Las posibles muestras son:

| $X_{1}$ | $X_{2}$ | $X_{3}$ | Probabilidad |
| :---: | :---: | :---: | :---: |
| 1 | 1 | 1 | $\theta^{3}$ |
| 1 | 0 | 0 | $\theta(1-\theta)^{2}$ |
| 0 | 1 | 0 | $\theta(1-\theta)^{2}$ |
| 0 | 0 | 1 | $\theta(1-\theta)^{2}$ |
| 1 | 0 | 1 | $\theta^{2}(1-\theta)$ |
| 1 | 1 | 0 | $\theta^{2}(1-\theta)$ |
| 0 | 1 | 1 | $\theta^{2}(1-\theta)$ |
| 0 | 0 | 0 | $(1-\theta)^{3}$ |

El muestreo ha especificado la distribución conjunta de la muestra a través de la distribución desconocida $F_{\theta}$. Si escribimos la función de probabilidades de la variable aleatoria como $f_{\theta}(x)=\theta^{x}(1-\theta)^{1-x}$, entonces la función de probabilidades de la muestra la podemos expresar como:

$$
g_{\theta}\left(x_{1}, x_{2}, x_{3}\right)=\theta^{x_{1}+x_{2}+x_{3}}(1-\theta)^{3-\left(x_{1}+x_{2}+x_{3}\right)}
$$

### 4.5. Estadísticos

#### 4.5.1. Definición

Para lograr el objetivo de realizar inferencias sobre la población a partir de la muestra, solemos basarnos en la realización de cálculos sobre la muestra para tratar de obtener la información que deseamos. En este proceso aparecen los conceptos de estadístico y el caso particular, que más nos interesa a nosotros, de estimador. Un estadístico es una función de la muestra que no depende del valor del parámetro.

Definició 1.4 Dada una muestra aleatoria simple $X_{1}, X_{2}, \ldots, X_{n}$ y una función medible $T: \mathbb{R}^{n} \longrightarrow \mathbb{R}^{k}$, entonces $T\left(X_{1}, X_{2}, \ldots, X_{n}\right)$ es un vector aleatorio (variable aleatoria cuando $k=1$ ). Si $T$ no depende de $\theta$ (donde $\theta$ es un parámetro a especificar en $F_{\theta}$ ), entonces $T$ recibe el nombre de estadístico.

Solo por su nombre, parece evidente que un estimador de un parámetro $\theta$ será alguna función de la muestra que sirva para aproximar, en algún sentido, el valor desconocido de $\theta$. Si añadimos la condición razonable de que un estimador no pueda tomar valores que no puede tomar el parámetro, podemos dar la siguiente definición.

Definició 1.5 Un estimador de un parámetro $\theta$ es un estadístico $T$ cuyo recorrido es el espacio de los parámetros, es decir:

$$
\begin{array}{ccc}
T: & \mathbb{R}^{n} & \longrightarrow \\
\left(x_{1}, x_{2}, \ldots, x_{n}\right) & \longrightarrow \\
\left(t_{1}, \ldots, t_{k}\right) \quad \in \Theta \subset \mathbb{R}^{k}
\end{array}
$$

Aquí tienes el texto traducido al castellano manteniendo toda la notación en LaTeX:

#### 4.5.2. Distribución en el muestreo de un estadístico

Dado un estadístico $T\left(X_{1}, X_{2}, \ldots, X_{n}\right)$ nos interesa conocer su distribución de probabilidad, ya que para hacer inferencia necesitaremos hacer cálculos del tipo

$$
P\left[T\left(X_{1}, X_{2}, \ldots, X_{n}\right)>t_{0}\right]
$$

La distribución de probabilidad del estadístico se denomina distribución muestral o distribución en el muestreo del estadístico. Encontrarla es un problema que puede ser desde bastante sencillo hasta extremadamente complicado. Algunas de las técnicas utilizadas para intentar resolverlo son las siguientes:

- Uso de la técnica de cambio de variable.
- Uso de la función generadora de momentos.
- Aplicación del Teorema Central del Límite.

Exemple 1.5.1 Sea $X \sim F_{\theta}$ una variable aleatoria absolutamente continua con densidad

$$
f_{\theta}(x)=e^{-(x-\theta)} e^{-e^{-(x-\theta)}} \quad \theta \in \mathbb{R}
$$

y consideremos el estadístico

$$
T\left(X_{1}, X_{2}, \ldots, X_{n}\right)=\sum_{i=1}^{n} e^{-X_{i}}
$$

Si aplicamos el teorema de cambio de variable unidimensional, se obtiene fácilmente que la variable aleatoria $Y=e^{-X}$ sigue una distribución exponencial de parámetro $e^{-\theta}$, de donde la suma seguirá una distribución gamma $T \sim \Gamma\left(e^{-\theta}, n\right)$.

Exemple 1.5.2 Supongamos que $X$ representa el número de averías en una máquina al cabo de un mes. Este valor varía mes a mes. Sea $\bar{X}$ la media de averías en $n$ meses. Si $X$ sigue una distribución de Poisson $P(\lambda)$, ¿cuál es la distribución de $\bar{X}$ ?
Como la suma de Poisson i.i.d. es $\sum_{i=1}^{n} X_{i} \sim P(n \lambda)$

$$
P[\bar{X}=r]=P\left[\sum_{i=1}^{n} X_{i}=n r\right]=\frac{e^{-n \lambda}(n \lambda)^{n r}}{(n r)!}
$$

Como ocurre en este ejemplo, uno de los estadísticos para el cual a menudo deseamos calcular la distribución en el muestreo es la media aritmética. Una manera útil de hacerlo es con la función generadora de momentos y la aplicación del siguiente lema.

Lema 1 Si $X$ es una v.a. con $M_{X}(t)$ como función generadora de momentos, entonces la f.g.m. de $\bar{X}_{n}=\frac{1}{n} \sum_{i=1}^{n} X_{i}$ es

$$
M_{\bar{X}_{n}}(t)=\left[M_{X}(t / n)\right]^{n}
$$

## 5. Demostración:

La demostración es inmediata a partir de la definición o por las propiedades de la función generadora de momentos.

Si aplicamos directamente la definición de la f.g.m tenemos:

$$
\begin{aligned}
E\left(e^{t \bar{X}_{n}}\right) & =E\left(e^{t \frac{1}{n} \sum_{i=1}^{n} X_{i}}\right)=E\left(\prod_{i=1}^{n} e^{\frac{t}{n} X_{i}}\right)=\prod_{i=1}^{n} E\left(e^{\frac{t}{n} X_{i}}\right) \\
& =\prod_{i=1}^{n} M_{X_{i}}(t / n)=\left[M_{X}(t / n)\right]^{n}
\end{aligned}
$$

Si usamos las propiedades de la f.g.m tenemos:

1. Dado que $M_{a X}(t)=M_{X}(a t)$ y si $a=\frac{1}{n}$, entonces $M_{\bar{X}}(t)=M_{\sum_{i=1}^{n} X_{i}}(t / n)$.
2. $M_{\sum_{i=1}^{n} X_{i}}(t / n) \stackrel{\text { ind }}{=} \prod_{i=1}^{n} M_{X_{i}}(t / n) \stackrel{\text { id }}{=}\left[M_{X}(t / n)\right]^{n}$.

Exemple 1.5.3 Para una variable aleatoria $X \sim N(\mu, \sigma)$ y por tanto $M_{X}(t)=$ $\exp \left(t \mu+\frac{t^{2} \sigma^{2}}{2}\right)$, entonces

$$
\begin{aligned}
M_{\bar{X}_{n}}(t) & =\left[\exp \left(\frac{t \mu}{n}+\frac{t^{2} \sigma^{2}}{n^{2} 2}\right)\right]^{n} \\
& =\exp \left[n\left(\frac{t \mu}{n}+\frac{t^{2} \sigma^{2}}{n^{2} 2}\right)\right] \\
& =\exp \left[t \mu+\frac{1}{2} t^{2}\left(\frac{\sigma}{\sqrt{n}}\right)^{2}\right]
\end{aligned}
$$

que es la función generadora de momentos de una variable $N(\mu, \sigma / \sqrt{n})$.

### 5.1. La distribución empírica

#### 5.1.1. Definición

En el apartado anterior hemos visto que a partir de una muestra $X_{1}, X_{2}, \ldots, X_{n}$ es interesante considerar la distribución muestral como la distribución conjunta del vector aleatorio $\left(X_{1}, X_{2}, \ldots, X_{n}\right)$, sin que intervenga una realización concreta de la muestra $x_{1}, x_{2}, \ldots, x_{n}$. Un enfoque diferente consiste en asociar una distribución particular directamente a las observaciones $x_{1}, x_{2}, \ldots, x_{n}$ con la intención de que, en tanto que la muestra "representa" la v.a. $X$, esta distribución asociada a la muestra $F_{n}(x)$ emule la distribución de la población. Esta distribución se denomina distribución empírica o distribución muestral y se define así:

$$
F_{n}(x)=\frac{k(x)}{n}
$$

donde $k(x)$ es el número de datos muestrales menores o iguales que $x$. En la práctica se construye por ordenación de la muestra

$$
x_{1}, x_{2}, \ldots, x_{n} \longrightarrow x_{(1)} \leq x_{(2)} \leq \cdots \leq x_{(n)}
$$

y con la siguiente definición:

$$
F_{n}(x)= \begin{cases}0 & \text { si } x<x_{(1)} \\ \frac{k}{n} & \text { si } x_{(k)} \leq x<x_{(k+1)} \\ 1 & \text { si } x_{(n)} \leq x\end{cases}
$$

Exemple 1.6.1 Extraemos una muestra y obtenemos:

| $x_{1}$ | $x_{2}$ | $x_{3}$ | $x_{4}$ | $x_{5}$ | $x_{6}$ | $x_{7}$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 5.1 | 3.4 | 1.2 | 17.6 | 2.1 | 16.4 | 4.3 |

Una vez ordenada queda:

| $x_{(1)}$ | $x_{(2)}$ | $x_{(3)}$ | $x_{(4)}$ | $x_{(5)}$ | $x_{(6)}$ | $x_{(7)}$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $x_{3}$ | $x_{5}$ | $x_{2}$ | $x_{7}$ | $x_{1}$ | $x_{6}$ | $x_{4}$ |
| 1.2 | 2.1 | 3.4 | 4.3 | 5.1 | 16.4 | 17.6 |

y si hacemos la representación gráfica:

Figura 1.1: Función de distribución empírica con los datos del ejemplo

La distribución empírica refleja exclusivamente los valores observados en la muestra y, por lo tanto, no se relaciona directamente ni con la distribución conjunta de la muestra $G\left(x_{1}, x_{2}, \ldots, x_{n}\right)$ ni con la distribución de la población $F$.
Aquí tienes la traducción al castellano del fragmento en LaTeX, respetando toda la notación:

### 5.2. Los momentos muestrales

#### 5.2.1. Definición

Sea $F_{n}$ la v.a. que tiene $F_{n}(x)$ por distribución. La función de densidad de probabilidad de $F_{n}$ es una densidad discreta que asigna probabilidades $1 / n$ a cada una de las observaciones muestrales $x_{1}, x_{2}, \ldots, x_{n}$. Así pues, tiene sentido calcular sus momentos, que se conocen como momentos muestrales $a_{k}$, y también sus momentos muestrales centrados respecto a la media $b_{k}$.

$$
\begin{aligned}
a_{k} & =E\left(F_{n}^{k}\right)=\sum_{i=1}^{n} x_{i}^{k} \cdot P\left(F_{n}=x_{i}\right)=\sum_{i=1}^{n} x_{i}^{k} \cdot \frac{1}{n}=\frac{1}{n} \sum_{i=1}^{n} x_{i}^{k} \\
b_{k} & =\frac{1}{n} \sum_{i=1}^{n}\left(x_{i}-\bar{x}\right)^{k}
\end{aligned}
$$

Observamos que dos medidas conocidas de la estadística descriptiva adquieren un significado diferente:

- Media muestral $=$ Media de la distribución muestral

$$
a_{1}=\frac{1}{n} \sum_{i=1}^{n} x_{i}
$$

- Varianza muestral $=$ Varianza de la distribución muestral

$$
b_{2}=\frac{1}{n} \sum_{i=1}^{n}\left(x_{i}-\bar{x}\right)^{2}
$$

#### 5.2.2. Distribución en el muestreo de los momentos muestrales

Dada una m.a.s. $X_{1}, X_{2}, \ldots, X_{n}$, los momentos muestrales son estadísticos y, como tales, tienen su distribución en el muestreo. Por ejemplo, $a_{k}=$ $\frac{1}{n} \sum_{i=1}^{n} X_{i}^{k}$.

La distribución en cada caso puede ser compleja y depender de la distribución poblacional subyacente.
Lo que sí es posible calcular son los momentos de los momentos muestrales o, mejor dicho, los momentos de las distribuciones en el muestreo de los momentos muestrales.

1. Si consideramos $a_{k}=\frac{1}{n} \sum_{i=1}^{n} X_{i}^{k}$ y escribimos $\alpha_{k}=E\left(X^{k}\right)$ como el momento poblacional de orden $k$, tenemos:

$$
\begin{aligned}
E\left(a_{k}\right) & =E\left(\frac{1}{n} \sum_{i=1}^{n} X_{i}^{k}\right)=\frac{1}{n} \cdot n \cdot \alpha_{k}=\alpha_{k} \\
\operatorname{var}\left(a_{k}\right) & =\operatorname{var}\left(\frac{1}{n} \sum_{i=1}^{n} X_{i}^{k}\right)=\frac{1}{n^{2}} \sum_{i=1}^{n} \operatorname{var}\left(X_{i}^{k}\right)=\frac{1}{n} \operatorname{var}\left(X^{k}\right) \\
& =\frac{1}{n}\left[E\left(X^{2 k}\right)-\left(E\left(X^{k}\right)\right)^{2}\right]=\frac{\alpha_{2 k}-\alpha_{k}^{2}}{n}
\end{aligned}
$$

2. Si consideramos $s^{2}=b_{2}=\frac{1}{n} \sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}=\frac{1}{n} \sum_{i=1}^{n} X_{i}^{2}-\bar{X}^{2}$, podemos calcular:

$$
\begin{aligned}
E\left(s^{2}\right) & =\frac{1}{n} \sum_{i=1}^{n} E\left(X_{i}^{2}\right)-E(\bar{X})^{2}=\alpha_{2}-\left(\frac{\sigma^{2}}{n}+\mu^{2}\right) \\
& =\left(\sigma^{2}+\mu^{2}\right)-\left(\frac{\sigma^{2}}{n}+\mu^{2}\right)=\frac{n-1}{n} \sigma^{2}
\end{aligned}
$$

El cálculo de la varianza de $s^{2}$ es laborioso ${ }^{1}$ y no lo haremos aquí. Su valor es

$$
\operatorname{var}\left(s^{2}\right)=\frac{\mu_{4}-\mu_{2}^{2}}{n}-\frac{2\left(\mu_{4}-2 \mu_{2}^{2}\right)}{n^{2}}+\frac{\mu_{4}-3 \mu_{2}^{2}}{n^{3}}
$$

donde $\mu_{k}$ es el momento poblacional centrado de orden $k$.

#### 5.2.3. Propiedades asintóticas de los momentos muestrales

## 6. Convergencia en probabilidad

Los momentos muestrales, tanto respecto al origen como respecto a la media, convergen hacia los momentos poblacionales. Es posible establecer la convergencia basándose en la ley fuerte de los grandes números (convergencia casi

[^0]segura) o en la ley débil (convergencia en probabilidad). Si nos limitamos a esta última podemos afirmar que
$$
a_{k} \xrightarrow{P} \alpha_{k} \quad \text { es decir } \quad \lim _{n \rightarrow \infty} P\left[\left|a_{k}-\alpha_{k}\right| \geq \epsilon\right]=0
$$

La prueba se basa en la desigualdad de Tchebychev. Si suponemos que $\alpha_{2 k}<\infty$, tenemos

$$
P\left[\left|a_{k}-\alpha_{k}\right| \geq \epsilon\right] \leq \frac{E\left|a_{k}-\alpha_{k}\right|^{2}}{\epsilon^{2}}=\frac{\operatorname{var}\left(a_{k}\right)}{\epsilon^{2}}=\frac{\alpha_{2 k}-\alpha_{k}^{2}}{n \epsilon^{2}} \longrightarrow 0
$$

Esta propiedad es importante porque hará posible el concepto de estimador consistente y en ella se basa un método de estimación llamado método de los momentos.

## 7. Distribución asintótica

Si consideramos el momento muestral $a_{k}=\frac{1}{n} \sum_{i=1}^{n} X_{i}^{k}$, entonces $n \cdot a_{k}$ es una suma de variables aleatorias i.i.d. a la que podemos aplicar el Teorema Central del Límite. Como hemos visto:

$$
E\left(n a_{k}\right)=n \alpha_{k} \quad \operatorname{var}\left(n a_{k}\right)=n^{2} \operatorname{var}\left(a_{k}\right)=n^{2} \frac{\alpha_{2 k}-\alpha_{k}^{2}}{n}
$$

y por el Teorema Central del Límite de Lindeberg-Levy la variable

$$
\frac{n a_{k}-E\left(n a_{k}\right)}{\sqrt{\operatorname{var}\left(n a_{k}\right)}}=\frac{n a_{k}-n \alpha_{k}}{n \sqrt{\operatorname{var}\left(a_{k}\right)}}=\frac{a_{k}-\alpha_{k}}{\sqrt{\operatorname{var}\left(a_{k}\right)}}
$$

verifica

$$
\frac{a_{k}-\alpha_{k}}{\sqrt{\operatorname{var}\left(a_{k}\right)}} \xrightarrow{\mathcal{L}} N(0,1)
$$

es decir

$$
a_{k} \sim A N\left(\alpha_{k}, \sqrt{\frac{\alpha_{2 k}-\alpha_{k}^{2}}{n}}\right)
$$

### 7.1. Muestreo en poblaciones normales

Como hemos visto, a partir de una m.a.s. $X_{1}, X_{2}, \ldots, X_{n}$ y si consideramos un estadístico $T\left(X_{1}, X_{2}, \ldots, X_{n}\right)$, puede resultar complicado obtener su distribución en el muestreo. Esta distribución depende de:

- La forma funcional de $T\left(X_{1}, X_{2}, \ldots, X_{n}\right)$.
- La distribución subyacente de $X$, es decir, la distribución de la población.

Hay un caso especial en el que el problema se ha estudiado en profundidad para algunos estadísticos de gran importancia práctica. Si $X \sim N(\mu, \sigma)$ es posible encontrar la distribución de los estadísticos más utilizados como $\bar{X}$ y $S^{2}=\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}$. De hecho, obtendremos la distribución de funciones de estos estadísticos como

$$
\frac{\bar{X}-\mu}{s / \sqrt{n-1}} ; \quad \frac{n s^{2}}{\sigma^{2}} ; \quad \bar{X}_{1}-\bar{X}_{2} ; \quad \frac{S_{1}^{2} /\left(n_{1}-1\right)}{S_{2}^{2} /\left(n_{2}-1\right)}
$$

donde $s^{2}=(1 / n) S^{2}$.
En el estudio de las distribuciones de estos estadísticos aparecen algunas distribuciones de probabilidad que han resultado ser de gran utilidad. Son las llamadas "distribuciones derivadas de la normal" y se conocen por el nombre del investigador que las formuló:

- la $\chi^{2}$ chi-cuadrado de Pearson
- la $t$ de Student (Gosset)
- la $F$ de Fisher-Snedecor


#### 7.1.1. La distribución chi-cuadrado

Sean $X_{1}, X_{2}, \ldots, X_{k}$ un conjunto de v.a. independientes sobre un mismo espacio de probabilidad $(\Omega, \mathcal{A}, P)$ y con distribución común $N(0,1)$. Consideremos la variable

$$
Y=X_{1}^{2}+X_{2}^{2}+\cdots+X_{k}^{2}
$$

La distribución de la variable $Y$ se llama chi-cuadrado con $k$ grados de libertad.
La función de densidad de la variable aleatoria $Y$ es

$$
f(x)=\frac{1}{\Gamma(k / 2) 2^{k / 2}} e^{-x / 2} x^{k / 2-1} \quad \text { si } x>0
$$

De modo que resulta que $Y=\sum_{i=1}^{k} X_{i}^{2}$ tiene una distribución gamma $G\left(\frac{1}{2}, \frac{k}{2}\right)$ y su f.g.m. es

$$
M(t)=(1-2 t)^{-k / 2} \quad \text { si } t<1 / 2
$$

## 8. Propiedades

1. Si recordamos que para $X \sim G(p, \alpha)$ entonces $E(X)=\frac{p}{\alpha} \mathrm{y} \operatorname{var}(X)=$ $\frac{p}{\alpha^{2}}$, resulta

$$
E(Y)=\frac{k / 2}{1 / 2}=k \quad \operatorname{var}(Y)=\frac{k / 2}{1 / 4}=2 k
$$

2. De la aditividad (reproductividad) de las leyes gamma se deduce también la reproductividad de la chi-cuadrado $\chi^{2}$, es decir

$$
Y_{1}^{2} \sim \chi_{n_{1}}^{2}, Y_{2}^{2} \sim \chi_{n_{2}}^{2} \quad \text { indep. } \longrightarrow Y_{1}^{2}+Y_{2}^{2} \sim \chi_{n_{1}+n_{2}}^{2}
$$

3. Como $Y$ es la suma de v.a. independientes $X_{i}^{2} \sim \chi_{1}^{2}$ se verifica

$$
\frac{Y-k}{\sqrt{2 k}} \xrightarrow{\mathcal{L}} N(0,1)
$$

Pero es mejor la aproximación de Fisher

$$
\sqrt{2 \chi_{k}^{2}}-\sqrt{2 k-1} \xrightarrow{\mathcal{L}} N(0,1)
$$

de donde se obtiene para valores de $k \geq 30$

$$
\chi_{k}^{2} \stackrel{\text { aprox }}{=} \frac{1}{2}(Z+\sqrt{2 k-1})^{2}
$$

donde $Z \sim N(0,1)$.

#### 8.0.1. Distribución $t$ de Student

Sean $Y, Z$ dos variables aleatorias independientes con distribuciones $Z \sim$ $N(0,1)$ y $Y \sim \chi_{m}^{2}$, entonces se dice que la variable aleatoria

$$
t=\frac{Z}{\sqrt{Y / m}}
$$

tiene una distribución $t$ de Student con $m$ grados de libertad.
Su función de densidad es

$$
f(t)=\frac{\Gamma\left(\frac{m+1}{2}\right)}{\Gamma\left(\frac{m}{2}\right) \sqrt{m \pi}}\left(1+\frac{t^{2}}{m}\right)^{-(m+1) / 2} \quad t \in \mathbb{R}
$$

Esta expresión se obtiene de la resolución del correspondiente problema de cambio de variable para encontrar la distribución de un cociente.

Se trata de una distribución unimodal y simétrica respecto al cero. La distribución depende de $m$, que llamamos los grados de libertad (g.l.). A medida que $m$ crece, la forma acampanada se va "cerrando", acercándose a la ley normal:

$$
\left(1+\frac{t^{2}}{m}\right)^{-(m+1) / 2} \xrightarrow{m \rightarrow \infty} e^{-t^{2} / 2}
$$

Este hecho es muy relevante en inferencia estadística.

## 9. Propiedades

1. Si $m=1$, entonces la $t$ es una Cauchy y, en particular, no tiene esperanza.
2. Para $m>1, E(t)=0$ y para $m>2, \operatorname{var}(t)=m /(m-2)$.
3. Cuando $m \rightarrow \infty$, entonces $t \xrightarrow{P} N(0,1)$.

#### 9.0.1. La distribución $F$ de Fisher

Esta distribución aparece cuando se considera un cociente entre dos distribuciones chi-cuadrado $U \sim \chi_{m}^{2}, V \sim \chi_{n}^{2}$ con $m$ y $n$ g.l. respectivamente. En concreto decimos que la variable aleatoria

$$
F=\frac{U / m}{V / n}
$$

sigue una distribución $F$ de Fisher con $m$ y $n$ grados de libertad. La función de densidad tiene la forma:

$$
f(x)=\frac{m^{m / 2} n^{n / 2} \Gamma[(m+n) / 2]}{\Gamma(m / 2) \Gamma(n / 2)} \cdot \frac{x^{m / 2-1}}{(m x+n)^{(m+n) / 2}} \quad \text { para } x>0
$$

## 10. Propiedades

1. La esperanza y la varianza son

$$
E(F)=\frac{n}{n-2} \quad \operatorname{var}(F)=\frac{2 n^{2}(m+n-2)}{m(n-2)^{2}(n-4)}
$$

2. Esta distribución tiene una moda en $x=\frac{m-2}{m} \cdot \frac{n}{n+2}$, siempre que $m>2$.
3. Si $F \sim F_{m, n}$, entonces resulta que $1 / F \sim F_{n, m}$ y por lo tanto:

$$
P(F \leq x)=P\left(\frac{1}{F} \geq \frac{1}{x}\right)=1-P\left(\frac{1}{F} \leq \frac{1}{x}\right)
$$

Esta propiedad es de gran utilidad en el uso de las tablas.
4. Cuando $n \rightarrow \infty, F_{m, \infty} \xrightarrow{\mathcal{L}} \chi_{m}^{2}$.
5. Cuando $m \rightarrow \infty$ y $n \rightarrow \infty$, entonces $F_{m, n} \xrightarrow{\mathcal{L}} 1$.

## 11. Capítol 2

## 12. ESTIMACIÓN PUNTUAL

### 12.1. El problema de la estimación puntual

Informalmente, la estimación de parámetros consiste en buscar aproximaciones a los valores de estos, calculables a partir de una muestra, que sean lo más precisas posible. El problema, claro, es que para medir cuán precisas son estas aproximaciones sería necesario conocer los valores de los parámetros y, como estos son siempre desconocidos, debemos basarnos en el uso de estimadores con buenas propiedades que, en algún sentido, nos garanticen esa proximidad.
Más formalmente podemos plantear el problema de la siguiente manera:
Sea $X$ una v.a. con distribución $F_{\theta}$ donde $\theta=\left(\theta_{1}, \ldots, \theta_{k}\right) \in \Theta \subset \mathbb{R}^{k}$ y sea $X_{1}, X_{2}, \ldots, X_{n}$ una muestra de $n$ v.a. de $X$. El problema de la estimación puntual consiste en obtener alguna aproximación de $\theta$ en base a la información disponible en la muestra mediante un estimador de $\theta$ que definimos a continuación.
Definició 2.1 Sea $X_{1}, X_{2}, \ldots, X_{n}$ una muestra aleatoria simple de $X$ con distribución $F_{\theta}$ donde $\theta \in \Theta \subset \mathbb{R}^{k}$. Un estadístico $T\left(X_{1}, X_{2}, \ldots, X_{n}\right)$ se denomina un estimador puntual de $\theta$ si $T$ es una aplicación de $\mathbb{R}^{n}$ en $\Theta$, es decir, si toma valores sobre el mismo conjunto que los parámetros.

Exemple 2.1.1 Sea $X_{1}, X_{2}, \ldots, X_{n}$ una muestra aleatoria simple de una v.a. de Poisson $X \sim P(\lambda)$. Para estimar $\lambda$ podemos utilizar:

$$
\begin{aligned}
& T_{1}=\bar{X}=\frac{1}{n} \sum_{i=1}^{n} X_{i} \\
& T_{2}=s^{2}=\frac{1}{n} \sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}
\end{aligned}
$$

ya que $E(X)=\operatorname{var}(X)=\lambda$, pero también

$$
\begin{aligned}
T_{3} & =\frac{2}{n(n+1)} \sum_{i=1}^{n} X_{i} \cdot i \\
T_{4} & =X_{i}
\end{aligned}
$$

Exemple 2.1.2 Sea $X_{1}, X_{2}, \ldots, X_{n}$ una m.a.s. de $X \sim B(1, p)$, con $p$ desconocido. Podemos estimar p de las siguientes maneras:

$$
\begin{aligned}
& T_{1}=\bar{X}=(1 / n) \sum_{i=1}^{n} X_{i} \\
& T_{2}=1 / 2 \\
& T_{3}=\left(X_{1}+X_{2}\right) / 2
\end{aligned}
$$

En cada caso resulta claro que algunos estimadores no son muy razonables mientras que la decisión entre los otros no está necesariamente clara. Básicamente debemos ocuparnos de dos problemas:

- Dado un modelo estadístico $\left\{X \sim F_{\theta}: \theta \in \Theta\right\}$, ¿cómo podemos obtener estimadores de $\theta$ que tengan "buenas" propiedades?
- Dado varios estimadores para un mismo parámetro ¿cómo podemos escoger el mejor en base a algún criterio?

Para poder alcanzar estos dos objetivos empezaremos por estudiar las propiedades de los estimadores, así como las medidas de optimalidad que podremos utilizar para decidir entre varios estimadores.
De entrada nos restringiremos al caso en que $\Theta \subseteq \mathbb{R}$ o en que queremos aproximar alguna función $g(\theta)$ de los parámetros donde $g$ es del tipo $g: \Theta \rightarrow$ $\mathbb{R}$.

#### 12.1.1. Criterios de optimalidad de estimadores. El Riesgo

Una forma de poder comparar entre diversos estimadores consiste en definir una función de pérdida que nos permita cuantificar de alguna manera la pérdida, o coste asociado, al estimar el valor real del parámetro, es decir, $\theta$, mediante la aproximación que proporciona un estimador, es decir, $t$.

Definició 2.2 Una función de pérdida es una aplicación

$$
\begin{aligned}
L: & \Theta \times \Theta \rightarrow \mathbb{R} \\
& (\theta, t) \rightarrow L(\theta, t)
\end{aligned}
$$

que verifica:
a) $L(\theta, t) \geq 0, \quad \forall \theta, t \in \Theta$
b) $L(\theta, t)=0$, si $\theta=t$
c) $L(\theta, t) \leq L\left(\theta, t^{\prime}\right)$, si $d(\theta, t) \leq d\left(\theta, t^{\prime}\right)$ donde $d$ es una distancia en $\Theta$.

Por ejemplo, son funciones de pérdida:

$$
\begin{gathered}
L_{1}(\theta, t)=|\theta-t| \quad L_{2}(\theta, t)=(\theta-t)^{2} \\
L_{3}(\theta, t)=\left|\frac{\theta-t}{\theta}\right| \quad L_{4}(\theta, t)=\left(\frac{\theta-t}{\theta}\right)^{2} \\
L_{5}(\theta, t)= \begin{cases}c>0 & \text { si }|\theta-t|>\epsilon \\
0 & \text { si }|\theta-t| \leq \epsilon\end{cases}
\end{gathered}
$$

Los valores que toma la función de pérdida dependen de los valores del estimador y de los del parámetro. Para una muestra dada podemos conocer el valor que toma el estimador, pero no el valor del parámetro. Una posibilidad que nos permitirá comparar los posibles estimadores, para un valor dado del parámetro, consiste en promediar los diferentes valores de $L(\theta, t)$ sobre todos los posibles valores de $T$. A este promedio lo llamamos el riesgo del estimador $T$ asociado a cada valor posible $\theta$ del parámetro y lo escribimos $R_{T}(\theta)$.

Definició 2.3 Sea $H_{\theta}(t)$ la distribución en el muestreo de T, es decir

$$
T\left(X_{1}, X_{2}, \ldots, X_{n}\right) \sim H_{\theta}(t)=P_{\theta}(T \leq t)
$$

y $h_{\theta}(t)$ representa la función de densidad de probabilidad, si $H_{\theta}(t)$ es absolutamente continua, o $h_{\theta}\left(t_{i}\right)$ la función de masa de probabilidad si $H_{\theta}\left(t_{i}\right)$ es discreta. Entonces el riesgo del estimador $T$ para estimar $\theta$ se define como:

$$
\begin{aligned}
R_{T}(\theta) & =E_{\theta}\left[L\left(\theta, T\left(X_{1}, X_{2}, \ldots, X_{n}\right)\right)\right]=\int_{\mathbb{R}} L(\theta, t) d H_{\theta}(t) \\
& = \begin{cases}\int_{-\infty}^{+\infty} L(\theta, t) h_{\theta}(t) d t & \text { si } H_{\theta}(t) \text { es absolutamente continua, } \\
\sum_{\forall t_{i}} L(\theta, t) h_{\theta}\left(t_{i}\right) & \text { si } H_{\theta}(t) \text { es discreta }\end{cases}
\end{aligned}
$$

El riesgo permite comparar dos estimadores.
Definició 2.4 Diremos que un estimador $T_{1}$ es preferible a otro $T_{2}$ si:

$$
\begin{aligned}
& R_{T_{1}}(\theta) \leq R_{T_{2}}(\theta), \forall \theta \in \Theta, y \\
& R_{T_{1}}(\theta)<R_{T_{2}}(\theta), \text { para algún } \theta \in \Theta .
\end{aligned}
$$

Exemple 2.1.3 Sea $X_{1}, X_{2}, \ldots, X_{n}$ una muestra aleatoria simple de una distribución uniforme $X \sim U(0, \theta)$. El parámetro que nos interesa estimar es $\theta$, el máximo de la distribución. Un estimador razonable puede ser:

$$
T_{1}\left(X_{1}, X_{2}, \ldots, X_{n}\right)=\max \left\{X_{1}, X_{2}, \ldots, X_{n}\right\}
$$

el máximo de la muestra, o un múltiplo de este:

$$
T_{k}\left(X_{1}, X_{2}, \ldots, X_{n}\right)=k T_{1}\left(X_{1}, X_{2}, \ldots, X_{n}\right)
$$

La distribución en el muestreo de $T_{1}\left(X_{1}, X_{2}, \ldots, X_{n}\right)$ es

$$
\begin{aligned}
H_{\theta}(t) & =P_{\theta}\left[T_{1} \leq t\right]=P_{\theta}\left[\max _{1 \leq i \leq n}\left\{X_{i}\right\} \leq t\right] \\
& =P_{\theta}\left[\left(X_{1} \leq t\right) \cap \cdots \cap\left(X_{n} \leq t\right)\right]=\prod_{i=1}^{n} P_{\theta}\left[X_{i} \leq t\right]=\left(\frac{t}{\theta}\right)^{n}
\end{aligned}
$$

si $t \in(0, \theta)$, y su función de densidad es

$$
h_{\theta}(t)=H_{\theta}^{\prime}(t)=\frac{n}{\theta}\left(\frac{t}{\theta}\right)^{n-1}
$$

La esperanza de $T_{1}$ vale:

$$
E_{\theta}\left(T_{1}\right)=\int_{0}^{\theta} t \cdot\left[\frac{n}{\theta}\left(\frac{t}{\theta}\right)^{n-1}\right] d t=\left.\frac{n}{\theta^{n}} \frac{t^{n+1}}{n+1}\right|_{0} ^{\theta}=\frac{n}{n+1} \theta
$$

y el momento de segundo orden

$$
E_{\theta}\left(T_{1}^{2}\right)=\int_{0}^{\theta} t^{2} \cdot\left[\frac{n}{\theta}\left(\frac{t}{\theta}\right)^{n-1}\right] d t=\frac{n}{n+2} \theta^{2}
$$

Si ahora fijamos una función de pérdida podemos comparar los dos estimadores. Tomamos como función de pérdida el error relativo en la estimación al cuadrado:

$$
L_{4}(\theta, t)=\frac{(\theta-t)^{2}}{\theta^{2}}
$$

El riesgo de $T_{k}$ para estimar $\theta$ será

$$
\begin{aligned}
R_{T_{k}}(\theta) & =E_{\theta}\left[\frac{\left(\theta-T_{k}\right)^{2}}{\theta^{2}}\right]=E_{\theta}\left[1-\frac{2}{\theta} T_{k}+\frac{1}{\theta^{2}} T_{k}^{2}\right] \\
& =1-\frac{2}{\theta} E_{\theta} T_{k}+\frac{1}{\theta^{2}} E_{\theta} T_{k}^{2}=1-\frac{2 n}{n+1} k+\frac{n}{n+2} k^{2}
\end{aligned}
$$

Vemos que el riesgo es una función que depende de $k$ y que, como es una parábola $a k^{2}+b k+c$, con $a=n /(n+2), b=-2 n /(n+1)$ y $c=1$, alcanza un mínimo absoluto en el punto de abscisa

$$
-\frac{b}{2 a}=\frac{n+2}{n+1}
$$

Por lo tanto, entre los múltiplos de $T_{1}$, el mejor estimador en el sentido de la función de pérdida elegida $L_{4}(\theta, t)=(\theta-t)^{2} / \theta^{2}$ es

$$
\frac{n+2}{n+1} \max \left\{X_{1}, X_{2}, \ldots, X_{n}\right\}
$$

El ejemplo anterior es atípico, pues un solo estimador minimiza el riesgo para todos los valores de $\theta$, ya que el riesgo obtenido no depende de $\theta$. A menudo nos encontraremos con que los estimadores no son comparables, ya que el riesgo de uno es inferior al del otro para algunos valores del parámetro, mientras que la situación se invierte para otros valores. Esto hace que este criterio sea limitado, en el sentido de que no es un criterio generalmente bueno para encontrar un estimador óptimo sino para hacer una comparación puntual entre dos estimadores.

#### 12.1.2. El error cuadrático medio

Una de las funciones de pérdida más usuales es la función de pérdida cuadrática $L_{2}(\theta, t)=(\theta-t)^{2}$. Uno de los motivos de su uso es que el riesgo asociado a esta función de pérdida $E_{\theta}\left[(\theta-T)^{2}\right]$, que llamamos error cuadrático medio $E Q M_{T}$, representa una medida de la variabilidad del estimador $T$ en torno a $\theta$ semejante a la medida de dispersión en torno a la media que representa la varianza.
Además, del desarrollo de esta expresión se obtiene un interesante resultado que muestra cuáles pueden ser las propiedades más interesantes para un estimador.
Sea $\left\{X \sim F_{\theta}: \theta \in \Theta\right\}$ y sea $T$ un estimador de $\theta$. El error cuadrático medio de $T$ para estimar $\theta$ vale

$$
E Q M_{T}(\theta)=E_{\theta}\left[(\theta-T)^{2}\right]=E\left[\theta^{2}-2 \theta T+T^{2}\right]=\theta^{2}-2 \theta E_{\theta}(T)+E_{\theta}\left(T^{2}\right)
$$

Ahora, sumando y restando $\left(E_{\theta}(T)\right)^{2}$, obtenemos

$$
\begin{aligned}
E Q M_{T}(\theta) & =E_{\theta}\left(T^{2}\right)-\left(E_{\theta}(T)\right)^{2}+\left(E_{\theta}(T)\right)^{2}+\theta^{2}-2 \theta E_{\theta}(T)= \\
& =\operatorname{var}(T)+\left(E_{\theta}(T)-\theta\right)^{2}
\end{aligned}
$$

El término $\left(E_{\theta}(T)-\theta\right)^{2}$ es el cuadrado del sesgo de $T$, que se define como

$$
b_{\theta}(T)=E_{\theta}(T)-\theta
$$

Definició 2.5 El error cuadrático medio $E Q M_{T}(\theta)$, o simplemente $E Q M$, de un estimador $T$ para estimar el parámetro $\theta$ es la suma de su varianza más el cuadrado de la diferencia entre su valor medio y el verdadero valor del parámetro, que llamamos sesgo.

Si en la búsqueda de estimadores de mínimo riesgo nos basamos en la función de pérdida cuadrática, parece que los estimadores más deseables deberían ser aquellos en los que la varianza y el sesgo sean lo más pequeños posibles. Idealmente, quisiéramos reducir ambas cantidades a la vez. En la práctica, sin embargo, observamos que, en general, no suele ser posible reducir simultáneamente la varianza y el sesgo. Además, incluso si fuera práctico calcular el $E Q M$ para cada estimador, encontraríamos que, para la mayoría de las familias de probabilidad $P_{\theta}$, no existiría ningún estimador que minimizase el $E Q M$ para todos los valores de $\theta$. Es decir, que un estimador puede tener un $E Q M$ mínimo para algunos valores de $\theta$, mientras que otro lo tendrá en otros valores de $\theta$.

Exemple 2.1.4 Sea $X_{1}, X_{2}, \ldots, X_{n}$ una muestra aleatoria simple de $X \sim$ $N(\mu, \sigma)$, donde suponemos $\sigma$ conocida, y sean

$$
T_{1}=\bar{X} \quad T_{2}=\frac{\sum_{i=1}^{n} X_{i}}{n+1}
$$

Calculando la media y la varianza de los estimadores, tenemos

$$
\begin{array}{lll}
E_{\mu}\left(T_{1}\right)=\mu & \Rightarrow b_{T_{1}}(\mu)=0 & \operatorname{var}_{\mu}\left(T_{1}\right)=\frac{\sigma^{2}}{n} \\
E_{\mu}\left(T_{2}\right)=\frac{n}{n+1} \mu & \Rightarrow b_{T_{2}}(\mu)=\frac{-1}{n+1} \mu & \operatorname{var}_{\mu}\left(T_{2}\right)=\frac{n}{(n+1)^{2}} \sigma^{2}
\end{array}
$$

de donde

$$
\begin{aligned}
& E Q M_{\mu}\left(T_{1}\right)=\operatorname{var}\left(T_{1}\right)=\frac{\sigma^{2}}{n} \\
& E Q M_{\mu}\left(T_{2}\right)=\frac{1}{(n+1)^{2}} \mu^{2}+\frac{n}{(n+1)^{2}} \sigma^{2}
\end{aligned}
$$

que son respectivamente una recta y una parábola. De manera que para algunos valores de $\mu$ tenemos que $E Q M_{\mu}\left(T_{1}\right)<E Q M_{\mu}\left(T_{2}\right)$ y para otros, al revés. La figura 2.1 muestra esta diferencia.

Exemple 2.1.5 Un ejemplo trivial bastante interesante es el siguiente. Para estimar un parámetro $\theta$, el estimador que consiste en un valor fijo $\theta_{0}$, tiene riesgo 0 en $\theta=\theta_{0}$. Sin embargo, el riesgo aumenta considerablemente al alejarnos del valor real de $\theta$. Por lo tanto, no resulta un estimador razonable, aunque su riesgo pueda ser mínimo para algún (único) valor de $\theta$.

Figura 2.1: Comparación del riesgo de dos estimadores

Los ejemplos anteriores nos muestran que los criterios de preferencia entre estimadores basados en el riesgo o en el $E Q M$ no son de gran utilidad general ya que muchos estimadores pueden ser incomparables. Ante este hecho nos planteamos si es posible completar el criterio de minimizar el riesgo mediante alguna propiedad o criterio adicional. Las posibles soluciones obtenidas a esta cuestión siguen dos vías:

1. Restringir la clase de estimadores considerados a aquellos que cumplan alguna propiedad adicional de interés, eliminando estimadores indeseables para que el criterio de minimizar el riesgo permita seleccionar uno preferible a los demás. Este criterio lleva a considerar las propiedades deseables de los estimadores como falta de sesgo, consistencia, eficiencia y analizar cómo combinarlas con el criterio de mínimo riesgo. Este proceso culmina con el estudio de los Estimadores Sin Sesgo Uniformemente de Mínima Varianza (ESUMV).
2. Reforzar el criterio de preferencia de estimadores mediante la reducción de toda la función de riesgo $R_{T}(\theta)$ a un único valor representativo que permita ordenar linealmente todos los estimadores. Este criterio nos lleva a los Estimadores Bayes y a los Estimadores Minimax.

### 12.2. Estudio de las propiedades deseables de los estimadores

#### 12.2.1. El sesgo

Supongamos que tenemos un modelo estadístico $\left\{X \sim F_{\theta}: \theta \in \Theta\right\}$ y un estimador $T\left(X_{1}, X_{2}, \ldots, X_{n}\right)$ de una función medible $g(\theta)$ del parámetro. Una forma razonable de valorar qué tan próximos son los valores de $T$ a los de $g(\theta)$ es ver si, en promedio, los valores de $T$ coinciden con el valor medio de $g(\theta)$.

Definició 2.6 Bajo las condiciones mencionadas, si $E_{\theta}(T)$ es la esperanza de $T\left(X_{1}, X_{2}, \ldots, X_{n}\right)$ y $g(\theta)$ es una función del parámetro (en particular la identidad), la diferencia

$$
b_{T}(\theta)=b_{T}(\theta)=E_{\theta}(T)-g(\theta)
$$

se denomina sesgo del estimador $T$ para estimar $g(\theta)$. Si el sesgo es nulo, es decir, si:

$$
E_{\theta}(T)=g(\theta), \quad \forall \theta \in \Theta
$$

diremos que $T$ es un estimador insesgado de $g(\theta)$.
Exemple 2.2.1 Los dos ejemplos más conocidos son el de la media y la varianza muestrales.

- La media muestral es un estimador insesgado de $\mu$.
- La varianza muestral es un estimador con sesgo de la varianza poblacional. En concreto, su sesgo vale:

$$
b_{s^{2}}\left(\sigma^{2}\right)=E_{\sigma^{2}}\left(s^{2}\right)-\sigma^{2}=\frac{n-1}{n} \sigma^{2}-\sigma^{2}=\frac{-1}{n} \sigma^{2}
$$

El uso de estimadores insesgados es conveniente en muestras de tamaño grande. En estas, $\operatorname{var}_{\theta}(T)$ es a menudo pequeña y entonces, como $E_{\theta}(T)=$ $g(\theta)+b_{T}(\theta)$, es muy probable obtener estimaciones centradas en este valor en lugar de en el entorno de $g(\theta)$.

Exemple 2.2.2 Sea $X_{1}, X_{2}, \ldots, X_{n}$ una muestra aleatoria simple de $X \sim$ $U(0, \theta)$. Tomemos $T=\max \left\{X_{1}, X_{2}, \ldots, X_{n}\right\}$ como el estimador del máximo de la distribución. Obviamente podemos decir que $T<\theta$ y, por lo tanto,
la estimación siempre está sesgada. Como hemos visto en el ejemplo ??, la distribución en el muestreo de $T$ es

$$
H_{\theta}(t)=P_{\theta}[T \leq t]=\left(\frac{t}{\theta}\right)^{n}
$$

y su función de densidad es

$$
f_{\theta}(\theta)=H_{\theta}^{\prime}(\theta)=\frac{n}{\theta}\left(\frac{t}{\theta}\right)^{n-1}
$$

Su esperanza (ver ejemplo ??) vale

$$
E_{\theta}(T)=\int_{0}^{\theta} t \cdot\left[\frac{n}{\theta}\left(\frac{t}{\theta}\right)^{n-1}\right] d t=\frac{n}{n+1} \theta
$$

de donde el sesgo de $T$ para estimar $\theta$ es

$$
b_{T}(\theta)=\frac{n}{n+1} \theta-\theta=-\frac{1}{n+1} \theta
$$

Podemos preguntarnos si podríamos mejorar este estimador corrigiendo el sesgo de forma análoga a lo que hacíamos con $\hat{s}^{2}$, es decir, tomando un estimador corregido para el sesgo

$$
T^{\prime}=\frac{n+1}{n} T \text { que, por construcción, verifica: } E\left(T^{\prime}\right)=\theta \text {. }
$$

Consideremos el estimador de mínimo riesgo en el sentido del error cuadrático medio, es decir, el estimador que minimiza $E\left[(\theta-T)^{2}\right]$. De hecho, como hemos visto en el ejemplo ??, conviene elegir el que minimice $E\left[(\theta-T)^{2} / \theta^{2}\right]$, porque también minimiza el EQM, pero alcanza un mínimo absoluto. Este estimador es

$$
T^{\prime \prime}=\frac{n+2}{n+1} T
$$

y, por tanto, es más adecuado que $T^{\prime}$, ya que tiene un menor riesgo respecto al error cuadrático medio.
Cuando, como aquí, nos encontramos con que dado un estimador podemos encontrar otro de menor riesgo, decimos que el primero no es admisible respecto de la función de pérdida. En este caso decimos que $T^{\prime}$ no es admisible respecto al EQM. ¡Cuidado! Esto no significa que no podamos usarlo, sino que existe otro con menor riesgo, ya que existe otro $T^{\prime \prime}$ preferible a él que, por cierto, no es centrado. Efectivamente

$$
E_{\theta}\left(T^{\prime \prime}\right)=\frac{n+2}{n+1} E_{\theta}(T)=\frac{(n+2) n}{(n+1)^{2}} \theta
$$

El ejemplo anterior muestra que, debido a la descomposición $E Q M_{T}(\theta)=$ $\operatorname{var}_{\theta}(T)+b_{T}^{2}(\theta)$, puede ser preferible un estimador con sesgo a otro que no lo tenga.
En general, sin embargo, eliminar el sesgo no es una mala estrategia, sobre todo porque al restringirnos a la clase de los estimadores insesgados obtenemos una solución constructiva que permitirá obtener estimadores insesgados de mínima varianza en condiciones bastante generales.
Los siguientes ejemplos ilustran dos propiedades interesantes del sesgo. Por un lado, muestran que no siempre existe un estimador insesgado. Por otro lado, vemos cómo a veces, incluso teniendo un estimador insesgado para un parámetro $E_{\theta}(T)=\theta$, una función $g(T)$ no es necesariamente un estimador insesgado de $g(\theta)$.

Exemple 2.2.3 Consideremos una variable $X$ con distribución de Bernoulli $B(1, p)$. Supongamos que deseamos estimar $g(p)=p^{2}$ con una única observación. Para que un estimador $T$ no tenga sesgo para estimar $p^{2}$ sería necesario que

$$
p^{2}=E_{p}(T)=p \cdot T(1)+(1-p) \cdot T(0), \quad 0 \leq p \leq 1
$$

es decir, para cualquier valor de $p \in[0,1]$ se debería verificar

$$
p^{2}=p \cdot(T(1)-T(0))+T(0)
$$

Esto claramente no es posible, ya que la única forma en que una función lineal y una función parabólica coincidan en todo el intervalo $[0,1]$ es cuando los coeficientes $T(0)$ y $T(1)$ valen cero.

Exemple 2.2.4 El parámetro $\alpha$ de una ley exponencial con función de densidad

$$
f(x)=\alpha e^{-\alpha x} \mathbf{1}_{(0, \infty)}(x)
$$

es el inverso de la media de la distribución, es decir, $\alpha=1 / E(X)$.
Un estimador razonable de $\alpha=g(\mu)$ puede ser $\hat{\alpha}=g(\hat{\mu})$, es decir, $\hat{\alpha}=$ $1 / \bar{X}$. Si aplicamos la propiedad de que la suma de variables aleatorias i.i.d. exponenciales sigue una ley gamma de parámetros $n$ y $\alpha$, se obtiene que este estimador tiene sesgo. Su esperanza es

$$
E(\hat{\alpha})=\frac{n}{n-1} \alpha
$$

El sesgo se corrige simplemente con

$$
\hat{\alpha}^{\prime}=\frac{n-1}{n} \hat{\alpha}
$$

#### 12.2.2. Consistencia

La consistencia de un estimador es una propiedad bastante intuitiva que indica, de manera informal, que cuando aumenta el tamaño muestral, el valor del estimador se aproxima cada vez más al verdadero valor del parámetro.

Definició 2.7 Sea $X_{1}, X_{2}, \ldots, X_{n}, \ldots$ una sucesión de variables aleatorias i.i.d. $X \sim F_{\theta}, \theta \in \Theta$. Una sucesión de estimadores puntuales $T_{n}=$ $T\left(X_{1}, X_{2}, \ldots, X_{n}\right)$ se denomina consistente para $g(\theta)$ si

$$
T_{n} \xrightarrow[n \rightarrow \infty]{P} g(\theta)
$$

para cada $\theta \in \Theta$, es decir, si

$$
\forall \varepsilon>0 \quad \lim _{n \rightarrow \infty} P\left\{\left|T_{n}-g(\theta)\right|>\varepsilon\right\}=0
$$

Observemos que:

1. Se trata de un concepto asintótico: Hablamos de ?sucesiones de estimadores consistentes? más que de estimadores propiamente dichos.
2. La definición puede reforzarse si, en lugar de considerar convergencia en probabilidad (consistencia débil), consideramos convergencia casi segura o en media cuadrática:

- $T_{n}$ es fuertemente consistente si $T_{n} \xrightarrow{\text { c.s. }} g(\theta)$
- $T_{n}$ es consistente en media- $r$ si $E_{\theta}\left[\left|T_{n}-g(\theta)\right|^{r}\right] \longrightarrow 0$

Exemple 2.2.5 Muchos estimadores consistentes lo son como consecuencia de las leyes de los grandes números. Recordemos que la Ley débil de los Grandes Números (Tchebychev) afirma que, dada una sucesión de v.a. independientes e idénticamente distribuidas con medias $\mu<\infty$ y varianzas $\sigma^{2}<\infty$, entonces

$$
\bar{X}_{n} \xrightarrow{P} \mu
$$

Como consecuencia de esta ley y dado que una muestra aleatoria simple es i.i.d., por definición, podemos afirmar que $\bar{X}_{n}$ es consistente para estimar $\mu$.

Exemple 2.2.6 La sucesión $T_{n}=\max _{1 \leq i \leq n}\left\{X_{i}\right\}$ es consistente para estimar el máximo de una distribución uniforme en $[0, \theta]$ :

$$
P\left[\left|\max _{1 \leq i \leq n}\left\{X_{i}\right\}-\theta\right|>\varepsilon\right]=P\left[\theta-\max _{1 \leq i \leq n}\left\{X_{i}\right\}>\varepsilon\right]
$$

ya que $X_{i} \in[0, \theta] y$, por lo tanto, podemos escribir:

$$
\begin{aligned}
P\left[\theta-\varepsilon>\max _{1 \leq i \leq n}\left\{X_{i}\right\}\right] & =P\left[\max _{1 \leq i \leq n}\left\{X_{i}\right\}<\theta-\varepsilon\right] \\
& =\left(\frac{\theta-\varepsilon}{\theta}\right)^{n}=\left(1-\frac{\varepsilon}{\theta}\right)^{n} \underset{n \rightarrow \infty}{\longrightarrow} 0
\end{aligned}
$$

Es inmediato comprobar que

$$
E\left[\left(\theta-T_{n}\right)^{2}\right]=\left(1-\frac{2 n}{n+1}+\frac{n}{n+2}\right) \theta^{2}
$$

que también tiende a cero cuando $n \rightarrow \infty$, y por lo tanto $T_{n}=\max _{1 \leq i \leq n}\left\{X_{i}\right\}$ también es consistente en media cuadrática.

Normalmente, cuando se habla de consistencia, se hace referencia a la convergencia en probabilidad, es decir, $T_{n}$ es consistente si $\lim _{n \rightarrow \infty} P\left(\left|T_{n}-g(\theta)\right|>\right.$ $\varepsilon)=0$. Si el estimador no tiene sesgo, estamos en la situación de aplicar la desigualdad de Tchebychev ${ }^{1}$ :
Si $E\left(T_{n}\right)=g(\theta)$, entonces

$$
P\left(\left|T_{n}-g(\theta)\right|>\varepsilon\right)=P\left(\left|T_{n}-E\left(T_{n}\right)\right|>\varepsilon\right) \underset{\text { Tchebychev }}{\leq} \frac{\operatorname{var}\left(T_{n}\right)}{\varepsilon^{2}}
$$

Así, para intentar establecer la consistencia de $T$, debemos probar que

$$
\frac{\operatorname{var}\left(T_{n}\right)}{\varepsilon^{2}} \underset{n \rightarrow \infty}{\longrightarrow} 0
$$

Exemple 2.2.7 Sea $M_{n}=\sum_{i=1}^{n} a_{i} X_{i}$ una combinación lineal de los valores de la muestra con coeficientes tales que $\sum_{i=1}^{n} a_{i}=1$ y algún $a_{i}>0$. ¿Es consistente $M_{n}$ para estimar $E(X)$ ?
Comencemos por ver que $M_{n}$ no tiene sesgo

$$
\begin{aligned}
E\left(M_{n}\right) & =E\left(\sum_{i=1}^{n} a_{i} X_{i}\right)=\sum_{i=1}^{n} E\left(a_{i} X_{i}\right) \\
& =\sum_{i=1}^{n} a_{i} E\left(X_{i}\right) \stackrel{\text { i.i.d. }}{=} \sum_{i=1}^{n} a_{i} E(X)=E(X)
\end{aligned}
$$

[^1]Calculemos la varianza

$$
\begin{aligned}
\operatorname{var}\left(M_{n}\right) & =\operatorname{var}\left(\sum_{i=1}^{n} a_{i} X_{i}\right)=\sum_{i=1}^{n} \operatorname{var}\left(a_{i} X_{i}\right) \\
& =\sum_{i=1}^{n} a_{i}^{2} \operatorname{var}\left(X_{i}\right)=\operatorname{var}(X) \sum_{i=1}^{n} a_{i}^{2}
\end{aligned}
$$

Si aplicamos ahora la desigualdad de Tchebychev tenemos:

$$
P\left(\left|M_{n}-\mu\right|>\varepsilon\right) \leq \frac{\sigma^{2} \sum a_{i}^{2}}{\varepsilon^{2}}
$$

lo cual no tiene por qué tender a 0 cuando $n \rightarrow \infty$, y por lo tanto no podemos afirmar que el estimador es consistente. Por ejemplo, si $a_{1}=\frac{1}{2}, a_{2}=a_{3}=$ $\cdots=a_{n}=\frac{1}{2(n-1)}$ tendremos que $\lim _{n \rightarrow \infty} \sum a_{i}^{2}=\frac{1}{4}$.
Observamos que el resultado obtenido no puede asegurar la consistencia de $M_{n}$ para cualquier familia de coeficientes $a_{1}, \ldots, a_{n}$, aunque, obviamente, el estimador es consistente para alguno (caso $a_{i}=1 / n$ ).

## 13. Propiedades de los estimadores consistentes

Muchas de las propiedades de los estimadores son consecuencia directa de las propiedades de la convergencia en probabilidad, que se pueden revisar, por ejemplo, en Martin Pliego (1998a) capítulo 11.

1. Si $T_{n}$ es consistente para estimar $\theta$ y $g: \mathbb{R} \rightarrow \mathbb{R}$ es una función continua, entonces $g\left(T_{n}\right)$ es consistente para estimar $g(\theta)$.
2. Si $T_{1 n}$ y $T_{2 n}$ son consistentes para estimar $\theta_{1}$ y $\theta_{2}$ respectivamente, entonces
$a T_{1 n} \pm b T_{2 n}$ es consistente para estimar $a \theta_{1} \pm b \theta_{2}$
$T_{1 n} \cdot T_{2 n}$ es consistente para estimar $\theta_{1} \cdot \theta_{2}$
$T_{1 n} / T_{2 n}$ es consistente para estimar $\theta_{1} / \theta_{2}$, si $\theta_{2} \neq 0$.
3. Sea $a_{r}=(1 / n) \sum X_{i}^{r}$ el momento muestral de orden $r$. Como se ha visto en el capítulo 1 , la esperanza de $a_{r}$ es

$$
E\left(a_{r}\right)=E\left[\frac{1}{n} \sum X_{i}^{r}\right]=\frac{1}{n} \sum E\left(X^{r}\right)=\frac{1}{n} n \alpha_{r}=\alpha_{r}
$$

donde $\alpha_{r}$ es el momento poblacional de orden $r$. Así pues, $a_{r}$ no tiene sesgo para estimar $\alpha_{r}$. Su varianza es

$$
\begin{aligned}
\operatorname{var}\left(a_{r}\right) & =\operatorname{var}\left(\frac{1}{n} \sum X_{i}^{r}\right)=\frac{1}{n^{2}} \sum \operatorname{var}\left(X^{r}\right)=\frac{1}{n} E\left[X^{r}-E\left(X^{r}\right)\right]^{2} \\
& =\frac{1}{n} E\left[X^{r}-\alpha_{r}\right]^{2}=\frac{1}{n} E\left(X^{2 r}+\alpha_{r}^{2}-2 \alpha_{r} X^{r}\right) \\
& =\frac{1}{n}\left(\alpha_{2 r}-\alpha_{r}^{2}\right) .
\end{aligned}
$$

Y si aplicamos la desigualdad de Tchebychev, se obtiene

$$
P\left(\left|a_{r}-\alpha_{r}\right| \geq \varepsilon\right) \leq \frac{E\left(a_{r}-\alpha_{r}\right)^{2}}{\varepsilon^{2}}=\frac{\operatorname{var}\left(a_{r}\right)}{\varepsilon^{2}}=\frac{\alpha_{2 r}-\alpha_{r}^{2}}{n \varepsilon^{2}} \underset{n \rightarrow \infty}{\longrightarrow} 0
$$

Así pues, hemos visto que los momentos muestrales son estimadores consistentes de los momentos poblacionales.

#### 13.0.1. Eficiencia

Como ya hemos visto, un objetivo deseable en la búsqueda de estimadores óptimos es considerar estimadores de "mínimo riesgo" o, si nos basamos en la función de pérdida cuadrática, estimadores que minimicen el error cuadrático medio $E(\theta-T)^{2}$.
En general, es difícil encontrar estimadores que hagan mínimo el EQM para todos los valores de $\theta$; sin embargo, si nos restringimos a los estimadores sin sesgo, el problema tiene solución en una gama más amplia de situaciones. Supongamos que $T_{1}, T_{2}$ son dos estimadores sin sesgo de un parámetro $\theta$. Para estos estimadores tenemos que

$$
\begin{aligned}
& E Q M_{T_{1}}(\theta)=\operatorname{var}_{\theta}\left(T_{1}\right)+b_{T_{1}}^{2}(\theta) \\
& E Q M_{T_{2}}(\theta)=\operatorname{var}_{\theta}\left(T_{2}\right)+b_{T_{2}}^{2}(\theta)
\end{aligned}
$$

Si los estimadores no tienen sesgo $b_{T_{1}}(\theta)=b_{T_{2}}(\theta)=0$, el que tenga menor varianza tendrá el menor riesgo para estimar $\theta$. Si, por ejemplo, $\operatorname{var}\left(T_{1}\right) \leq$ $\operatorname{var}\left(T_{2}\right)$, diremos que $T_{1}$ es más eficiente que $T_{2}$ para estimar $\theta$.
Para dos estimadores con sesgo cero $b_{T_{i}}(\theta)=0$, el cociente

$$
E R=\frac{E Q M_{T_{1}}(\theta)}{E Q M_{T_{2}}(\theta)}=\frac{\operatorname{var}_{\theta}\left(T_{1}\right)}{\operatorname{var}_{\theta}\left(T_{2}\right)}
$$

se denomina eficiencia relativa de $T_{1}$ respecto a $T_{2}$. Si solo hay dos estimadores de $\theta$ puede ser fácil ver cuál es el más eficiente. Si hay más, la cosa se complica. El "más eficiente", en caso de que exista, se llamará el estimador sin sesgo de mínima varianza.

Figura 2.2: Comparación de la eficiencia de dos estimadores para un $\theta$ dado

Definició 2.8 Sea $\mathcal{S}(\theta)$ la clase de los estimadores sin sesgo de $\theta$ y con varianza. Si para todos los estimadores de esta clase $T \in \mathcal{S}(\theta)$ se verifica que

$$
\operatorname{var}_{\theta}(T) \leq \operatorname{var}_{\theta}\left(T^{*}\right) \quad \forall T \in \mathcal{S}(\theta)
$$

diremos que $T^{*}$ es un estimador sin sesgo de mínima varianza de $\theta$. Si la desigualdad es cierta $\forall \theta \in \Theta$, diremos que $T^{*}$ es un estimador sin sesgo uniforme de mínima varianza (ESUMV) ${ }^{2}$.

### 13.1. Información de Fisher y cota de CramerRao

Obviamente, en un problema de estimación lo ideal es disponer de un ESUMV, pero esto no siempre es posible. Nos enfrentamos a varios problemas:

1. ¿Existen ESUMV para un parámetro $\theta$ en un modelo dado?
2. En caso de que exista el ESUMV, ¿sabremos cómo encontrarlo?

Este problema tiene solución, bajo ciertas condiciones, utilizando los teoremas de Lehmann-Scheffé y Rao-Blackwell y el concepto de suficiencia, que se discute más adelante.

[^2]Una solución parcial aparece gracias al Teorema de Cramer-Rao, que permite establecer una cota mínima para la varianza de un estimador. Cuando un estimador alcanza esta cota, sabemos que es un estimador de varianza mínima.
Informalmente, este resultado sugiere que, bajo ciertas condiciones de regularidad, si $T$ es un estimador insesgado de un parámetro $\theta$, su varianza está acotada por una expresión que llamamos cota de Cramer-Rao $\operatorname{CCR}(\theta)$

$$
\operatorname{var}(T) \geq \operatorname{CCR}(\theta)
$$

Antes de establecer con precisión este teorema, consideremos el concepto de información de un modelo estadístico introducido por Fisher.

## 14. Información y verosimilitud de un modelo estadístico

Una idea bastante razonable es esperar que un estimador funcione mejor en su intento de aproximarse al valor de un parámetro cuanto más información tenga para hacerlo. Por este motivo, la varianza del estimador y la información se presentan como cantidades opuestas: a mayor información, menor error (varianza) en la estimación:

$$
\operatorname{var}\left(T_{n}\right) \propto \frac{1}{I_{n}(\theta)}
$$

Ahora nos encontramos con el problema de cómo definir la cantidad de información (contenida en una muestra/de un modelo), para que se ajuste a la idea intuitiva de información. Fisher lo hizo a través de la función de verosimilitud.
Sea un modelo estadístico $\left\{X \sim F_{\theta}: \theta \in \Theta\right\}$ y una m.a.s. $\left(X_{1}, X_{2}, \ldots, X_{n}\right)$, que toma valores $\mathbf{x}=\left(x_{1}, x_{2}, \ldots, x_{n}\right)$. Si $X$ es discreta, la función de masa de probabilidad indica, en términos generales, la probabilidad de observar la muestra, dado un valor del parámetro. Si $X$ es absolutamente continua, esta interpretación ya no es tan directa.

$$
f\left(x_{1}, x_{2}, \ldots, x_{n} ; \theta\right)= \begin{cases}P_{\theta}\left[X=x_{1}\right] \cdots P_{\theta}\left[X=x_{n}\right], & \text { si } X \text { es discreta } \\ f_{\theta}\left(x_{1}\right) \cdots f_{\theta}\left(x_{n}\right), & \text { si } X \text { es abs. continua }\end{cases}
$$

La función de verosimilitud se obtiene si consideramos, en la expresión anterior, que lo que queda fijado es la muestra y no el parámetro. Es decir, fijada una muestra x, la función de verosimilitud indica qué tan verosímil resulta, para cada valor del parámetro, que el modelo la haya generado.

Exemple 2.3.1 Supongamos que tenemos una m.a.s. $x_{1}, x_{2}, \ldots, x_{n}$ de tamaño n de una variable aleatoria $X$, que sigue una ley de Poisson de parámetro $\lambda$ desconocido.

$$
X \sim F_{\lambda}=P(\lambda), \quad \lambda>0
$$

La función de probabilidad de la muestra, fijado $\lambda$, es:

$$
g_{\lambda}\left(x_{1}, x_{2}, \ldots, x_{n}\right)=\prod_{i=1}^{n} e^{-\lambda} \frac{\lambda^{x_{i}}}{x_{i}!}=e^{-n \lambda} \frac{\lambda^{\sum x_{i}}}{\prod_{i=1}^{n} x_{i}!}
$$

y la función de verosimilitud del modelo, fijada $\mathbf{x}$, es:

$$
L\left(x_{1}, x_{2}, \ldots, x_{n} ; \lambda\right)=\prod_{i=1}^{n} e^{-\lambda} \frac{\lambda^{x_{i}}}{x_{i}!}=e^{-n \lambda} \frac{\lambda^{\sum x_{i}}}{\prod_{i=1}^{n} x_{i}!}
$$

Aunque la forma funcional de $g_{\lambda}(\mathbf{x})$ y $L(\mathbf{x} ; \lambda)$ es la misma, su aspecto es diferente, como se puede comprobar en la figura 2.3, donde damos valores a $g_{\lambda}(\mathbf{x})$, variando $\mathbf{x}$ o a $L(\lambda ; \mathbf{x})$ variando $\lambda$.

## 15. Información de Fisher

Para calcular la cantidad de información de Fisher contenida en una muestra sobre un parámetro, es necesario considerar modelos estadísticos regulares, es decir, donde se cumplen las siguientes condiciones de regularidad.

Definició 2.9 Diremos que $\left\{X \sim F_{\theta}: \theta \in \Theta\right\}$ es un modelo estadístico regular si se verifican las siguientes condiciones:

1. La población de donde proviene la muestra presenta un ?campo de variación? o soporte $S_{\theta}=\{x \mid f(x ; \theta)>0\}=S$ que no depende de $\theta$.
2. La función $L(\mathbf{x} ; \theta)$ admite, al menos, las dos primeras derivadas.
3. Las operaciones de derivación e integración son intercambiables.

Definició 2.10 Sea $\left\{X \sim F_{\theta}: \theta \in \Theta\right\}$ un modelo estadístico regular, es decir, donde se verifican las condiciones de regularidad 1-3 anteriores. Si $Z=\frac{\partial}{\partial \theta} \log L(\mathbf{X} ; \theta)$, la cantidad de información de Fisher es

$$
I_{n}(\theta)=\operatorname{var}_{\theta}(Z)=\operatorname{var}_{\theta}\left(\frac{\partial}{\partial \theta} \log L(\mathbf{X} ; \theta)\right)
$$

Figura 2.3: Probabilidad de la suma de $n=5$ valores muestrales para 10 muestras de la ley de Poisson con $\lambda=3$ versus la función de verosimilitud para una muestra observada.

Las condiciones de regularidad son necesarias para calcular $E_{\theta}\left(Z^{2}\right)$.
A continuación, presentamos algunas propiedades de la información de Fisher. Puedes ver la demostración en Ruiz-Maya y Pliego (1995).

1. La información de Fisher se puede expresar como:

$$
I_{n}(\theta)=E_{\theta}\left[\left(\frac{\partial \log L(\mathbf{X} ; \theta)}{\partial \theta}\right)^{2}\right]
$$

Esto se puede comprobar, ya que si aplicamos las condiciones de regularidad

$$
\begin{aligned}
E(Z) & =E\left(\frac{\partial \log L(\mathbf{X} ; \theta)}{\partial \theta}\right)=\int_{S^{n}} \frac{\partial \log L(\mathbf{x} ; \theta)}{\partial \theta} L(\mathbf{x} ; \theta) d \mathbf{x} \\
& =\int_{S^{n}} \frac{\frac{\partial L(\mathbf{x} ; \theta)}{\partial \theta}}{L(\mathbf{x} ; \theta)} L(\mathbf{x} ; \theta) d \mathbf{x}=\int_{S^{n}} \frac{\partial L(\mathbf{x} ; \theta)}{\partial \theta} d \mathbf{x} \\
& =\frac{\partial}{\partial \theta}\left(\int_{S^{n}} L(\mathbf{x} ; \theta) d \mathbf{x}\right)=\frac{\partial}{\partial \theta} 1=0
\end{aligned}
$$

De forma que $E(Z)=0$, y por lo tanto, tendremos que $\operatorname{var}_{\theta}(Z)=$ $E_{\theta}\left(Z^{2}\right)$.
2. $I_{n}(\theta)=0$ si y solo si $L(\mathbf{x} ; \theta)$ no depende de $\theta$.
3. Dadas dos m.a.s. $\mathbf{x}_{1}, \mathbf{x}_{2}$ de tamaños $n_{1}, n_{2}$ de la misma población, se verifica:

$$
I_{n_{1}, n_{2}}(\theta)=I_{n_{1}}(\theta)+I_{n_{2}}(\theta)
$$

De manera que podemos considerar una muestra de tamaño $n$ como $n$ muestras de tamaño 1 :

$$
I_{n}(\theta)=\sum_{i=1}^{n} I_{1}(\theta)=n \cdot i(\theta), \text { siendo } i(\theta)=I_{1}(\theta)
$$

Es decir

$$
E\left(\frac{\partial \log (L(\mathbf{X} ; \theta))}{\partial \theta}\right)=n E\left(\frac{\partial \log f(X ; \theta)}{\partial \theta}\right)
$$

4. Se verifica la siguiente relación:

$$
I_{n}(\theta)=E\left[\left(\frac{\partial \log L(\mathbf{X} ; \theta)}{\partial \theta}\right)^{2}\right]=-E\left[\frac{\partial^{2} \log L(\mathbf{X} ; \theta)}{\partial^{2} \theta}\right]
$$

Exemple 2.3.2 Vamos a calcular la cantidad de información de Fisher contenida en una m.a.s. extraída de una población $N(\mu, \sigma)$ con $\sigma=\sigma_{0}$ conocida. La función de verosimilitud es

$$
L(\mathbf{x} ; \mu)=\prod_{i=1}^{n} \frac{1}{\sqrt{2 \pi} \sigma_{0}} e^{-\frac{\left(x_{i}-\mu\right)^{2}}{2 \sigma_{0}^{2}}}=\left(2 \pi \sigma_{0}^{2}\right)^{-n / 2} \exp \left(-\sum_{i=1}^{n} \frac{\left(x_{i}-\mu\right)^{2}}{2 \sigma_{0}^{2}}\right)
$$

y su logaritmo

$$
\log L(\mathbf{x} ; \mu)=-\frac{n}{2} \log \left(2 \pi \sigma_{0}^{2}\right)-\frac{1}{2 \sigma_{0}^{2}} \sum_{i=1}^{n}\left(x_{i}-\mu\right)^{2}
$$

Si derivamos respecto a $\mu$

$$
\frac{\partial \log L(\mathbf{x} ; \mu)}{\mu}=\frac{\sum_{i=1}^{n}\left(x_{i}-\mu\right)}{\sigma_{0}^{2}}
$$

de donde

$$
\begin{aligned}
I_{n}(\mu) & =E\left(\frac{\partial \log L(\mathbf{X} ; \mu)}{\partial \mu}\right)^{2}=E\left(\frac{\sum_{i=1}^{n}\left(X_{i}-\mu\right)}{\sigma_{0}^{2}}\right)^{2} \\
& =\frac{1}{\sigma_{0}^{4}} E\left[\sum_{i=1}^{n}\left(X_{i}-\mu\right)^{2}+\sum_{i \neq j}\left(X_{i}-\mu\right)\left(X_{j}-\mu\right)\right] \\
& =\frac{1}{\sigma_{0}^{4}} n \sigma_{0}^{2}=\frac{n}{\sigma_{0}^{2}}
\end{aligned}
$$

Este cálculo también puede hacerse a partir de la tercera propiedad de la información de Fisher:

$$
I_{n}(\mu)=n E\left[\frac{\partial \log f(X ; \mu)}{\partial \mu}\right]=n \frac{1}{\sigma_{0}^{2}}=\frac{n}{\sigma_{0}^{2}}
$$

## 16. La desigualdad de Cramer-Rao

Una vez establecidas las condiciones de regularidad y características anteriores podemos enunciar el teorema de Cramer-Rao (1945).

Teorema 2.1 Dado un modelo estadístico regular $\left\{X \sim F_{\theta}: \theta \in \Theta\right\}$, es decir, un modelo donde se verifican las condiciones de regularidad enunciadas, cualquier estimador $T \in \mathcal{S}(\theta)$ de la clase de los estimadores no sesgados y con varianza verifica

$$
\operatorname{var}_{\theta}(T) \geq \frac{1}{I_{n}(\theta)}
$$

Demostración:
El estimador $T \in \mathcal{S}(\theta)$ no tiene sesgo, es decir que

$$
E(T)=\int_{S^{n}} T(\mathbf{x}) \cdot L(\mathbf{x} ; \theta) d \mathbf{x}=\theta
$$

Si derivamos e introducimos la derivada bajo el signo de la integral, obtenemos

$$
\begin{aligned}
\frac{\partial}{\partial \theta} E(T) & =\int_{S^{n}} \frac{\partial}{\partial \theta}(T(\mathbf{x}) \cdot L(\mathbf{x} ; \theta)) d \mathbf{x}=\int_{S^{n}} T(\mathbf{x}) \frac{\partial}{\partial \theta} L(\mathbf{x} ; \theta) d \mathbf{x} \\
& =\int_{S^{n}} T(\mathbf{x})\left(\frac{\frac{\partial}{\partial \theta} L(\mathbf{x} ; \theta)}{L(\mathbf{x} ; \theta)}\right) L(\mathbf{x} ; \theta) d \mathbf{x}
\end{aligned}
$$

Así pues

$$
1=\frac{\partial}{\partial \theta} \theta=\frac{\partial}{\partial \theta} E(T)=E(T Z)=\int_{S^{n}} T(\mathbf{x}) \cdot Z L(\mathbf{x} ; \theta) d \mathbf{x}
$$

En resumen

$$
E(T)=\theta, E(T Z)=1, E(Z)=0, \operatorname{var}(Z)=I_{n}(\theta)
$$

Si ahora consideramos el coeficiente de correlación al cuadrado entre $T$ y $Z$, tenemos

$$
\rho^{2}(T, Z)=\frac{[\operatorname{cov}(T, Z)]^{2}}{\operatorname{var}(T) \cdot \operatorname{var}(Z)}=\frac{[E(T Z)-E(T) E(Z)]^{2}}{\operatorname{var}(T) \cdot \operatorname{var}(Z)} \leq 1
$$

Si sustituimos los resultados hallados antes, obtenemos

$$
\frac{1}{\operatorname{var}(T) \cdot I_{n}(\theta)} \leq 1
$$

de donde se deduce la desigualdad enunciada.

Definició 2.11 Si un estimador alcanza la CCR (Cota de Cramer-Rao), diremos que es un estimador eficiente.

Todo estimador eficiente es de mínima varianza en la clase $\mathcal{S}(\theta)$. Sin embargo, también puede suceder que exista un estimador de mínima varianza sin alcanzar necesariamente la CCR.

Exemple 2.3.3 Sea $X \sim F_{\theta}=P(\lambda), \lambda>0$ (Poisson). Buscamos la $C C R$ de los estimadores de $\lambda$.

$$
\begin{aligned}
L(\mathbf{x} ; \lambda) & =\prod_{i=1}^{n} e^{-\lambda} \frac{\lambda^{x_{i}}}{x_{i}!}=e^{-n \lambda} \frac{\lambda^{\sum x_{i}}}{\prod_{i=1}^{n} x_{i}!} \\
\log L(\mathbf{x} ; \lambda) & =-n \lambda+\left(\sum x_{i}\right) \log \lambda-\log \left(\prod_{i=1}^{n} x_{i}!\right) \\
\frac{\partial \log (L(\mathbf{x} ; \lambda))}{\partial \lambda} & =-n+\frac{\sum x_{i}}{\lambda} \\
E\left[\frac{\partial \log L(\mathbf{x} ; \lambda)}{\partial \lambda}\right]^{2} & =E\left[n^{2}+\left(\frac{\sum X_{i}}{\lambda}\right)^{2}-\frac{2 n \sum X_{i}}{\lambda}\right] \\
& =n^{2}+\frac{1}{\lambda^{2}} E\left(\sum X_{i}\right)^{2}-\frac{2 n}{\lambda} n E(X)
\end{aligned}
$$

Aquí recordamos que la suma de variables de Poisson también es una Poisson, es decir:

$$
\sum X_{i} \sim P(n \lambda)
$$

por lo que

$$
E\left(\sum X_{i}\right)^{2}=\operatorname{var}\left(\sum X_{i}\right)+\left[E\left(\sum X_{i}\right)\right]^{2}=n \lambda+(n \lambda)^{2}
$$

Finalmente, se obtiene:

$$
E\left(Z^{2}\right)=n^{2}+\frac{n \lambda}{\lambda^{2}}+\frac{n^{2} \lambda^{2}}{\lambda^{2}}-2 n^{2}=\frac{n}{\lambda}
$$

De esta forma,

$$
I_{n}(\lambda)=\frac{n}{\lambda} \quad \Longrightarrow \quad \operatorname{var}(T) \geq \frac{\lambda}{n}
$$

Sabemos que la media aritmética verifica

$$
\operatorname{var}\left(\bar{X}_{n}\right)=\frac{\lambda}{n}
$$

lo cual coincide con la cota de Cramer-Rao, indicando que $\bar{X}_{n}$ es el estimador eficiente de $\lambda$.

Exemple 2.3.4 Para calcular la CCR o, dicho de otro modo, para que el inverso de

$$
E\left[\frac{\partial \log L(\mathbf{x} ; \theta)}{\partial \theta}\right]^{2}
$$

sea realmente la cota minima de $\operatorname{var}(\widehat{\theta})$ en la clase $\mathcal{S}(\theta)$, es necesario que se verifiquen las condiciones de regularidad. De lo contrario, se pueden obtener resultados absurdos.
Consideremos, por ejemplo, una variable aleatoria $X$ con función de densidad

$$
f(x ; \theta)=\frac{3}{\theta^{3}} x^{2} \mathbf{1}_{[0, \theta]}(x)
$$

y esperanza

$$
E(X)=\int_{0}^{\theta} x \cdot \frac{3}{\theta^{3}} x^{2} d x=\frac{3}{4} \theta
$$

Ya que $\theta=\frac{4}{3} E(X)$, esto sugiere estimar $\theta$ mediante $\widehat{\theta}=\frac{4}{3} \bar{X}$, que no tiene sesgo.
Por otro lado, si calculamos la varianza de $X$, tenemos

$$
\operatorname{var}(X)=E\left(X^{2}\right)-E(X)^{2}=\frac{3}{80} \theta^{2}
$$

Sabemos que $E(\widehat{\theta})=\theta, y$ además

$$
\operatorname{var}(\widehat{\theta})=\operatorname{var}\left(\frac{4}{3} \bar{X}\right)=\frac{\theta^{2}}{15 n}
$$

Si evaluamos $I_{n}(\theta)$ en su forma más sencilla, obtenemos

$$
I_{n}(\theta)=n I(\theta)=n \frac{9}{\theta^{2}}
$$

Así, la CCR resulta ser mayor que la varianza de este estimador:

$$
\operatorname{var}(\widehat{\theta})=\frac{\theta^{2}}{15 n}<\frac{\theta^{2}}{9 n}
$$

lo cual es un resultado absurdo. Este error se debe a no considerar que el soporte de $X$ depende de $\theta$, por lo que no se cumplen las condiciones de regularidad, y la cota de Cramer-Rao no existe.

También ocurre que la varianza de un estimador es inferior a la CCR aunque esta exista. Esto puede pasar, por ejemplo, con algún estimador sesgado.

## 17. Caracterización del estimador eficiente

Calcular la cota de Cramer-Rao es una cosa; encontrar el estimador que alcanza esta cota y, en consecuencia, tiene varianza mínima es otra. La siguiente caracterización permite, en algunos casos, obtener directamente la forma del estimador eficiente.

Teorema 2.2 Sea $T$ el estimador eficiente de $\theta$, entonces se verifica

$$
\sum_{i=1}^{n} \frac{\partial}{\partial \theta} \log f\left(X_{i} ; \theta\right)=K(\theta, n)(T-\theta)
$$

donde $K(\theta, n)$ es una función que depende de $\theta$ y de $n$ y que suele coincidir con la información de Fisher.
Demostración:
Si $T$ es el estimador eficiente, entonces

$$
\operatorname{var}(T)=\frac{1}{I_{n}(\theta)}
$$

y, por lo tanto, $\rho^{2}(T, Z)=1$.
En general, dadas dos variables aleatorias $X$ e $Y$, se sabe que si $\rho(X, Y)=1$, entonces

$$
Y-E(Y)=\beta(X-E(X))
$$

Si aplicamos este resultado a $T$ y $Z$, tenemos

$$
\begin{aligned}
Z-E(Z) & =\beta(T-E(T)) \\
\frac{\partial \log L(\mathbf{x} ; \theta)}{\partial \theta} & =K(\theta, n)(T-\theta)
\end{aligned}
$$

Exemple 2.3.5 En el caso de la distribución de Poisson, tenemos

$$
\begin{aligned}
f(x ; \lambda) & =e^{-\lambda} \frac{\lambda^{x}}{x!} \\
\log f(x ; \lambda) & =-\lambda+x \log (\lambda)-\log (x!) \\
\frac{\partial \log f(x ; \lambda)}{\partial \lambda} & =-1+x \frac{1}{\lambda} \\
Z=\sum_{i=1}^{n} \frac{\partial \log f\left(X_{i} ; \lambda\right)}{\partial \lambda} & =\sum_{i=1}^{n}\left(-1+\frac{X_{i}}{\lambda}\right)
\end{aligned}
$$

Queremos ver que

$$
\sum_{i=1}^{n}\left(\frac{X_{i}}{\lambda}-1\right)=K(\theta, n)(T-\theta)
$$

Si reescribimos esta expresión, obtenemos

$$
\frac{1}{\lambda} \sum_{i=1}^{n} X_{i}-n=\frac{1}{\lambda}\left(\sum_{i=1}^{n} X_{i}-n \lambda\right)=\frac{n}{\lambda}\left(\frac{1}{n} \sum_{i=1}^{n} X_{i}-\lambda\right)
$$

Así, $K(\lambda, n)=\frac{n}{\lambda}$, que coincide con la información de Fisher $I_{n}(\lambda)$. Por el teorema anterior, se deduce que $T=\bar{X}$ es el estimador eficiente $y$, por lo tanto, de mínima varianza.

### 17.1. Estadísticos suficientes

En un problema de inferencia puede suceder que los datos contengan información superflua o irrelevante a la hora de estimar el parámetro. También puede ocurrir lo contrario, que intentemos hacer la estimación sin utilizar toda la información disponible en la muestra. Ambas situaciones son indeseables. Parece razonable que, para estimar un parámetro, dada la dificultad derivada de disponer de varios estimadores entre los que queremos elegir el óptimo, nos basemos únicamente en aquellos que utilizan (solo) toda la información relevante.

Exemple 2.4.1 Supongamos que queremos estimar la proporción de piezas defectuosas $\theta$ en un proceso de fabricación. Para ello, examinamos $n$ piezas extraídas al azar a lo largo de una jornada y asignamos un 1 a las piezas defectuosas y un 0 a las que no lo son. Así, obtenemos una muestra aleatoria simple $X_{1}, X_{2}, \ldots, X_{n}$ donde

$$
X_{i}= \begin{cases}1 & \text { con probabilidad } \theta \\ 0 & \text { con probabilidad }(1-\theta)\end{cases}
$$

Intuitivamente, está claro que para estimar $\theta$ solo nos interesa el número de ceros y unos, es decir, el valor del estadístico

$$
T(\mathbf{X})=\sum_{i=1}^{n} X_{i}
$$

En este caso, un estadístico que considere la posición de los unos y los ceros en la muestra no aportaría nada relevante. En cambio, un estadístico que no considere todos los valores, como por ejemplo $T(\mathbf{X})=X_{1}$, sería claramente menos adecuado.

Las observaciones del ejemplo anterior se justifican al observar que todas las muestras de tamaño $n$ con el mismo número $t$ de unos (1) tienen la misma probabilidad. En concreto, la función de probabilidad de una muestra $x_{1}, x_{2}, \ldots, x_{n}$ es

$$
f_{\theta}\left(x_{1}, x_{2}, \ldots, x_{n}\right)=\theta^{t}(1-\theta)^{n-t}
$$

donde $t=\sum_{i=1}^{n} x_{i}, x_{i} \in\{0,1\}, i=1,2, \ldots, n$.
Como se puede ver, la probabilidad de la muestra solo depende del número de unos (o ceros) y no del orden en que aparecen en la muestra. El hecho de que la posición de los unos y los ceros en la muestra no aporte información relevante equivale a decir que el estadístico

$$
T(\mathbf{X})=\sum_{i=1}^{n} X_{i}
$$

contiene la misma información que $X_{1}, X_{2}, \ldots, X_{n}$ para estimar $\theta$. Observamos, sin embargo, varias diferencias entre basarse en $T(\mathbf{X})$ o en $X_{1}, X_{2}, \ldots, X_{n}$ :

- Al pasar de $X_{1}, X_{2}, \ldots, X_{n}$ a $\sum_{i=1}^{n} X_{i}$ hay una reducción de los datos que no implica pérdida de información.
- Muchas muestras diferentes dan lugar al mismo valor de $T$.

Fisher formalizó esta idea con el cálculo de la probabilidad condicionada de la observación muestral con $T(\mathbf{X})=\sum_{i=1}^{n} X_{i}$ y para todo $t=0,1, \ldots, n$ :

$$
\begin{aligned}
P_{\theta}[\mathbf{X}=\mathbf{x} \mid T=t] & =\frac{P_{\theta}[\mathbf{X}=\mathbf{x}, T=t]}{P_{\theta}(T=t)} \\
& =\frac{\theta^{t}(1-\theta)^{n-t}}{\binom{n}{t} \theta^{t}(1-\theta)^{n-t}}=\frac{1}{\binom{n}{t}}
\end{aligned}
$$

Es decir, dados $\left(x_{1}, x_{2}, \ldots, x_{n}\right) \in\{0,1\}^{n} \mathrm{y} t \in\{0,1, \ldots, n\}$, tenemos

$$
P_{\theta}[\mathbf{X}=\mathbf{x} \mid T=t]=\left\{\begin{array}{cc}
0 & \text { si } t \neq \sum_{i=1}^{n} x_{i} \\
\frac{1}{\binom{n}{t}} & \text { si } t=\sum_{i=1}^{n} x_{i}
\end{array}\right.
$$

Obviamente, $P_{\theta}[\mathbf{X}=\mathbf{x}]$ depende de $\theta$, que es el parámetro que queremos estimar. Sin embargo, la probabilidad condicionada $P_{\theta}[\mathbf{X}=\mathbf{x} \mid T=t]$ no depende de $\theta$. Tenemos entonces la siguiente expresión de la función de probabilidad de la muestra:

$$
P_{\theta}(\mathbf{X}=\mathbf{x})=P_{\theta}(T=t) \cdot P_{\theta}[\mathbf{X}=\mathbf{x} \mid T=t]
$$

Esta expresión muestra que $P_{\theta}(\mathbf{X})$ se puede descomponer en dos factores, uno que depende de $\theta, P_{\theta}(T=t)$, y otro que no depende de $\theta$,

$$
P_{\theta}[\mathbf{X}=\mathbf{x} \mid T=t] .
$$

Una forma de ver esta descomposición es pensar que el estadístico $T=$ $\sum_{i=1}^{n} X_{i}$ ?acumula? o ?absorbe? toda la información relativa a $\theta$, lo que se refleja en que la probabilidad de la muestra, dado $T=t$, ya no depende de $\theta$. Es decir, podemos imaginar la construcción de la muestra en dos etapas:

- En una primera etapa se elige el valor $t$ para $T$ con distribución $B(n, \theta)$.
- A continuación, se sitúan aleatoriamente $t$ unos y $n-t$ ceros en las $n$ posiciones.

Cuando la estructura del estadístico $T(\mathbf{X})$ hace que el segundo factor en la expresión anterior no dependa de $\theta$, significa que la observación adicional de la muestra es irrelevante. En este caso diremos que $T(\mathbf{X})$ es suficiente para la estimación de $\theta$. Dado que esta propiedad de $T$ queda caracterizada por la independencia de $P_{\theta}[\mathbf{X}=\mathbf{x} \mid T=t]$ respecto a $\theta$, se utiliza esta independencia para definir la suficiencia.

## 18. Definició 2.12

Dado un modelo estadístico $\left\{X \sim F_{\theta}: \theta \in \Theta\right\}$ y un estadístico $T$, diremos que $T$ es suficiente para $\theta$ si, dada una muestra $\mathbf{X}=\left(X_{1}, X_{2}, \ldots, X_{n}\right)$, se verifica que la distribución de $\mathbf{X}$ condicionada por el valor de $T$ no depende de $\theta$.

- No es necesario que $F_{\theta}$ sea discreta, como en el ejemplo introductorio, o que la muestra sea una muestra aleatoria simple.
- El estadístico suficiente para un parámetro puede ser $k$-dimensional.

Exemple 2.4.2 Dada una muestra $X_{1}, X_{2}, \ldots, X_{n}$ de una distribución de Poisson, la función de probabilidad de la muestra es

$$
P_{\theta}\left(X_{1}=x_{1}, \ldots, X_{n}=x_{n}\right)=\frac{e^{-n \lambda} \lambda \sum x_{i}}{x_{1}!\cdots x_{n}!}
$$

Calculemos la probabilidad de la muestra condicionada por el valor del estadístico $T=\sum_{i=1}^{n} X_{i}$ :

$$
\begin{aligned}
& P_{\theta}\left[X_{1}=x_{1}, \ldots, X_{n}=x_{n} \mid T=t\right]=\frac{P_{\theta}\left(X_{1}=x_{1}, \ldots, X_{n}=x_{n}, T=t\right)}{P_{\theta}(T=t)}
\end{aligned}
$$

$$
\begin{aligned}
& =\frac{t!}{x_{1}!\cdots x_{n}!}\left(\frac{1}{n}\right)^{t} \mathbf{1}_{\left\{\sum x_{i}=t\right\}}\left(x_{1}, \ldots, x_{n}\right)
\end{aligned}
$$

La probabilidad condicional no depende de $\lambda y$, por lo tanto, $T$ es suficiente para $\lambda$. Conviene observar que, en este ejemplo, no todas las muestras tienen la misma probabilidad.

#### 18.0.1. Teorema de factorización

La justificación de la suficiencia de un estadístico mediante la definición no siempre es sencilla, ya que la distribución condicional puede ser intratable con las herramientas disponibles. El teorema que se presenta a continuación proporciona un método sencillo para comprobar la suficiencia de un estadístico y, a menudo, sugiere cuál es el estadístico suficiente de menor dimensión posible.

Teorema 2.3 Neyman-Fisher. Sea $\left\{X \sim F_{\theta}: \theta \in \Theta\right\}$ un modelo estadístico y $X_{1}, X_{2}, \ldots, X_{n}$ una muestra aleatoria simple de $X$. Sea $f_{\theta}(\mathbf{x})$ la función de probabilidad o la función de densidad de la muestra, según si $X$ es discreta o absolutamente continua. Un estadístico $T$ es suficiente para $\theta$ si y solo si existen dos funciones medibles $g_{\theta}$ y $h$ tales que

$$
f_{\theta}(\mathbf{x})=g_{\theta}(T(\mathbf{x})) \cdot h(\mathbf{x})
$$

donde $h$ no depende de $\theta$ y g depende de $\theta$ y, además, solo depende de la muestra a través de $T$.

Veamos ahora la demostración del teorema de factorización, restringida al caso de variables discretas.

Demostración:
Comenzaremos suponiendo que $T$ es suficiente y concluiremos que es posible la factorización.
Si $T(\mathbf{X})$ es suficiente para la familia de distribuciones $\left\{F_{\theta} ; \theta \in \Theta\right\}$, la función de probabilidad de la muestra condicionada por $T$ no depende de $\theta$. Dado que

$$
f_{\theta}(\mathbf{x})=P_{\theta}[T=T(\mathbf{x})] \cdot f_{\theta}[\mathbf{x} \mid T=T(\mathbf{x})]
$$

solo es necesario tomar $g_{\theta}(t)=P_{\theta}[T=T(\mathbf{x})=t]$ y $h(\mathbf{x})=f_{\theta}[\mathbf{x} \mid T=T(\mathbf{x})]$ para obtener el resultado.
Ahora supongamos que es posible la factorización y deduzcamos la suficiencia.
Si $f_{\theta}(\mathbf{x})=g_{\theta}(T(\mathbf{x})) \cdot h(\mathbf{x})$ y llamamos $A_{t}=\left\{\mathbf{x} \in X(\Omega)^{n} \mid T(\mathbf{x})=t\right\}$, entonces

$$
P_{\theta}[T(\mathbf{x})=t]=\sum_{A_{t}} g_{\theta}(T(\mathbf{x})) \cdot h(\mathbf{x})=g_{\theta}(t) \cdot \sum_{A_{t}} h(\mathbf{x})
$$

Consideremos ahora la distribución de la muestra condicionada a $T=t$. El Teorema de Bayes para densidad permite escribir:

$$
\begin{aligned}
f_{\theta}(\mathbf{x} \mid T=t) & =\frac{f_{\theta}(\mathbf{x}, T=t)}{P_{\theta}(T=t)} \\
& = \begin{cases}\frac{g_{\theta}(t) \cdot h(\mathbf{x})}{g_{\theta}(t) \cdot \sum_{A_{t}} h(\mathbf{x})}=\frac{h(\mathbf{x})}{\sum_{A_{t}} h(\mathbf{x})} & \text { si } T(\mathbf{x})=t \\
0 & \text { si } T(\mathbf{x}) \neq t\end{cases}
\end{aligned}
$$

De modo que la distribución de $\mathbf{X}$ condicionada por el valor de $T$ no depende de $\theta$, y, en consecuencia, $T$ es suficiente.

Exemple 2.4.3 Si X sigue una distribución de Bernoulli, tenemos:

$$
f_{\theta}(\mathbf{x})=\theta^{\sum_{i=1}^{n} x_{i}}(1-\theta)^{n-\sum_{i=1}^{n} x_{i}}=g_{\theta}\left(\sum_{i=1}^{n} x_{i}\right) .
$$

Si tomamos $h(\mathbf{x})=1$, queda probado que $T=\sum_{i=1}^{n} X_{i}$ es suficiente.
Exemple 2.4.4 Si consideramos una muestra de una distribución de Poisson

$$
f_{\lambda}(\mathbf{x})=e^{-n \lambda} \frac{\lambda^{\sum_{i=1}^{n} x_{i}}}{x_{1}!x_{2}!\cdots x_{n}!}
$$

$y$ tomamos $T(\mathbf{x})=\sum_{i=1}^{n} x_{i}$, podemos escribir

$$
f_{\lambda}(\mathbf{x})=e^{-n \lambda} \lambda^{T(\mathbf{x})} \cdot\left(x_{1}!x_{2}!\cdots x_{n}!\right)^{-1}=g_{\lambda}(T(\mathbf{x})) \cdot h(\mathbf{x})
$$

donde

$$
g_{\lambda}(T(\mathbf{x}))=e^{-n \lambda} \lambda^{T(\mathbf{x})}, \quad h(\mathbf{x})=\left(x_{1}!x_{2}!\cdots x_{n}!\right)^{-1}
$$

De modo que $g_{\lambda}(t)=e^{-n \lambda} \lambda^{t}$ depende de la muestra solo a través de $T=$ $\sum_{i=1}^{n} x_{i}$ y $h(\mathbf{x})=\left(x_{1}!x_{2}!\cdots x_{n}!\right)^{-1}$ no depende de $\lambda$.

Exemple 2.4.5 Supongamos que $\mathbf{X}$ es una muestra aleatoria simple de una población $X \sim N(\mu, \sigma)$, cuya función de densidad es

$$
f_{\mu, \sigma^{2}}\left(x_{1}, x_{2}, \ldots, x_{n}\right)=\frac{1}{\left(\sqrt{2 \pi \sigma^{2}}\right)^{n}} \exp \left\{-\frac{1}{2 \sigma^{2}} \sum_{i=1}^{n}\left(x_{i}-\mu\right)^{2}\right\}
$$

Para evidenciar la factorización, utilizamos que

$$
\sum_{i=1}^{n}\left(x_{i}-\mu\right)^{2}=\sum_{i=1}^{n}\left(x_{i}-\bar{x}\right)^{2}+n(\bar{x}-\mu)^{2} .
$$

Entonces,

$$
\begin{aligned}
f_{\mu, \sigma^{2}}\left(x_{1}, x_{2}, \ldots, x_{n}\right) & =\frac{1}{\left(\sqrt{2 \pi \sigma^{2}}\right)^{n}} \exp \left\{-\frac{1}{2 \sigma^{2}}\left(\sum_{i=1}^{n}\left(x_{i}-\bar{x}\right)^{2}+n(\bar{x}-\mu)^{2}\right)\right\} \\
& =\frac{1}{\left(\sqrt{2 \pi \sigma^{2}}\right)^{n}} \exp \left\{-\frac{1}{2 \sigma^{2}}\left(n s^{2}+n(\bar{x}-\mu)^{2}\right)\right\} \\
& =g_{\mu, \sigma^{2}}\left(\bar{x}, s^{2}\right) \cdot 1
\end{aligned}
$$

Así, vemos que el estadístico $\left(\bar{X}, s^{2}\right)$ es suficiente para la estimación de $\left(\mu, \sigma^{2}\right)$.
Si suponemos conocido uno de los dos parámetros $\sigma^{2}$ o $\mu$, podemos obtener una factorización en la que se ve que $\sum_{i=1}^{n}\left(x_{i}-\mu\right)^{2}$ es suficiente para $\sigma^{2}$ (conocido $\mu$ ) o $\bar{x}$ es suficiente para $\mu$ (conocido $\sigma^{2}$ ).

En el ejemplo anterior se observa que el estadístico suficiente para un problema puede tener una dimensión superior a 1. En general, buscaremos el estadístico suficiente de menor dimensión posible, ya que a menor dimensión se elimina más información superflua. Si no es posible encontrarlo así, siempre podemos basarnos en el estadístico $T=\left(X_{1}, X_{2}, \ldots, X_{n}\right)$, que es suficiente pero de dimensión máxima y, por lo tanto, no aporta ninguna reducción al problema de información. Estas reflexiones llevan a enunciar el principio de suficiencia, que aconseja condensar al máximo la información relevante en un estadístico suficiente $T$ de la menor dimensión posible ("mínima") y seleccionar un estimador $T^{\prime}$ entre los estadísticos que sean función de la muestra a través de $T: T^{\prime}(\mathbf{X})=\varphi(T(\mathbf{X}))$.

#### 18.0.2. Propiedades de los estadísticos suficientes

Las siguientes propiedades se prueban de manera sencilla utilizando el teorema de factorización:

1. Si $T$ es un estadístico suficiente para $\theta$ y $\varphi$ es una función inyectiva (o monótona diferenciable), entonces $T_{1}=\varphi(T)$ también es suficiente para $\theta$.

Exemple 2.4.6 En la familia de la Poisson hemos visto que $\sum_{i=1}^{n} X_{i}$ es suficiente para $\lambda$. Entonces $\bar{X}=\varphi\left(\sum_{i=1}^{n} X_{i}\right)$, donde $\varphi(z)=(1 / n) z$ es inyectiva, es suficiente para $\lambda$.
2. Si $T$ es un estadístico suficiente para $\theta$ y $\varphi$ es una función paramétrica monótona diferenciable, entonces $\varphi(T)$ también es suficiente para $\varphi(\theta)$.
3. Si $T_{1}, T_{2}$ son dos estadísticos suficientes para $\theta$, entonces $T_{1}$ es función de $T_{2}$.

## 19. Capítol 3

## 20. MÉTODOS DE OBTENCIÓN DE ESTIMADORES

En el capítulo anterior hemos analizado el problema de la estimación puntual desde el punto de vista de, dado un estimador, ver ?qué tan bueno es? para estimar un parámetro.
Otra cuestión que nos podemos plantear, de hecho la primera cuestión que hay que plantearse en la práctica, es cómo obtener un estimador ?razonablemente bueno? de un parámetro. De hecho, desde el punto de vista práctico parece razonable empezar por ver cómo se obtiene un estimador y, una vez obtenido, analizar ?cuán bueno resulta?.
Existen muchos métodos para obtener estimadores, cada uno de los cuales puede llevarnos a unos resultados de diferente calidad.
Los principales métodos de estimación son:

1. Método de los momentos
2. Método de la máxima verosimilitud
3. Método de Bayes
4. Otros métodos

### 20.1. El método de los momentos

Este método fue introducido por K. Pearson a finales del siglo XIX y es el principio en que nos basamos cuando hacemos una estimación de la media o de la varianza poblacional a partir de la media o la varianza muestrales.
La idea del método de los momentos es bastante intuitiva. Si lo que queremos estimar (uno o varios parámetros) es una función de los momentos
poblacionales, entonces una estimación razonable puede consistir en tomar como estimador la misma función en la que los momentos poblacionales han sido sustituidos por los momentos muestrales.
Dado que estos últimos son estimadores consistentes de los momentos poblacionales, en condiciones bastante generales se puede garantizar que los estimadores obtenidos serán estimadores consistentes para las funciones de los momentos poblacionales estimadas.
Algunos ejemplos típicos de estimadores basados en el método de los momentos son:

$$
\widehat{\mu}=\bar{X}_{n} \quad \widehat{\sigma}=\sqrt{S^{2}} \quad \widehat{\sigma^{2}}=S^{2}
$$

Sea un modelo estadístico, $\left\{X \sim F_{\theta}: \theta \in \Theta\right\}$, y $X_{1}, X_{2}, \ldots, X_{n}$ una muestra aleatoria simple de $X$. Sean $m_{1}, m_{2}, ?, m_{k}$ los momentos poblacionales de orden $1,2, ?, k$ de $X$, que suponemos que existen,

$$
m_{k}=E\left(X^{k}\right)
$$

y $a_{1}, a_{2}, ?, a_{k}$ los momentos muestrales respectivos

$$
a_{k}\left(X_{1}, X_{2}, \ldots, X_{n}\right)=\frac{1}{n} \sum_{i=1}^{n} X_{i}^{k}
$$

Suponemos que estamos interesados en estimar:

$$
\theta=h\left(m_{1}, m_{2}, \ldots, m_{p}\right),
$$

donde $h$ es una función conocida.
Definició 3.1 El método de los momentos consiste en estimar $\theta$ por el estadístico

$$
T(\mathbf{X})=h\left(a_{1}, a_{2}, \ldots, a_{p}\right)
$$

## 21. Observaciones

- El método se extiende de forma sencilla a la estimación de momentos conjuntos. Podemos usar $\frac{1}{n} \sum_{i=1}^{n} X_{i} Y_{i}$ para estimar $E(X Y)$, etc.
- Por la ley débil de los grandes números,

$$
a_{k}\left(X_{1}, X_{2}, \ldots, X_{n}\right)=\frac{1}{n} \sum_{i=1}^{n} X_{i}^{k} \xrightarrow{P} E\left(X^{k}\right),
$$

de modo que si lo que queremos es estimar los momentos muestrales, el método garantiza que los estimadores son consistentes y sin sesgo.

En este caso, además, los estimadores son asintóticamente normales. Si lo que se desea estimar es una función $h$ continua de los momentos, entonces el método garantiza que el estimador $T(\mathbf{X})$ es consistente y, bajo ciertas condiciones de regularidad, también es asintóticamente normal.

Exemple 3.1.1 Sea $X \sim \Gamma(p, \alpha)$. Queremos estimar $p$ y $\alpha$. En lugar de conocer la función $h\left(\theta_{1}, \theta_{2}\right)$ sabemos que:

$$
\begin{aligned}
m_{1} & =\frac{p}{\alpha}=E(X) \\
m_{2} & =\frac{p(p+1)}{\alpha^{2}}=E\left(X^{2}\right) \\
& =V(X)+[E(X)]^{2}=\frac{p}{\alpha^{2}}+\left(\frac{p}{\alpha}\right)^{2}=\frac{p^{2}+p}{\alpha^{2}}=
\end{aligned}
$$

De modo que podemos obtener las funciones deseadas ?aislando? p y $\alpha$ como funciones de $m_{1}$ y $m_{2}$ :

$$
\begin{aligned}
\alpha^{2} & =\frac{p^{2}}{m_{1}^{2}} \\
\alpha^{2} & =\frac{p(p+1)}{m_{2}}
\end{aligned}
$$

Procediendo por igualación:

$$
\begin{aligned}
& \frac{p^{2}}{m_{1}^{2}}=\frac{p(p+1)}{m_{2}} \\
& \frac{p}{m_{1}}=\frac{p+1}{m_{2}} \\
& p m_{2}=p m_{1}^{2}+m_{1}^{2} \\
& p\left(m_{2}-m_{1}^{2}\right)=m_{1}^{2} \\
& p=\frac{m_{1}^{2}}{m_{2}-m_{1}^{2}} \\
& \alpha=\frac{m_{1}^{2}}{m_{2}-m_{1}^{2}} \\
& m_{1}
\end{aligned} \frac{m_{1}}{m_{2}-m_{1}^{2}} .
$$

Los estimadores por el método de los momentos se obtendrán ahora sustituyendo $p$ y $\alpha$ por $\hat{p}$ y $\hat{\alpha}$ en la expresión anterior, es decir:

$$
\widehat{p}=\frac{a_{1}^{2}}{a_{2}-a_{1}^{2}}
$$

Hacemos lo mismo para el parámetro $\alpha$ :

$$
\widehat{\alpha}=\frac{a_{1}}{a_{2}-a_{1}^{2}}
$$

### 21.1. El método del máximo de verosimilitud

#### 21.1.1. Introducción

El método de la máxima verosimilitud, introducido por Fisher, es un método de estimación que se basa en la función de verosimilitud, presentada en el capítulo anterior. Básicamente consiste en tomar como estimadores de los parámetros aquellos valores que hagan más probable observar precisamente lo que se ha observado, es decir, que hagan que la muestra observada resulte más verosímil.

Exemple 3.2.1 Tomemos 5 papeles. En cada uno de ellos ponemos o bien un ?+? o bien un ?-?, sin que se sepa qué hay en cada papel, y los guardamos en una bolsa. Nuestro objetivo es estimar el número de papeles con el signo ?? escrito. Extraemos tres papeles, devolviéndolos a la bolsa después de cada extracción, y observamos que ha salido lo siguiente: ?++-?. Los valores posibles para la probabilidad de ?-?, llamémosla p, son:

| En la bolsa hay | $p$ |
| :---: | :---: |
| $4 ?+$ ?, 1 ?-? | 0,2 |
| $3 ?+$ ?, 2 ?-? | 0,4 |
| $2 ?+$ ?, 3 ?-? | 0,6 |
| $1 ?+$ ?, 4 ?-? | 0,8 |

Supongamos que la variable $X$ mide el número de ?-? en tres extracciones consecutivas y que, por tanto, sigue una distribución binomial:

$$
X \sim B(3, p(?-?))
$$

La probabilidad de sacar un ?-? es:

$$
P_{p}[X=1]=\binom{3}{1} \cdot p^{1}(1-p)^{2}
$$

Para cada uno de los valores de p, las probabilidades quedan asi:

| $p$ | $P_{p}[X=1]$ |
| :---: | :---: |
| 0.2 | $3 \cdot 0.2 \cdot 0.8^{2}=0.384$ |
| 0.4 | $3 \cdot 0.4 \cdot 0.6^{2}=0.432$ |
| 0.6 | $3 \cdot 0.6 \cdot 0.4^{2}=0.288$ |
| 0.8 | $3 \cdot 0.8 \cdot 0.2^{2}=0.096$ |

El valor de p que da una probabilidad mayor a la muestra, es decir, que la hace más verosímil, es $p=0.4$. El método del máximo de verosimilitud consiste precisamente en tomar este valor como estimación de $p$.

#### 21.1.2. La función de verosimilitud

Una vez introducido el método con un ejemplo, podemos pasar a definirlo con mayor precisión. Para ello, comenzaremos con el concepto de función de verosimilitud.
En el capítulo anterior presentamos la función de verosimilitud como la función que resulta de considerar que, en la función de probabilidad de la muestra, el parámetro es variable y la muestra queda fija. Es decir:

$$
\underbrace{f\left(x_{1}, x_{2}, \ldots, x_{n} ; \theta\right)}_{\mathbf{x} \text { variable, } \theta \text { fijo }} \longrightarrow \underbrace{L\left(\theta ; x_{1}, x_{2}, \ldots, x_{n}\right)}_{\mathbf{x} \text { fija, } \theta \text { variable }}
$$

Esta definición es básicamente correcta. En el caso de las variables discretas, donde $f\left(x_{1}, x_{2}, \ldots, x_{n} ; \theta\right)$ representa la probabilidad de la muestra, fijado $\theta$, resulta intuitivamente claro decir que la verosimilitud representa la ?probabilidad de la muestra para cada valor del parámetro?.
Refiriéndonos al ejemplo introductorio, resulta sencillo ver que se trata de ?dos puntos de vista? sobre la misma función. Fijado un valor del parámetro, por ejemplo, 0.4 , podemos considerar la probabilidad de diversas muestras posibles, como $x=0, x=1, \ldots$, hasta $x=3$ :

$$
\begin{aligned}
f\left(x_{1}, x_{2}, \ldots, x_{n} ; \theta\right) & =P_{0.4}[X=x], x=0,1, \ldots, 3 \\
& =\binom{3}{x} \cdot 0.4^{x}(0.6)^{3-x} .
\end{aligned}
$$

Análogamente, fijada una muestra, por ejemplo, $x=1$, podemos considerar la probabilidad de esta para diversos valores del parámetro, $p=0,0.2, \ldots, 1$.

$$
\begin{aligned}
L\left(x_{1}, x_{2}, \ldots, x_{n} ; \theta\right) & =P_{p}[X=1], x=0,0.2,0.4, \ldots, 1 \\
& =3 \cdot p(1-p)^{2} .
\end{aligned}
$$

En el caso de las distribuciones absolutamente continuas, el significado de la función de verosimilitud ya no es intuitivamente tan claro como en el caso de las discretas. En este caso, la función de densidad de la muestra ya no representa la probabilidad de esta como en el caso de las discretas. Algunos autores intentan solucionar esto explicando que existe una conocida aproximación en que la función de densidad es la probabilidad de un suceso ?infinitesimal?.
Lo que es importante en la función de verosimilitud, a la hora de hacer inferencias, es la parte que es función del parámetro. Esto hace que a menudo se considere que la expresión de la función de verosimilitud mantenga solo aquella parte de $f\left(x_{1}, x_{2}, \ldots, x_{n} ; \theta\right)$ que depende de $\theta$, ignorando la parte que dependa solo de la muestra. Es decir, si podemos factorizar $f\left(x_{1}, x_{2}, \ldots, x_{n} ; \theta\right)$ como

$$
f(\mathbf{x} ; \theta)=c(\mathbf{x}) \cdot g(\mathbf{x} ; \theta)
$$

podremos prescindir de la ?constante? $c(x)$ (constante porque no depende de $\theta$ ) al considerar la verosimilitud.

$$
L(\theta ; \mathbf{x})=g(\mathbf{x} ; \theta) \propto f(\mathbf{x} ; \theta)
$$

Esto implica que $L(\theta ; \mathbf{x})$ no tiene por qué integrar a 1 , como en el caso de las probabilidades, y que depende de las unidades de medida.

Exemple 3.2.2 Si $X$ es discreta, $X \sim \mathcal{P}(\lambda)$, y suponemos $n=1$ (muestras de tamaño 1), tenemos que la f.d.p. de la muestra es:

$$
P[x ; \lambda]=e^{-\lambda} \frac{\lambda^{x}}{x!}
$$

con $x=0,1, \ldots$ Ahora, si hemos observado $x=5$, la función de verosimilitud vale:

$$
L(\lambda ; 5)=e^{-\lambda} \lambda^{5}\left[\frac{1}{5!}\right]
$$

Como solo nos interesa la parte que es función de $\lambda$, podemos ignorar $\frac{1}{5!}$, es decir:

$$
L(\lambda ; 5)=e^{-\lambda} \lambda^{5} \propto P[\mathbf{x} ; \lambda] .
$$

Exemple 3.2.3 Si dada una muestra de tamaño 1, por ejemplo, $x=2$, de una ley de Poisson $\mathcal{P}(\lambda)$ queremos comparar sus verosimilitudes respecto de los valores del parámetro $\lambda=1.5$ o $\lambda=3$, lo que haremos será basarnos en la razón de verosimilitudes:

$$
\begin{aligned}
\Lambda(\mathbf{x}) & =\frac{L\left(\lambda_{1} ; x\right)}{L\left(\lambda_{2} ; x\right)}=\frac{L(1.5 ; 2)}{L(3 ; 2)} \\
& =\frac{e^{-1.5} 1.5^{2}\left[\frac{1}{2!}\right]}{e^{-3} 3^{2}\left[\frac{1}{2!}\right]}=\frac{e^{-1.5} 1.5^{2}}{e^{-3} 3^{2}}=\frac{0.5020}{0.4481}=1.12 .
\end{aligned}
$$

Como se observa, al basarnos en la razón de verosimilitudes, la parte correspondiente solo a la muestra no se toma en cuenta. La razón de verosimilitudes sugiere que el valor $\lambda=1.5$ hace la muestra más verosímil.

#### 21.1.3. El método del máximo de verosimilitud

Si partimos de las dos ideas que hemos visto en la introducción:

- Escoger como estimación el valor que maximice la probabilidad de la muestra observada.
- La verosimilitud de la muestra es una aproximación a la probabilidad de esta como función del valor del parámetro.

Una forma razonable de definir el EMV es entonces como aquel que maximice la verosimilitud.

Definició 3.2 Un estimador $T: \Omega \longrightarrow \Theta$ es un estimador del máximo de verosimilitud para el parámetro $\theta$ si cumple:

$$
L(T(\mathbf{x}) ; \mathbf{x})=\sup _{\theta \in \Theta} L(\theta ; \mathbf{x})
$$

Como suele ocurrir en problemas de maximización, este valor ni existe necesariamente ni tiene por qué ser único. Ahora bien, bajo ciertas condiciones (las habituales para los problemas de máximos y mínimos) el problema se podrá reducir a buscar un máximo para la función de verosimilitud.

Exemple 3.2.4 Supongamos que $x_{1}, \ldots, x_{n}$ es una muestra de una población de Bernouilli, $X \sim B e(p)$, donde queremos estimar p. La función de masa de la probabilidad de $X$ es:

$$
P\left[X=x_{i}\right]=P\left(x_{i} ; p\right)=p^{x_{i}}(1-p)^{1-x_{i}} \text { donde } x_{i} \in\{0,1\} ; i=1, \ldots, n
$$

La función de verosimilitud es:

$$
L(p ; \mathbf{x})=\prod_{i=1}^{n} p^{x_{i}}(1-p)^{1-x_{i}}=p^{\sum_{i=1}^{n} x_{i}}(1-p)^{\sum_{i=1}^{n}\left(1-x_{i}\right)}
$$

Debemos buscar el máximo de $L(p ; \mathbf{x})$. En este caso, como en otros, es más sencillo buscar el máximo de su logaritmo, que, dado que es una función monótona, es el mismo que el máximo de $L$

$$
\ln L(p ; x)=\left(\sum_{i=1}^{n} x_{i}\right) \cdot \ln p+\left(n-\sum_{i=1}^{n} x_{i}\right) \cdot \ln (1-p)
$$

Derivamos respecto a p:

$$
\frac{\partial \ln L(p ; x)}{\partial p}=\frac{\sum_{i=1}^{n} x_{i}}{p}-\frac{n-\sum_{i=1}^{n} x_{i}}{1-p}
$$

e igualamos a cero la derivada, planteando lo que se denomina la ecuación de verosimilitud, cuyas soluciones nos conducirán eventualmente al estimador del máximo de verosimilitud.

$$
\frac{\sum_{i=1}^{n} x_{i}-n \hat{p}}{\hat{p}(1-\hat{p})}=0 \Rightarrow \hat{p}=\frac{\sum_{i=1}^{n} x_{i}}{n}
$$

Si la segunda derivada es negativa en $\widehat{p}$ entonces será un máximo:

$$
\begin{aligned}
\frac{\partial^{2} \ln L(p ; x)}{\partial p^{2}} & =\frac{\partial}{\partial p}\left(\frac{\sum_{i=1}^{n} x_{i}-n p}{p(1-p)}\right)=\frac{-n[p(1-p)]-\left(\sum_{i=1}^{n} x_{i}-n p\right) \cdot(1-2 p)}{p^{2}\left(1-p^{2}\right)}= \\
& =\frac{-n p+n p^{2}-\sum_{i=1}^{n} x_{i}-n p-2 p \sum_{i=1}^{n} x_{i}-2 n p^{2}}{p^{2}(1-p)^{2}}= \\
& =\frac{\left[\sum_{i=1}^{n} x_{i}(1+2 p)-n p^{2}\right]}{p^{2} \cdot(1-p)^{2}}
\end{aligned}
$$

que es negativa cuando $p=\hat{p}$, de forma que $\hat{p}$ es efectivamente un máximo.
El método analítico expuesto en el ejemplo anterior, consistente en el cálculo de un extremo de una función, no se puede aplicar en todas las situaciones. En estos casos, una alternativa puede ser estudiar directamente la función de verosimilitud. Veamos un ejemplo:

Exemple 3.2.5 Sea $X_{1}, \ldots, X_{n} \stackrel{i i d}{\sim} X \sim U(0, \theta) \quad \theta>0$ desconocido. Sabemos que:

$$
f(x ; \theta)=\left\{\begin{array}{c}
\frac{1}{\theta} \text { si } 0<\min \left\{x_{i}\right\} \leq \max \left\{x_{i}\right\} \leq \theta \\
0 \quad \text { en caso contrario }
\end{array}\right\}
$$

La derivada respecto a $\theta$ es $-\frac{n}{\theta^{n-1}}$, que se anula cuando $\theta \underset{n \rightarrow \infty}{\longrightarrow} \infty$ que lleva a una solución sin sentido de la ecuación de verosimilitud. Una inspección de la gráfica de la función de verosimilitud revela que el EMV, en este caso,

Figura 3.1: Función de verosimilitud para una distribución uniforme
es $\max \left\{X_{i}, \ldots, X_{n}\right\}$. Efectivamente, consideremos cualquier otro valor $\theta^{*}$ diferente del máximo:

$$
\begin{aligned}
& \text { Si } \theta^{*}>X_{(n)} \Rightarrow \frac{1}{\left(\theta^{*}\right)^{n}}<\frac{1}{\left(X_{n}\right)^{n}}, \\
& \text { Si } \theta^{*}<X_{(n)} \Rightarrow L\left(\theta^{*} ; \mathbf{x}\right)=0
\end{aligned}
$$

ya que si un estimador toma un valor inferior al máximo de la muestra habrá algún valor muestral, $x_{i}$ para el cual se verificará que $\theta^{*}<x_{i}$, lo que hace la muestra inverosímil, y por tanto el estimador no es admisible.
A la vista de lo anterior, deducimos que el valor que maximiza $L(\theta ; \mathbf{x})$ es el máximo de la muestra.

Exemple 3.2.6 El método del máximo de verosimilitud se extiende de forma inmediata a los parámetros $K$-dimensionales. Consideremos el caso de la
ley normal $X \sim N\left(\mu, \sigma^{2}\right)$. Aquí el parámetro $\theta$ es bidimensional, es decir: $\theta=\left(\mu, \sigma^{2}\right) \in \Theta=\mathbb{R} \times \mathbb{R}^{+}$

1. La función de verosimilitud de una muestra de tamaño $n$ es:

$$
L\left(\left(\mu, \sigma^{2}\right) ; \mathbf{x}\right)=\prod_{i=1}^{n} \frac{1}{\sqrt{2 \pi \sigma^{2}}} e^{-\frac{\left(x_{i}-\mu\right)^{2}}{2 \sigma^{2}}}=\frac{1}{(2 \pi)^{n / 2}\left(\sigma^{2}(n / 2\right.} e^{-\frac{\sum_{i=1}^{n}\left(x_{i}-\mu\right)^{2}}{2 \sigma^{2}}}
$$

2. Sacando logaritmos

$$
\log L\left(\left(\mu, \sigma^{2}\right) ; \mathbf{x}\right)=-\frac{n}{2} \log (2 \pi)-\frac{n}{2} \log \left(\sigma^{2}\right)-\frac{\sum_{i=1}^{n}\left(x_{i}-\mu\right)^{2}}{2 \sigma^{2}}
$$

3. La derivada de $L()$ es la matriz de derivadas:

$$
D \log L\left(\left(\mu, \sigma^{2}\right) ; \mathbf{x}\right)=\binom{\frac{\partial \log L\left(\left(\mu, \sigma^{2}\right) ; \mathbf{x}\right)}{\partial \mu}}{\frac{\partial \log L\left(\left(\mu, \sigma^{2}\right) ; \mathbf{x}\right)}{\partial \sigma^{2}}}=\left\{\begin{array}{c}
\frac{\sum_{i=1}^{n}\left(x_{i}-\mu\right)}{\sigma^{2}} \\
\frac{\sum_{i=1}^{n}\left(x_{i}-\mu\right)^{2}}{2 \sigma^{4}}-\frac{n}{2 \sigma^{2}}
\end{array}\right.
$$

4. Planteando y resolviendo la ecuación de verosimilitud tenemos:

$$
D \log L\left(\left(\hat{\mu}, \hat{\sigma}^{2}\right) ; \mathbf{x}\right)=\left\{\begin{array}{c}
\frac{\sum_{i=1}^{n}\left(x_{i}-\hat{\mu}\right)}{\hat{\sigma}^{2}}=0 \\
\frac{\sum_{i=1}^{n}\left(x_{i}-\hat{\mu}\right)^{2}}{2 \hat{\sigma}^{4}}=\frac{n}{2 \hat{\sigma}^{2}}
\end{array}\right.
$$

de donde las raíces de la ecuación de verosimilitud son:

$$
\hat{m} u=\bar{x}, \quad \hat{\sigma}^{2}=\frac{\sum_{i=1}^{n}\left(x_{i}-\bar{x}\right)^{2}}{n}=s^{2} .
$$

5. Para decidir si las raíces de la ecuación de verosimilitud corresponden a un máximo, analizamos la matriz de derivadas segundas, denominada Hessiana.

$$
H=\left(\begin{array}{cc}
\frac{\partial^{2} z}{\partial x^{2}} & \frac{\partial^{2} z}{\partial x \partial y} \\
\frac{\partial^{2} z}{\partial y \partial x} & \frac{\partial^{2} z}{\partial y^{2}}
\end{array}\right)
$$

Una condición suficiente para que un punto $\left(x_{0}, y_{0}\right)$ sea un máximo es que el determinante de $H$ sea positivo y el menor en la posición ?11? negativo, es decir:
$S i|H|>\left.0 y \frac{\partial^{2} z}{\partial x^{2}}\right|_{\left(x_{0}, y_{0}\right)}<0 \Longrightarrow$ Hay un máximo relativo en $\left(x_{0}, y_{0}\right)$.
Si evaluamos el Hessiano en el punto $\left(\bar{x}, s^{2}\right)$ tenemos:

$$
H=\left(\begin{array}{cc}
-\frac{n}{s^{2}} & 0 \\
0 & -\frac{n}{2 s^{4}}
\end{array}\right) .
$$

Las condiciones de extremo que hemos dado más arriba se verifican: $H_{11}<0 y|H|>0$, de manera que podemos concluir que el estimador del máximo de verosimilitud de $\left(\mu, \sigma^{2}\right)$ es, efectivamente, $\left(\bar{x}, s^{2}\right)$.

## 22. Bibliografia

[1] Canavos, George C. (1988). Probabilidad y Estadistica. Aplicaciones y Metodos. McGraw-Hill/Interamericana. Mexico.
[2] Cuadras, C.M. (2000). Problemas de probabilidades y estadística. Vol. 2: Inferencia estadística. EUB. Economía y Empresa. Barcelona.
[3] De Groot, M. (1988). Probabilidad y Estadística. Addison-Wesley. .
[4] Casella, G. Berger, M (1990). Statistical inference. Duxbury Press. .
[5] Dudewicz, Edward J., Mishra, S. (1989). Modern mathematical statistics. John Wiley \& Sons, Wiley series in probability and statistics. New York.
[6] Fortiana, J., Nualart, D. (1999). Estadística. Publicacions de la Universitat de Barcelona. Barcelona.
[7] Lehman, E. (1986). Testing Statistical Hypothesis. John Wiley \& Sons, Wiley series in probability and statistics. New York.
[8] Martínez A., Rodriguez, C., Gutiérrez, R (1993). Inferencia Estadistica, un Enfoque Clasico. Ediciones Pirámide, Economia y Administración de Empresas. Madrid.
[9] Peña, Daniel (1987). Estadística modelos y metodos 1. Fundamentos. Alianza editorial. Madrid.
[10] Rohatgi, V. K. (1976). An Introduction to Probability Theory and Mathematical Statistics. John Wiley \& Sons, Wiley Series in Probability. New York.
[11] Ruiz-Maya, L., Martín Pliego, J. (1995). Estadística II: Inferencia. Editorial AC. Colección Plan Nuevo. Madrid.
[12] Sanz, Marta (1999). Probabilitats. Edicions de la UNiversitat de Barcelona. Barcelona.
[13] Vélez Ibarrola, Ricardo, Garcia Perez, Alfonso (1993). Principios de Inferencia estadística. Editorial UNED. Madrid.


[^0]:    ${ }^{1}$ Ver: Métodos matemáticos de la estadística, de H. Cramer. Ed. Aguilar

[^1]:    ${ }^{1}$ Si $\operatorname{var}(X)$ existe, entonces $\forall \varepsilon>0$ se verifica $P(|X-E(X)|>\varepsilon) \leq \frac{\operatorname{var}(X)}{\varepsilon^{2}}$

[^2]:    ${ }^{2}$ UMVUE, en inglés

