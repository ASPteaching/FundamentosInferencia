# Revisión editorial de cambios — Capítulo 1: Probabilidad

Base de comparación: versión publicada de `main`, commit `c5e2858` (2026-09-13).
Este documento compara únicamente `01-probabilidad.Rmd` y omite cambios de
espaciado o tipografía sin efecto docente.

## Resumen

- **Contenido añadido:** cinco cajas pedagógicas, un ejemplo integrador con
  dado, un ejemplo numérico de Bayes, una tabla de decisión combinatoria, un
  chunk R reproducible y una comparación de prevalencias en el caso diagnóstico.
- **Contenido reformulado:** definición de espacio probabilístico, operaciones
  con sucesos, condicionada, independencia, Bayes, experimentos múltiples y
  el caso diagnóstico.
- **Contenido eliminado:** no se ha eliminado contenido pedagógico. Se han
  sustituido enunciados formalmente incorrectos o incompletos por formulaciones
  correctas, conservando su función explicativa.
- **Contenido simplemente corregido:** notación ($P$, $\mid$, $A^c$,
  $\varnothing$), erratas visibles y fórmulas de combinatoria.

### Introducción: frecuencia relativa

**ANTES**

> En los fenómenos aleatorios, al hacer muchas veces la experiencia, la
> frecuencia relativa de cualquier elemento del conjunto de resultados debe
> aproximarse siempre hacia un mismo valor.

**DESPUÉS**

> En los fenómenos aleatorios, al hacer muchas veces una misma experiencia en
> condiciones independientes e idénticamente distribuidas, la frecuencia
> relativa de un suceso fijo se aproxima a su probabilidad. Esta es una
> propiedad asintótica, no una definición general de probabilidad.

**MOTIVO**

Corrección conceptual y precisión matemática: evita atribuir el mismo límite a
todos los resultados e incorpora las hipótesis de repetición pertinentes.

### Sucesos y conjuntos: notación básica

**ANTES**

> Al conjunto Ø ( conjunto sin elementos), se le denomina suceso imposible.
> Al complementario del conjunto $\mathrm{A}(\mathrm{A}^{\mathrm{c}})$, se le
> denomina suceso contrario o complementario de $A$.

**DESPUÉS**

> Al conjunto $\varnothing$ (conjunto sin elementos), se le denomina suceso
> imposible. Al complementario del conjunto $A$, que se anota $A^c$, se le
> denomina suceso contrario o complementario de $A$.

**MOTIVO**

Cambio de notación: adopta las convenciones anunciadas para todo el capítulo.

### Función de probabilidad y sigma-álgebra

**ANTES**

> La función de probabilidad será, pues, una aplicación entre el conjunto de
> resultados y el conjunto de números reales, que asignará a cada suceso la
> probabilidad de que se verifique.

**DESPUÉS**

> Formalmente, en un espacio probabilizable $(\Omega,\mathcal A)$ es una
> aplicación $P:\mathcal A\longrightarrow[0,1]$. Aquí $\mathcal A$ es la
> colección de sucesos a los que se puede asignar probabilidad. Formalmente es
> una *sigma-álgebra*: contiene $\Omega$ y es estable frente a complementos y
> uniones numerables. En espacios finitos suele tomarse
> $\mathcal A=\mathcal P(\Omega)$.

**MOTIVO**

Corrección conceptual: el dominio de la probabilidad pasa de $\Omega$ a la
colección de sucesos medibles, con formalismo moderado.

### Caja pedagógica: espacio probabilístico

**ANTES**

> No había caja pedagógica en este punto.

**DESPUÉS**

> **Idea clave.** Un modelo probabilístico distingue los resultados posibles
> ($\Omega$), los sucesos sobre los que tiene sentido preguntar ($\mathcal A$)
> y la regla que les asigna probabilidades ($P$).

**MOTIVO**

Mejora pedagógica: fija las tres piezas del modelo sin añadir teoría de medida.

