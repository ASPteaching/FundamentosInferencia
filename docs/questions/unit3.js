window.questionData.banks["unit3.js"] = {
  "unit": "Unidad_3",
  "questions": [
    {
      "id": "DN-001",
      "topic": "binomial",
      "difficulty": "intermediate",
      "question": "Una moneda tiene P(cara)=3/4. En cinco lanzamientos independientes, ¿cuál es la probabilidad de obtener tres caras?",
      "options": [
        "0",
        "0.2637",
        "0.3672",
        "0.4219"
      ],
      "correct": "b",
      "explanation": "dbinom(3,5,0.75)=0.263671875."
    },
    {
      "id": "DN-002",
      "topic": "geométrica",
      "difficulty": "intermediate",
      "question": "Una moneda con P(cruz)=1/4 se lanza independientemente hasta la primera cruz. ¿Cuál es la probabilidad de que aparezca en el quinto lanzamiento?",
      "options": [
        "0.75",
        "0.1875",
        "0.25",
        "0.0791"
      ],
      "correct": "d",
      "explanation": "Hay cuatro fracasos antes del éxito: dgeom(4,0.25)=0.0791015625."
    },
    {
      "id": "DN-003",
      "topic": "binomial negativa",
      "difficulty": "intermediate",
      "question": "En lanzamientos independientes con P(cruz)=1/4 se espera hasta la segunda cruz. ¿Cuál es la probabilidad de haber obtenido exactamente tres caras al detenerse?",
      "options": [
        "0.1055",
        "0.1582",
        "0.5521",
        "0.9926"
      ],
      "correct": "a",
      "explanation": "dnbinom(3,size=2,prob=0.25)=0.10546875; el último lanzamiento es cruz."
    },
    {
      "id": "DN-004",
      "topic": "Poisson",
      "difficulty": "intermediate",
      "question": "Si X es Poisson y P(X=0)=0.25, ¿cuánto vale su parámetro lambda?",
      "options": [
        "0.7788",
        "4",
        "1.3863",
        "0.75"
      ],
      "correct": "c",
      "explanation": "exp(-lambda)=0.25, de donde lambda=-log(0.25)=1.386294."
    },
    {
      "id": "DN-005",
      "topic": "Poisson",
      "difficulty": "intermediate",
      "question": "Los recuentos de plantas en tres unidades de superficie son independientes, cada uno Poisson(1.4). ¿Cuál es la probabilidad de que el total sea mayor que cinco?",
      "options": [
        "0.0111",
        "0.2469",
        "0.1633",
        "0.9968"
      ],
      "correct": "b",
      "explanation": "La suma es Poisson(4.2): 1-ppois(5,4.2)=0.2468571."
    },
    {
      "id": "DN-006",
      "topic": "hipergeométrica",
      "difficulty": "intermediate",
      "question": "Se extraen al azar seis números sin reemplazo de 1,...,49. ¿Cuál es la probabilidad de obtener dos pares y cuatro impares?",
      "options": [
        "0.2497",
        "0.3333",
        "0.5102",
        "0.8672"
      ],
      "correct": "a",
      "explanation": "Hay 24 pares y 25 impares: dhyper(2,24,25,6)=0.2496743. La opción original 0.2597 es incorrecta."
    },
    {
      "id": "DN-007",
      "topic": "binomial",
      "difficulty": "intermediate",
      "question": "Cada persona seleccionada de forma independiente pertenece al grupo A con probabilidad 0.4. En cuatro personas, ¿cuál es la probabilidad de que al menos dos pertenezcan a A?",
      "options": [
        "0.8208",
        "0.3756",
        "0.3600",
        "0.5248"
      ],
      "correct": "d",
      "explanation": "1-pbinom(1,4,0.4)=0.5248. Solo interesa pertenecer o no a A."
    },
    {
      "id": "DN-008",
      "topic": "geométrica",
      "difficulty": "intermediate",
      "question": "Las personas de una cola pertenecen al grupo C con probabilidad 0.2, independientemente. ¿Cuál es la probabilidad de que la primera del grupo C ocupe el cuarto lugar?",
      "options": [
        "0.0016",
        "0.1024",
        "0.4096",
        "0.6723"
      ],
      "correct": "b",
      "explanation": "dgeom(3,0.2)=0.8^3*0.2=0.1024; se cuentan tres fracasos."
    },
    {
      "id": "DN-009",
      "topic": "Poisson",
      "difficulty": "intermediate",
      "question": "El número X de peces en una trampa es Poisson(2.2). Sabiendo que X>0, ¿cuál es P(X=3 dado X>0)?",
      "options": [
        "0.1966",
        "0.1108",
        "0.2211",
        "0.8892"
      ],
      "correct": "c",
      "explanation": "dpois(3,2.2)/(1-dpois(0,2.2))=0.2211419."
    },
    {
      "id": "DN-010",
      "topic": "binomial",
      "difficulty": "intermediate",
      "question": "Se modela la selección de cinco empleados como independiente, con probabilidad 2/3 de ser hombre. ¿Cuál es la probabilidad de que exactamente cuatro sean hombres?",
      "options": [
        "0.1897",
        "0.6666",
        "0.3292",
        "0.3333"
      ],
      "correct": "c",
      "explanation": "dbinom(4,5,2/3)=0.3292181; la opción original 0.3226 es errónea."
    },
    {
      "id": "DN-011",
      "topic": "geométrica",
      "difficulty": "intermediate",
      "question": "En una secuencia independiente de llegadas, P(mujer)=1/3. ¿Cuál es la probabilidad de observar tres hombres antes de la primera mujer?",
      "options": [
        "0.0988",
        "0.2180",
        "0.2500",
        "0.6660"
      ],
      "correct": "a",
      "explanation": "dgeom(3,1/3)=(2/3)^3/3=0.0987654."
    },
    {
      "id": "DN-012",
      "topic": "binomial negativa",
      "difficulty": "intermediate",
      "question": "En llegadas independientes con P(mujer)=1/3 se espera hasta la segunda mujer. ¿Cuál es la probabilidad de haber observado exactamente cuatro hombres?",
      "options": [
        "0.0010",
        "0.1110",
        "0.6420",
        "0.1097"
      ],
      "correct": "d",
      "explanation": "dnbinom(4,2,1/3)=0.1097394; redondeado a cuatro decimales, 0.1097."
    },
    {
      "id": "DN-013",
      "topic": "Poisson",
      "difficulty": "intermediate",
      "question": "El número de llamadas por minuto es Poisson(1.5). ¿Cuál es la probabilidad de recibir más de dos en un minuto?",
      "options": [
        "0.2230",
        "0.0410",
        "0.1912",
        "0.3350"
      ],
      "correct": "c",
      "explanation": "1-ppois(2,1.5)=0.1911532."
    },
    {
      "id": "DN-014",
      "topic": "Poisson",
      "difficulty": "intermediate",
      "question": "Seis recuentos independientes de plantas son Poisson(0.7). ¿Cuál es la probabilidad de que el total sea menor que cuatro?",
      "options": [
        "0.1940",
        "0.1320",
        "0.2400",
        "0.3954"
      ],
      "correct": "d",
      "explanation": "La suma es Poisson(4.2); P(total<4)=ppois(3,4.2)=0.3954034."
    },
    {
      "id": "DN-015",
      "topic": "binomial",
      "difficulty": "intermediate",
      "question": "El número de hijos de cada pareja es Poisson(1.8), independientemente entre parejas. En cinco parejas, ¿cuál es la probabilidad de que exactamente tres tengan dos hijos?",
      "options": [
        "0.1030",
        "0.2680",
        "0.7320",
        "0.0190"
      ],
      "correct": "a",
      "explanation": "p=dpois(2,1.8)=0.2677842; dbinom(3,5,p)=0.1029516."
    },
    {
      "id": "DN-016",
      "topic": "geométrica",
      "difficulty": "intermediate",
      "question": "Se seleccionan parejas independientemente; el número de hijos de cada una es Poisson(1.8). ¿Cuál es el número esperado de parejas sin dos hijos observadas antes de la primera que sí tiene dos?",
      "options": [
        "0.2680",
        "2.7344",
        "2.5000",
        "5.0000"
      ],
      "correct": "b",
      "explanation": "El éxito tiene p=dpois(2,1.8). La media del número de fracasos es (1-p)/p=2.7343503."
    },
    {
      "id": "DN-017",
      "topic": "Poisson",
      "difficulty": "intermediate",
      "question": "Dos recuentos independientes de plantas son Poisson(2.2) y Poisson(1.9). ¿Cuál es la varianza del total?",
      "options": [
        "16.81",
        "4.1",
        "2.05",
        "0.205"
      ],
      "correct": "b",
      "explanation": "Las varianzas se suman por independencia: 2.2+1.9=4.1."
    },
    {
      "id": "DN-018",
      "topic": "hipergeométrica",
      "difficulty": "intermediate",
      "question": "De diez bolas numeradas de 1 a 10 se extraen cuatro al azar sin reemplazo. ¿Cuál es la probabilidad de obtener tres pares y un impar?",
      "options": [
        "0.9762",
        "0.2619",
        "0.2381",
        "0.2500"
      ],
      "correct": "c",
      "explanation": "dhyper(3,5,5,4)=0.2380952."
    },
    {
      "id": "DN-019",
      "topic": "binomial",
      "difficulty": "intermediate",
      "question": "En cuatro lunes de enero se modela la lluvia mediante ensayos independientes con p=0.2. ¿Cuál es la probabilidad de que llueva exactamente en dos?",
      "options": [
        "0.0400",
        "0.9728",
        "0.1536",
        "0.0256"
      ],
      "correct": "c",
      "explanation": "dbinom(2,4,0.2)=0.1536. Se corrige la errata 0,0.256 del distractor."
    },
    {
      "id": "DN-020",
      "topic": "geométrica",
      "difficulty": "intermediate",
      "question": "Cada lunes llueve con probabilidad 0.2, independientemente. ¿Cuál es la probabilidad de que el primer lunes lluvioso de enero sea el cuarto?",
      "options": [
        "0.1024",
        "0.1536",
        "0.5904",
        "0.0812"
      ],
      "correct": "a",
      "explanation": "dgeom(3,0.2)=0.1024."
    },
    {
      "id": "DN-021",
      "topic": "binomial negativa",
      "difficulty": "intermediate",
      "question": "En cuatro lunes consecutivos con lluvia independiente de probabilidad 0.2, ¿cuál es la probabilidad de que el cuarto sea el segundo lunes lluvioso?",
      "options": [
        "0.0200",
        "0.1042",
        "0.1808",
        "0.0768"
      ],
      "correct": "d",
      "explanation": "Entre los tres primeros debe llover una vez y también el cuarto: choose(3,1)*0.2^2*0.8^2=0.0768."
    },
    {
      "id": "DN-022",
      "topic": "Poisson",
      "difficulty": "intermediate",
      "question": "Un recuento X sigue una Poisson y P(X=0)=0.30. ¿Cuál es E(X)?",
      "options": [
        "-0.3000",
        "1.2040",
        "1.4500",
        "3.0000"
      ],
      "correct": "b",
      "explanation": "La media es lambda=-log(0.3)=1.2039728."
    },
    {
      "id": "DN-023",
      "topic": "hipergeométrica",
      "difficulty": "intermediate",
      "question": "En una jaula hay cinco conejos hembra y tres machos. Al escoger tres al azar sin reemplazo, ¿cuál es la probabilidad de obtener un solo macho?",
      "options": [
        "0.5357",
        "0.1786",
        "0.4406",
        "0.0021"
      ],
      "correct": "a",
      "explanation": "dhyper(1,3,5,3)=0.5357143."
    },
    {
      "id": "DN-024",
      "topic": "Poisson",
      "difficulty": "intermediate",
      "question": "El número de hijos por pareja es Poisson(1.2), independientemente entre parejas. ¿Cuál es la probabilidad de que tres parejas tengan, cada una, al menos un hijo?",
      "options": [
        "0.3012",
        "0.0273",
        "0.3412",
        "0.5219"
      ],
      "correct": "c",
      "explanation": "(1-exp(-1.2))^3=0.3412475."
    },
    {
      "id": "DN-025",
      "topic": "Poisson",
      "difficulty": "intermediate",
      "question": "Los números de hijos de tres parejas independientes son Poisson(1.2). ¿Cuál es la probabilidad de que el total supere cinco?",
      "options": [
        "0.1337",
        "0.1559",
        "0.9985",
        "0.8795"
      ],
      "correct": "b",
      "explanation": "La suma es Poisson(3.6); 1-ppois(5,3.6)=0.1558815."
    },
    {
      "id": "DN-026",
      "topic": "Poisson",
      "difficulty": "intermediate",
      "question": "X es el número de hijos de una pareja y sigue Poisson(1.2). Sabiendo que X>0, ¿cuál es la probabilidad de que X=3?",
      "options": [
        "0.1241",
        "0.0867",
        "0.6988",
        "0.5052"
      ],
      "correct": "a",
      "explanation": "dpois(3,1.2)/(1-exp(-1.2))=0.1241317."
    },
    {
      "id": "DN-027",
      "topic": "interpretación del modelo",
      "difficulty": "intermediate",
      "question": "En recuentos por hectárea se estiman una media de 3.21 y una varianza de 3.17. ¿Qué interpretación prudente es compatible con esas cifras?",
      "options": [
        "Demuestran que el recuento es uniforme",
        "Son compatibles con un modelo Poisson, pero no lo demuestran",
        "Demuestran agrupación contagiosa",
        "Demuestran territorialidad"
      ],
      "correct": "b",
      "explanation": "La proximidad entre media y varianza es compatible con equidispersión Poisson; dos momentos muestrales no identifican una distribución espacial."
    },
    {
      "id": "DN-028",
      "topic": "exponencial",
      "difficulty": "intermediate",
      "question": "Una vida X es exponencial de escala 1.25 años. ¿Cuál es P(X=1.5)?",
      "options": [
        "0",
        "0.241",
        "0.847",
        "0.950"
      ],
      "correct": "a",
      "explanation": "Es una distribución con densidad: la probabilidad de un punto es cero."
    },
    {
      "id": "DN-029",
      "topic": "normal",
      "difficulty": "intermediate",
      "question": "La altura X sigue N(175,6²), en cm. ¿Qué proporción supera 179 cm?",
      "options": [
        "0.0100",
        "0.7475",
        "0.2525",
        "0.9900"
      ],
      "correct": "c",
      "explanation": "pnorm(179,175,6,lower.tail=FALSE)=0.2524925."
    },
    {
      "id": "DN-030",
      "topic": "uniforme continua",
      "difficulty": "intermediate",
      "question": "X es uniforme entre 170 y 190 cm. ¿Qué proporción alcanza al menos 179 cm?",
      "options": [
        "0.01",
        "0.25",
        "0.55",
        "0.95"
      ],
      "correct": "c",
      "explanation": "La longitud favorable es 190-179=11 de un total de 20; probabilidad 0.55."
    },
    {
      "id": "DN-031",
      "topic": "uniforme continua",
      "difficulty": "intermediate",
      "question": "Se selecciona X en (0,10) de modo que intervalos de igual longitud tengan igual probabilidad. ¿Cuál es el modelo?",
      "options": [
        "Normal de media 0 y desviación 10",
        "Uniforme en (0,10)",
        "Exponencial de media 10",
        "No existe un modelo porque el soporte no es toda la recta"
      ],
      "correct": "b",
      "explanation": "Es la definición de uniforme continua; decir solo al azar no especificaría la ley."
    },
    {
      "id": "DN-032",
      "topic": "Cauchy",
      "difficulty": "intermediate",
      "question": "¿Cuál de las siguientes afirmaciones es falsa?",
      "options": [
        "La exponencial carece de memoria",
        "La Gamma generaliza la exponencial",
        "La uniforme es simétrica respecto de su media",
        "La esperanza de la Cauchy estándar es cero"
      ],
      "correct": "d",
      "explanation": "La Cauchy estándar tiene mediana y moda cero, pero no esperanza."
    },
    {
      "id": "DN-033",
      "topic": "Gamma",
      "difficulty": "intermediate",
      "question": "Se suman las vidas de cuatro bombillas independientes, cada una exponencial de media 2 años. ¿Qué distribución tiene la suma?",
      "options": [
        "Exponencial de escala 8",
        "Normal de media 2 y varianza 4",
        "Gamma de forma 4 y escala 2",
        "Weibull de forma 1 y escala 2"
      ],
      "correct": "c",
      "explanation": "La escala común 2 se conserva y las formas 1 se suman: shape=4, scale=2."
    },
    {
      "id": "DN-034",
      "topic": "normal",
      "difficulty": "intermediate",
      "question": "Tres longitudes independientes siguen N(35,48), con media en mm y varianza en mm². ¿Cuál es la probabilidad de que su suma sea menor que 100 mm?",
      "options": [
        "0.3385",
        "0.5000",
        "1.0000",
        "0.2640"
      ],
      "correct": "a",
      "explanation": "La suma es N(105,144), con desviación 12; pnorm(100,105,12)=0.3384611."
    },
    {
      "id": "DN-035",
      "topic": "exponencial",
      "difficulty": "intermediate",
      "question": "Una vida X es exponencial de media 2.5 años. Sabiendo que X>1, ¿cuál es P(X>3 dado X>1)?",
      "options": [
        "0.3010",
        "0.0010",
        "0.0070",
        "0.4493"
      ],
      "correct": "d",
      "explanation": "Por falta de memoria: exp(-(3-1)/2.5)=0.4493290."
    },
    {
      "id": "DN-036",
      "topic": "normal",
      "difficulty": "intermediate",
      "question": "X sigue N(175,6²). ¿Qué b cumple P(170<X<b)=0.5?",
      "options": [
        "183.51",
        "175.00",
        "178.19",
        "No existe tal valor"
      ],
      "correct": "c",
      "explanation": "pnorm(b,175,6)=0.5+pnorm(170,175,6); qnorm de esa probabilidad da 178.186654."
    },
    {
      "id": "DN-037",
      "topic": "uniforme continua",
      "difficulty": "intermediate",
      "question": "Una duración es uniforme entre 60 y 80 días. Entre los intervalos de cinco días incluidos en ese rango, ¿cuál tiene mayor probabilidad?",
      "options": [
        "Solo (67.5,72.5)",
        "Solo (60,65)",
        "Solo (75,80)",
        "Todos tienen la misma probabilidad, 0.25"
      ],
      "correct": "d",
      "explanation": "En la uniforme la probabilidad depende de la longitud: 5/20=0.25."
    },
    {
      "id": "DN-038",
      "topic": "uniforme continua",
      "difficulty": "intermediate",
      "question": "U es uniforme en (0,1). Se ganan 60 euros si U<0.1, 10 si 0.1≤U≤0.7, y se pierden 40 si U>0.7. ¿Cuál es la ganancia media?",
      "options": [
        "6",
        "12",
        "0",
        "-12"
      ],
      "correct": "c",
      "explanation": "0.1*60+0.6*10-0.3*40=0 euros."
    },
    {
      "id": "DN-039",
      "topic": "exponencial",
      "difficulty": "intermediate",
      "question": "Una vida es exponencial con media 12.5 años. ¿Cuál es la probabilidad de superar 15 años?",
      "options": [
        "0.3012",
        "0.0800",
        "0.1500",
        "0.9921"
      ],
      "correct": "a",
      "explanation": "exp(-15/12.5)=0.3011942."
    },
    {
      "id": "DN-040",
      "topic": "normal",
      "difficulty": "intermediate",
      "question": "Una concentración didáctica X sigue N(200,11²), en unidades de concentración. ¿Cuál es P(205<X<215)?",
      "options": [
        "0.9140",
        "0.2384",
        "0.6750",
        "0.1500"
      ],
      "correct": "b",
      "explanation": "pnorm(215,200,11)-pnorm(205,200,11)=0.2383771."
    },
    {
      "id": "DN-041",
      "topic": "normal",
      "difficulty": "intermediate",
      "question": "X1 y X2 son concentraciones independientes, ambas N(200,11²). ¿Cuál es P(X1-X2>10)?",
      "options": [
        "0",
        "0.2602",
        "0.5360",
        "0.4440"
      ],
      "correct": "b",
      "explanation": "La diferencia es N(0,242), con desviación sqrt(242); la cola vale 0.2601690."
    },
    {
      "id": "DN-042",
      "topic": "Cauchy",
      "difficulty": "intermediate",
      "question": "Entre los siguientes modelos con varianza finita, ¿cuál tiene mayor varianza?",
      "options": [
        "Exponencial de media 10",
        "Normal N(100,12²)",
        "Uniforme en (0,100)",
        "Los tres tienen la misma varianza"
      ],
      "correct": "c",
      "explanation": "Las varianzas son 100,144 y 10000/12≈833.33. La Cauchy no puede compararse como si tuviera varianza finita."
    },
    {
      "id": "DN-043",
      "topic": "exponencial",
      "difficulty": "intermediate",
      "question": "¿Qué familia satisface Var(X)=E(X)² para todos los valores de su parámetro?",
      "options": [
        "Todas las normales",
        "Todas las uniformes",
        "Todas las Gamma de forma 2",
        "Todas las exponenciales"
      ],
      "correct": "d",
      "explanation": "En la exponencial la media es alpha y la varianza alpha². Una normal específica también puede cumplirlo, pero no toda la familia."
    },
    {
      "id": "DN-044",
      "topic": "normal",
      "difficulty": "intermediate",
      "question": "Tres pesos independientes siguen N(7.5,3), con varianza 3 kg². ¿Cuál es la probabilidad de que la suma sea inferior a 20 kg?",
      "options": [
        "0.0330",
        "0.5000",
        "0.9500",
        "0.2023"
      ],
      "correct": "d",
      "explanation": "La suma es N(22.5,9), con desviación 3: pnorm(20,22.5,3)=0.2023284."
    },
    {
      "id": "DN-045",
      "topic": "exponencial",
      "difficulty": "intermediate",
      "question": "Una vida X es exponencial de media 4.2 años. Sabiendo que X>2, ¿cuál es P(X>5 dado X>2)?",
      "options": [
        "0.4895",
        "0.3041",
        "0.6959",
        "0.3789"
      ],
      "correct": "a",
      "explanation": "exp(-(5-2)/4.2)=0.4895417."
    },
    {
      "id": "DN-046",
      "topic": "propiedades de sumas",
      "difficulty": "intermediate",
      "question": "X,Y,Z son independientes: X~N(7.5,3), Y uniforme en (6,9), Z exponencial de media 3. ¿Qué afirmación sobre S=X+Y+Z es falsa?",
      "options": [
        "E(S)=18",
        "Var(S)=12.75",
        "La desviación de S es sqrt(12.75)",
        "S es Gamma de forma 3"
      ],
      "correct": "d",
      "explanation": "E=7.5+7.5+3=18; Var=3+9/12+9=12.75. S puede ser negativo con probabilidad positiva por la normal, mientras que una Gamma es positiva."
    },
    {
      "id": "DN-047",
      "topic": "Cauchy",
      "difficulty": "intermediate",
      "question": "¿Cuál de estos modelos tiene esperanza finita y no es simétrico respecto de ella?",
      "options": [
        "Normal",
        "Exponencial",
        "Cauchy estándar",
        "Uniforme continua"
      ],
      "correct": "b",
      "explanation": "La exponencial es asimétrica. La Cauchy es simétrica respecto de su mediana, pero no tiene esperanza."
    },
    {
      "id": "DN-048",
      "topic": "uniforme continua",
      "difficulty": "intermediate",
      "question": "U es uniforme en (0,1). Se reciben A euros si U<0.3 y se pagan B si U≥0.3. ¿Qué valores hacen nula la ganancia esperada?",
      "options": [
        "A=0.5,B=0.5",
        "A=0.3,B=0.7",
        "A=14,B=6",
        "Es imposible"
      ],
      "correct": "c",
      "explanation": "E=0.3A-0.7B; para A=14,B=6 vale cero."
    },
    {
      "id": "DN-049",
      "topic": "exponencial",
      "difficulty": "intermediate",
      "question": "Una vida exponencial tiene varianza 11.56 años². ¿Cuál es la probabilidad de no superar tres años?",
      "options": [
        "Menor que 0.0001",
        "0.5862",
        "0.2286",
        "0.9688"
      ],
      "correct": "b",
      "explanation": "La escala es sqrt(11.56)=3.4; pexp(3,rate=1/3.4)=0.5861919."
    },
    {
      "id": "DN-050",
      "topic": "normal",
      "difficulty": "intermediate",
      "question": "Un modelo didáctico de concentración es N(20,3.5²). ¿Qué porcentaje supera 30?",
      "options": [
        "Aproximadamente 0.214 %",
        "10 %",
        "3.5 %",
        "95 %"
      ],
      "correct": "a",
      "explanation": "La cola normal es 0.0021374; multiplicando por 100 se obtiene 0.21374 %."
    },
    {
      "id": "DN-051",
      "topic": "normal",
      "difficulty": "intermediate",
      "question": "Dos concentraciones independientes siguen N(20,3.5²). ¿Cuál es la probabilidad de que su suma no supere 45?",
      "options": [
        "0.0500",
        "0.7620",
        "0.2260",
        "0.8438"
      ],
      "correct": "d",
      "explanation": "La suma es N(40,24.5); pnorm(45,40,sqrt(24.5))=0.8437889."
    },
    {
      "id": "DN-052",
      "topic": "Gamma",
      "difficulty": "intermediate",
      "question": "Se suman cinco variables independientes exponenciales de escala 2. ¿Cuál es la ley de la suma?",
      "options": [
        "Normal de media 2 y varianza 36",
        "Gamma de forma 5 y escala 2",
        "Uniforme en (0,5)",
        "Exponencial de escala 10"
      ],
      "correct": "b",
      "explanation": "Las formas se suman (cinco veces 1) y se mantiene la escala común 2."
    },
    {
      "id": "DN-053",
      "topic": "normal",
      "difficulty": "intermediate",
      "question": "Hay igual proporción de machos y hembras. El peso de los machos es N(7.5,3) y el de las hembras uniforme en (6,9). Sabiendo que un individuo pesa menos de 7.5, ¿qué sexo es más probable?",
      "options": [
        "Macho",
        "Hembra",
        "Ambos tienen probabilidad 0.5",
        "No puede calcularse"
      ],
      "correct": "c",
      "explanation": "La probabilidad de pesar menos de 7.5 es 0.5 en ambos grupos; con prevalencias iguales, Bayes conserva el 0.5."
    },
    {
      "id": "DN-054",
      "topic": "normal",
      "difficulty": "intermediate",
      "question": "X es normal y P(X<100 cm)=0.95, P(X<70 cm)=0.5. ¿Qué media y desviación típica tiene?",
      "options": [
        "mu=70 cm, sigma≈18.239 cm",
        "mu=95 cm, sigma=50 cm",
        "mu=100 cm, sigma=70 cm",
        "mu=100 cm, sigma=0.334 cm"
      ],
      "correct": "a",
      "explanation": "La mediana normal es mu=70; sigma=(100-70)/qnorm(0.95)=18.238705 cm."
    },
    {
      "id": "DN-055",
      "topic": "exponencial",
      "difficulty": "intermediate",
      "question": "Las vidas de dos hámsteres siguen el mismo modelo exponencial de media 2.6 años. Uno ya ha sobrevivido un año y el otro acaba de nacer. ¿Qué afirmación es falsa sobre su vida restante?",
      "options": [
        "El mayor tiene probabilidad exp(-1/2.6) de vivir otro año",
        "El recién nacido tiene esa misma probabilidad de vivir un año",
        "La esperanza de vida restante es 2.6 años en ambos",
        "El recién nacido tiene mayor probabilidad de vivir dos años más"
      ],
      "correct": "d",
      "explanation": "La falta de memoria iguala las distribuciones de vida restante. No confundir vida restante con edad total al morir."
    },
    {
      "id": "DN-056",
      "topic": "normal",
      "difficulty": "intermediate",
      "question": "X sigue N(70,5²). Fijado a=60, ¿qué b cumple P(60<X<b)=0.95?",
      "options": [
        "80.000",
        "79.614",
        "75.005",
        "82.676"
      ],
      "correct": "b",
      "explanation": "pnorm(b,70,5)=0.95+pnorm(60,70,5); b=79.614216. Un intervalo 60 a 80 contiene aproximadamente 0.9545, no exactamente 0.95."
    },
    {
      "id": "DN-057",
      "topic": "Bernoulli",
      "difficulty": "intermediate",
      "question": "X~Bernoulli(p=0.3). ¿Cuál es F_X(0)?",
      "options": [
        "0.3",
        "0.7",
        "0",
        "1"
      ],
      "correct": "b",
      "explanation": "F(0)=P(X=0)=1-p=0.7."
    },
    {
      "id": "DN-058",
      "topic": "hipergeométrica",
      "difficulty": "intermediate",
      "question": "Se extraen 12 bolas sin reemplazo de una urna con 10 rojas y 10 azules. Si X cuenta rojas, ¿cuáles son su media y varianza?",
      "options": [
        "6 y 3",
        "12 y 24/19",
        "6 y 24/19",
        "6 y 6"
      ],
      "correct": "c",
      "explanation": "E=12*(10/20)=6; Var=12*(1/2)*(1/2)*(8/19)=24/19."
    },
    {
      "id": "DN-059",
      "topic": "geométrica",
      "difficulty": "intermediate",
      "question": "R usa X como número de fracasos antes del primer éxito. Si p=1/4 y T cuenta también el ensayo exitoso, ¿qué relación es correcta?",
      "options": [
        "T=X",
        "T=X-1",
        "T=X+1 y E(T)=4",
        "T=X+1 y E(T)=3"
      ],
      "correct": "c",
      "explanation": "E(X)=(1-p)/p=3; T=X+1 tiene media 4."
    },
    {
      "id": "DN-060",
      "topic": "R y parametrización",
      "difficulty": "intermediate",
      "question": "Una vida exponencial tiene media alpha=4. ¿Qué llamada R calcula P(X>6)?",
      "options": [
        "pexp(6,rate=4)",
        "pexp(6,rate=1/4,lower.tail=FALSE)",
        "dexp(6,rate=1/4)",
        "pexp(6,rate=1/4)"
      ],
      "correct": "b",
      "explanation": "R usa tasa=1/escala; lower.tail=FALSE devuelve P(X>6)."
    },
    {
      "id": "DN-061",
      "topic": "R y parametrización",
      "difficulty": "intermediate",
      "question": "X es Gamma de forma 3 y escala 2. ¿Qué especificación R representa esa ley?",
      "options": [
        "shape=3,rate=2",
        "shape=2,scale=3",
        "shape=3,scale=2",
        "shape=6,scale=1"
      ],
      "correct": "c",
      "explanation": "La forma es 3 y la escala 2; la tasa equivalente sería 0.5. E=6 y Var=12."
    },
    {
      "id": "DN-062",
      "topic": "Weibull",
      "difficulty": "intermediate",
      "question": "X es Weibull de escala 2 y forma 2. ¿Cuál es P(X≤2)?",
      "options": [
        "0",
        "exp(-1)",
        "1-exp(-1)",
        "1-exp(-2)"
      ],
      "correct": "c",
      "explanation": "F(2)=1-exp(-(2/2)^2)=1-exp(-1); para x<0, F(x)=0."
    },
    {
      "id": "DN-063",
      "topic": "simulación y cuantiles",
      "difficulty": "intermediate",
      "question": "Para simular una variable discreta mediante U uniforme en (0,1), ¿cómo se interpreta F inversa?",
      "options": [
        "Siempre como la solución única de F(x)=U",
        "Como inf{x:F(x)≥U}",
        "Como la derivada de F",
        "Como 1/F(U)"
      ],
      "correct": "b",
      "explanation": "El cuantil generalizado existe aunque la CDF tenga saltos y F(x)=U no tenga solución."
    },
    {
      "id": "DN-064",
      "topic": "familia exponencial",
      "difficulty": "intermediate",
      "question": "Con n fijo y 0<p<1, la binomial se escribe C(p)h(x)exp(Q(p)T(x)). ¿Qué elección es correcta?",
      "options": [
        "Q(p)=p y T(x)=x",
        "Q(p)=log(p/(1-p)), T(x)=x, C(p)=(1-p)^n, h(x)=choose(n,x)",
        "C(p)=1 y h(x)=1 siempre",
        "El soporte debe cambiar con p"
      ],
      "correct": "b",
      "explanation": "Al expandir el exponente se obtiene choose(n,x)*p^x*(1-p)^(n-x)."
    },
    {
      "id": "DN-065",
      "topic": "familia exponencial",
      "difficulty": "intermediate",
      "question": "¿Qué afirmación sobre la familia exponencial es correcta?",
      "options": [
        "Una propiedad de una Poisson se cumple automáticamente en toda la familia",
        "Cualquier estimador de sus parámetros es insesgado",
        "Los resultados comunes requieren demostración e hipótesis para la clase considerada",
        "Toda distribución continua pertenece a ella"
      ],
      "correct": "c",
      "explanation": "La pertenencia no transmite por sí sola propiedades comprobadas en un único modelo ni garantiza cualquier estimador."
    },
    {
      "id": "DN-066",
      "topic": "uniforme discreta",
      "difficulty": "intermediate",
      "question": "X es uniforme en {1,2,3,4,5,6}. ¿Cuánto vale Var(X)?",
      "options": [
        "7/2",
        "35/12",
        "35/6",
        "1/6"
      ],
      "correct": "b",
      "explanation": "Para {1,...,n}, Var(X)=(n²-1)/12=35/12."
    }
  ]
};
