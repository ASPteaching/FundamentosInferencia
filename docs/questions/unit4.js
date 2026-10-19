window.questionData.banks["unit4.js"] = {
  "unit": "Unidad_4",
  "questions": [
    {
      "id": "VEC-001",
      "topic": "multinomial",
      "difficulty": "intermediate",
      "question": "Cuatro observaciones independientes se clasifican en A, B, C y D con probabilidades 0.4, 0.3, 0.2 y 0.1. ¿Cuál es la probabilidad de observar una de cada categoría?",
      "options": [
        "0.4",
        "0.0576",
        "0.3796",
        "0.0024"
      ],
      "correct": "b",
      "explanation": "Hay 4! órdenes: 24·0.4·0.3·0.2·0.1=0.0576."
    },
    {
      "id": "VEC-002",
      "topic": "multinomial",
      "difficulty": "intermediate",
      "question": "Tres partidos son independientes. En cada uno, las probabilidades de victoria local, empate y victoria visitante guardan proporción 4:2:1. ¿Cuál es la probabilidad de un resultado de cada tipo?",
      "options": [
        "0.1429",
        "0.3333",
        "0.1399",
        "0.0233"
      ],
      "correct": "c",
      "explanation": "Las probabilidades son 4/7,2/7,1/7. La masa es 3!·(4/7)·(2/7)·(1/7)=48/343≈0.1399."
    },
    {
      "id": "VEC-003",
      "topic": "multinomial",
      "difficulty": "intermediate",
      "question": "Cuatro mariposas se seleccionan de forma independiente, con probabilidades de color A, B y C iguales a 0.3, 0.3 y 0.4. ¿Cuál es la probabilidad de una A, una B y dos C?",
      "options": [
        "0.0144",
        "0.1923",
        "0.8523",
        "0.1728"
      ],
      "correct": "d",
      "explanation": "4!/(1!1!2!)·0.3·0.3·0.4²=0.1728."
    },
    {
      "id": "VEC-004",
      "topic": "conjunta",
      "difficulty": "intermediate",
      "question": "Una masa conjunta tiene p(0,0)=0.4, p(0,1)=0.2, p(1,0)=0.1 y p(1,1)=0.3. ¿Cuánto vale F(0,1)?",
      "options": [
        "0.2",
        "0.4",
        "0.6",
        "1"
      ],
      "correct": "c",
      "explanation": "F(0,1)=P(X≤0,Y≤1)=0.4+0.2=0.6."
    },
    {
      "id": "VEC-005",
      "topic": "conjunta",
      "difficulty": "intermediate",
      "question": "Una tabla propuesta como masa conjunta tiene todas sus entradas no negativas, pero suman 1.50. ¿Es válida tal como está?",
      "options": [
        "Sí, porque cada entrada es menor que uno.",
        "No: la masa total debe ser uno.",
        "Sí, porque la densidad puede superar uno.",
        "Solo si las variables son independientes."
      ],
      "correct": "b",
      "explanation": "Una masa conjunta debe sumar uno. La independencia no repara una normalización incorrecta."
    },
    {
      "id": "VEC-006",
      "topic": "marginal",
      "difficulty": "intermediate",
      "question": "Si (X_A,X_B,X_C) sigue una multinomial con n=5 y p=(0.6,0.2,0.2), ¿qué distribución tiene X_B?",
      "options": [
        "Binomial(5,0.2).",
        "Binomial(5,0.6).",
        "Multinomial con tres componentes.",
        "Uniforme en {0,1,2,3,4,5}."
      ],
      "correct": "a",
      "explanation": "Cada ensayo pertenece o no a B: X_B~Bin(5,0.2)."
    },
    {
      "id": "VEC-007",
      "topic": "marginal",
      "difficulty": "intermediate",
      "question": "En una tabla de masa conjunta, X está en las filas e Y en las columnas. ¿Cómo se calcula P(X=x)?",
      "options": [
        "Tomando la fila cero.",
        "Sumando todas las entradas de la columna y=0.",
        "Sumando las entradas de la fila x sobre todos los valores de Y.",
        "Dividiendo la fila x por su suma."
      ],
      "correct": "c",
      "explanation": "La marginal elimina Y mediante suma: p_X(x)=Σ_y p(x,y)."
    },
    {
      "id": "VEC-008",
      "topic": "condicionada",
      "difficulty": "intermediate",
      "question": "Para (X_1,X_2,X_3)~M(5;0.6,0.2,0.2), ¿cuál es la distribución de X_1 dado X_2=1?",
      "options": [
        "Binomial(5,0.6).",
        "Binomial(4,0.6).",
        "Binomial(5,0.75).",
        "Binomial(4,0.75)."
      ],
      "correct": "d",
      "explanation": "Quedan cuatro ensayos fuera de la categoría 2. La probabilidad renormalizada de la categoría 1 es 0.6/(1-0.2)=0.75."
    },
    {
      "id": "VEC-009",
      "topic": "condicionada",
      "difficulty": "intermediate",
      "question": "Una densidad conjunta es f(x,y)=2 si 0<y<x<1, y cero fuera. Para 0<x<1, ¿cuál es la densidad de Y dado X=x?",
      "options": [
        "2 en 0<y<1.",
        "1/x en 0<y<x, y cero fuera.",
        "2x en 0<y<x.",
        "No se puede definir porque P(X=x)=0."
      ],
      "correct": "b",
      "explanation": "f_X(x)=∫_0^x2dy=2x; f(y|x)=2/(2x)=1/x en su soporte."
    },
    {
      "id": "VEC-010",
      "topic": "independencia",
      "difficulty": "intermediate",
      "question": "Dos variables tienen una densidad conjunta f y marginales f_X,f_Y. ¿Qué condición caracteriza su independencia?",
      "options": [
        "f(x,y)=f_X(x)f_Y(y) casi por todas partes en el plano.",
        "Cov(X,Y)=0.",
        "Sus marginales son normales.",
        "f(0,0)=f_X(0)f_Y(0)."
      ],
      "correct": "a",
      "explanation": "La factorización de la densidad conjunta casi por todas partes equivale a independencia."
    },
    {
      "id": "VEC-011",
      "topic": "independencia",
      "difficulty": "intermediate",
      "question": "Sea X~N(0,1) e Y=X². ¿Qué afirmación es correcta?",
      "options": [
        "Son independientes porque Cov(X,Y)=0.",
        "La correlación es uno.",
        "Son dependientes, aunque Cov(X,Y)=0.",
        "No existe E(XY)."
      ],
      "correct": "c",
      "explanation": "E(X³)=0, E(X)=0 y E(Y)=1, así que la covarianza es cero. Y está determinada por X y no es constante."
    },
    {
      "id": "VEC-012",
      "topic": "covarianza",
      "difficulty": "intermediate",
      "question": "Si (X_A,X_B,X_C)~M(2;1/3,1/3,1/3), ¿cuánto vale Cov(X_A,X_B)?",
      "options": [
        "2/9",
        "0",
        "4/9",
        "-2/9"
      ],
      "correct": "d",
      "explanation": "Para categorías distintas, Cov(X_i,X_j)=-np_ip_j=-2/9."
    },
    {
      "id": "VEC-013",
      "topic": "correlacion",
      "difficulty": "intermediate",
      "question": "Si Var(X)=2 y Var(Y)=8, ¿cuál es el máximo valor posible de Cov(X,Y)?",
      "options": [
        "4",
        "7",
        "16",
        "No hay límite."
      ],
      "correct": "a",
      "explanation": "|Cov(X,Y)|≤sqrt(2·8)=4 por la cota de correlación."
    },
    {
      "id": "VEC-014",
      "topic": "correlacion",
      "difficulty": "intermediate",
      "question": "¿Cuándo está definida la correlación de Pearson entre X e Y?",
      "options": [
        "Siempre que ambas esperanzas sean cero.",
        "Si ambas varianzas son finitas y estrictamente positivas.",
        "Solo si X e Y son normales.",
        "Aunque una de las varianzas sea cero."
      ],
      "correct": "b",
      "explanation": "El cociente Cov(X,Y)/(σ_X σ_Y) requiere varianzas finitas y denominador positivo."
    },
    {
      "id": "VEC-015",
      "topic": "combinaciones_lineales",
      "difficulty": "intermediate",
      "question": "E(X)=2 y E(Y)=3; ambas variables son integrables. Sin suponer independencia, ¿cuánto vale E(2X-Y+1)?",
      "options": [
        "No puede calcularse.",
        "9",
        "2",
        "0"
      ],
      "correct": "c",
      "explanation": "La linealidad no exige independencia: 2·2-3+1=2."
    },
    {
      "id": "VEC-016",
      "topic": "combinaciones_lineales",
      "difficulty": "intermediate",
      "question": "Var(X)=Var(Y)=4/9 y Cov(X,Y)=-2/9. ¿Cuánto vale Var(X-Y)?",
      "options": [
        "4/9",
        "8/9",
        "0",
        "4/3"
      ],
      "correct": "d",
      "explanation": "Var(X-Y)=4/9+4/9-2(-2/9)=4/3."
    },
    {
      "id": "VEC-017",
      "topic": "normal_bivariante",
      "difficulty": "intermediate",
      "question": "(X,Y) tiene distribución normal conjunta, medias 100 y 50, desviaciones 15 y 10, y correlación 0.5. ¿Cuáles son la media y la varianza de X dado Y=60?",
      "options": [
        "107.5 y 168.75.",
        "107.5 y 12.9904.",
        "105 y 225.",
        "100 y 225."
      ],
      "correct": "a",
      "explanation": "Media=100+0.5·(15/10)·(60-50)=107.5; varianza=(1-0.5²)·15²=168.75."
    },
    {
      "id": "VEC-018",
      "topic": "normal_bivariante",
      "difficulty": "intermediate",
      "question": "Si (X,Y) tiene una distribución normal conjunta con varianzas positivas y Cov(X,Y)=0, ¿qué puede afirmarse?",
      "options": [
        "Que X=Y casi seguramente.",
        "Que X e Y son independientes.",
        "Que solo son independientes si las medias son cero.",
        "Que sus marginales dejan de ser normales."
      ],
      "correct": "b",
      "explanation": "En la normal conjunta, correlación cero hace que la densidad se factorice; las medias no cambian esta propiedad."
    },
    {
      "id": "VEC-019",
      "topic": "covarianza",
      "difficulty": "intermediate",
      "question": "¿Qué matriz puede ser una matriz de covarianzas de dos variables con segundos momentos finitos?",
      "options": [
        "[[1,2],[2,1]]",
        "[[1,0],[1,1]]",
        "[[2,0.5],[0.5,3]]",
        "[[-1,0],[0,1]]"
      ],
      "correct": "c",
      "explanation": "Una matriz de covarianzas es simétrica y semidefinida positiva. La opción c tiene diagonales positivas y determinante 6-0.25=5.75."
    },
    {
      "id": "VEC-020",
      "topic": "computacion_R",
      "difficulty": "intermediate",
      "question": "¿Qué calcula dmultinom(c(1,1,0), size=2, prob=c(1/3,1/3,1/3)) en R?",
      "options": [
        "Una simulación de dos estudios.",
        "La probabilidad de un único orden A,B.",
        "Una densidad continua.",
        "La masa del recuento (1,1,0), igual a 2/9."
      ],
      "correct": "d",
      "explanation": "dmultinom evalúa una masa multinomial e incluye los órdenes A,B y B,A. Para simular se utiliza rmultinom."
    }
  ]
};