### Sucesos elementales y observables

**ANTES**

> Los sucesos elementales son los resultados individuales [...] Sin embargo,
> no todos los sucesos elementales son necesariamente observables. Un suceso
> observable es un subconjunto de estos sucesos elementales [...].

**DESPUÉS**

> Conviene distinguir los **resultados elementales**, que son los elementos de
> $\Omega$, de los **sucesos medibles**, que son los elementos de
> $\mathcal A$. [...] En el dado pintado con tres colores [...] la
> sigma-álgebra generada por ellos contiene $\varnothing$, los tres colores,
> sus uniones y $\Omega$; no contiene necesariamente el suceso «sale par».

**MOTIVO**

Corrección conceptual y precisión matemática: separa resultados, sucesos y
observabilidad utilizando el ejemplo existente del dado pintado.

### Unión e inclusión-exclusión

**ANTES**

> $P(\bigcup_{i=1}^{k} A_i)=\sum P(A_i)-\sum_{i<j}P(A_i\cap A_j)+\sum
> P(A_i\cap A_j\cap A_k)+\ldots$

**DESPUÉS**

> $P(\bigcup_{i=1}^{k} A_i)=\sum_{r=1}^{k}(-1)^{r+1}
> \sum_{1\leq i_1<\cdots<i_r\leq k}P(A_{i_1}\cap\cdots\cap A_{i_r})$.

> **Ejemplo.** Al lanzar un dado, sea $A=\{2,4,6\}$ y
> $B=\{4,5,6\}$. Entonces $A^c=\{1,3,5\}$, $A\cap B=\{4,6\}$ y
> $P(A\cup B)=4/6=3/6+3/6-2/6$.

**MOTIVO**

Corrección conceptual de la fórmula y ejemplo añadido. La caja `Ejemplo`
integra complemento, unión, intersección e inclusión-exclusión.

### Regla del producto y Bonferroni

**ANTES**

> No existe una expresión cerrada única para la probabilidad de que ocurran
> dos o más sucesos a la vez [...]. Lo que sí existe es una cota [...]
> $P(\bigcap A_i)\geq1-\sum P(\bar A_i)$.

**DESPUÉS**

> Para $P(B)>0$, la regla del producto da siempre
> $P(A\cap B)=P(A\mid B)P(B)$. [...] Además, la desigualdad de Bonferroni
> proporciona una cota inferior: $P(\bigcap A_i)\geq1-\sum P(A_i^c)$.
> El lado derecho puede ser negativo; la cota útil puede truncarse en cero.

**MOTIVO**

Corrección conceptual: presenta primero la identidad general y denomina e
interpreta correctamente la cota conservada.

### Probabilidad condicionada

**ANTES**

> Anotaremos $\mathrm P(\mathrm A/\mathrm B)$ [...]
> $P(A/B)=\frac{P(A\cap B)}{P(B)}$.

**DESPUÉS**

> Si $A,B\in\mathcal A$ y $P(B)>0$, definimos
> $P(A\mid B)=\frac{P(A\cap B)}{P(B)}$.

> **Atención.** La condición $P(B)>0$ es esencial: no se define
> $P(A\mid B)$ dividiendo por un suceso condicionante de probabilidad cero.

**MOTIVO**

Cambio de notación y precisión matemática. Se conserva el widget existente,
pero el concepto ya queda explicado sin depender de él.

### Independencia

**ANTES**

> Sean A y B dos sucesos con probabilidad mayor que 0. Si
> $P(A/B)=P(A)$ [...] diremos que son sucesos independientes.

**DESPUÉS**

> Dos sucesos $A$ y $B$ son **independientes** cuando
> $P(A\cap B)=P(A)P(B)$. Cuando $P(B)>0$, esto equivale a
> $P(A\mid B)=P(A)$. [...] La dependencia probabilística no implica por sí
> misma una relación causal.

**MOTIVO**

Corrección conceptual: usa una definición simétrica que también cubre sucesos
de probabilidad cero y separa dependencia de causalidad.

### Probabilidad total y Bayes

**ANTES**

> Sea $\Omega$ el conjunto total formado por una partición [...]
> $P(A)=\sum P(A/H_i)P(H_i)$.

> $P(H_i/A)=\frac{P(A/H_i)P(H_i)}{\sum P(A/H_i)P(H_i)}$.

**DESPUÉS**

> Sea $\{H_1,\ldots,H_n\}$ una partición de $\Omega$: sus sucesos son dos a
> dos disjuntos, su unión es $\Omega$ y $P(H_i)>0$.
> $P(A)=\sum_{i=1}^{n}P(A\mid H_i)P(H_i)$.

> Para la misma partición, si $P(A)>0$,
> $P(H_i\mid A)=\frac{P(A\mid H_i)P(H_i)}{P(A)}$
> $=\frac{P(A\mid H_i)P(H_i)}{\sum_jP(A\mid H_j)P(H_j)}$.

**MOTIVO**

Precisión matemática: explicita la partición, las probabilidades positivas y
la relación entre producto, total y Bayes.

### Nuevo ejemplo de Bayes

**ANTES**

> No había ejemplo numérico entre los teoremas y el caso diagnóstico.

**DESPUÉS**

> Una urna procede de $H_1$ con probabilidad $0,6$ o de $H_2$ con $0,4$.
> [...] $P(\text{roja})=0,32$ y
> $P(H_2\mid\text{roja})=0,625$: se actualiza la probabilidad a priori
> $0,4$ a la probabilidad a posteriori $0,625$.

**MOTIVO**

Ejemplo añadido: ofrece un cálculo autocontenido inmediatamente después de la
fórmula, sin desarrollar un marco bayesiano extenso.

### Experimentos múltiples

**ANTES**

> Si $P_1$ y $P_2$ son [...] ¿es posible calcular probabilidades [...]?
> Experiencias independientes: cuando el resultado de una no influya en la
> otra. [...] Caso dependiente: $P(A\times B)=P_1(A)P_2(B/A)$.

**DESPUÉS**

> El producto $\Omega_1\times\Omega_2$ describe el **espacio producto**, pero
> todavía no especifica su distribución conjunta $P$. De esta se obtienen las
> distribuciones marginales $P_1$ y $P_2$; las marginales no determinan en
> general la distribución conjunta. Para sucesos $A\times B$,
> $P(A\times B)=P(B\mid A)P(A)$; en el caso independiente,
> $P(A\times B)=P_1(A)P_2(B)$.

**MOTIVO**

Corrección conceptual: distingue espacio, conjunta, marginales e
independencia; elimina la interpretación causal de «influir».

### Combinatoria

**ANTES**

> No se indicaban restricciones de $r$; se usaba $x$ en combinaciones;
> $\mathrm V_{10}^{3}=10.9 .8=720$; y
> $\mathrm{RP}_{6}^{3,2,1}=\frac{6!}{3!2!!}=60$.

**DESPUÉS**

> La regla de Laplace basada en recuentos solo es aplicable cuando los
> resultados elementales que se cuentan son equiprobables.

> | ¿Importa el orden? | ¿Se permite repetición? | Recuento |
> |:--|:--|:--|
> | Sí | No | Variaciones $V_n^r$ |
> | Sí | Sí | Variaciones con repetición $RV_n^r$ |
> | No | No | Combinaciones $C_n^r$ |

> Para $0\leq r\leq n$ [...] $C_n^r=\binom nr=\frac{n!}{r!(n-r)!}$.
> En permutaciones con repetición, $a+b+c+\cdots=n$ y
> $RP_6^{3,2,1}=\frac{6!}{3!\,2!\,1!}=60$.

**MOTIVO**

Corrección conceptual, precisión matemática y mejora pedagógica. Se mantienen
todos los ejemplos; se corrigen sus fórmulas y se añade una guía de decisión.

### Frecuencia relativa: ejemplo y simulación R

**ANTES**

> Como podréis comprobar [...] a la larga la frecuencia relativa converge
> hacia el valor que habéis fijado. [...] a mayor número de lanzamientos,
> más improbable es que $f_r$ se aleje mucho de $p(A)$.

**DESPUÉS**

> Para un suceso fijo bajo repeticiones i.i.d., la ley de los grandes números
> expresa que la frecuencia relativa converge en probabilidad hacia su
> probabilidad. No implica una aproximación monótona en una trayectoria concreta.

> **En R.** [...]
> ```r
> set.seed(20260919)
> n <- 1000; x <- rbinom(n, 1, 0.5)
> fr <- cumsum(x) / seq_len(n)
> plot(seq_len(n), fr, type = "l", ylim = c(0, 1),
>      xlab = "Número de repeticiones", ylab = "Frecuencia relativa acumulada")
> abline(h = 0.5, col = "firebrick", lty = 2)
> ```

**MOTIVO**

Precisión matemática y ejemplo añadido: el enlace externo permanece y se suma
una simulación reproducible que hace visibles las fluctuaciones finitas.

### Caso diagnóstico: notación y medidas

**ANTES**

> Para decidir la presencia(E) o ausencia (A) [...]
> $P(+/E)$, $P(+/A)$, $P(-/E)$, $P(-/A)$ y $P(E)$ [...].

**DESPUÉS**

> Para decidir la presencia $D$ o ausencia $D^c$ [...] Las cifras que siguen
> son **datos didácticos** [...].
> $P(+\mid D)$, $P(+\mid D^c)$, $P(-\mid D)$, $P(-\mid D^c)$ y $P(D)$.
> No son cinco cantidades independientes: $P(+\mid D^c)=1-$ especificidad y
> $P(-\mid D)=1-$ sensibilidad.

> **Atención.** Sensibilidad y especificidad condicionan al estado de salud;
> VPP y VPN condicionan al resultado del test. [...] VPP y VPN cambian al
> cambiar la prevalencia.

**MOTIVO**

Corrección conceptual, cambio de notación y precisión docente: elimina la
colisión de la letra $A$ y aclara la relación entre las medidas.

### Caso diagnóstico: interpretación y prevalencia

**ANTES**

> Podemos afirmar que se trata de un test muy válido para decidir que no hay
> sordera en caso de que el resultado del test sea negativo. Sin embargo, el
> valor tan bajo de $P(E/+)$ no permite [...] diagnosticar la sordera.

**DESPUÉS**

> Con la prevalencia supuesta, un resultado negativo se asocia a un VPN muy
> alto. Con esa misma prevalencia, el VPP es bajo: un positivo por sí solo no
> confirma la sordera [...]. Si la prevalencia aumenta a $0,03$,
> $P(D\mid +)\approx0,378$. El VPP aumenta de forma notable únicamente por
> cambiar la prevalencia.

**MOTIVO**

Corrección conceptual y ejemplo añadido: la interpretación queda condicionada
a la prevalencia y se muestra explícitamente su efecto sobre el VPP.

## Ajustes posteriores a la revisión humana

La revisión humana posterior aplicó el criterio **«rigor adecuado al punto del
curso»**. Se añadió una introducción motivadora con los sucesos biomédicos $R$
y $V$, seguida de la transición al dado. Se simplificó la explicación de la
frecuencia relativa: ya no usa i.i.d. ni convergencia en probabilidad. También
se retiraron del cuerpo del capítulo $\mathcal A$, «sucesos medibles», cierre
por uniones numerables y sigma-álgebra generada; la sigma-álgebra se conserva
solo como una nota opcional. La caja `Idea clave` ahora resume $\Omega$,
sucesos y $P$ sin presentar una terna formal.
