window.questionData.banks["unit2.js"] = {
  "unit": "Unidad_2",
  "questions": [
    {
      "id": "VA-001",
      "topic": "normalización",
      "difficulty": "intermediate",
      "question": "Una variable discreta tiene masa f(x)=K+0.04x para x=0,1,2,3,4,5, y cero fuera. ¿Qué K normaliza la masa?",
      "options": [
        "1",
        "1/5",
        "1/15",
        "1/150"
      ],
      "correct": "c",
      "explanation": "6K+0.04(0+1+2+3+4+5)=1, por tanto K=1/15."
    },
    {
      "id": "VA-002",
      "topic": "esperanza",
      "difficulty": "intermediate",
      "question": "Para x=0,1,2,3,4,5, sea f(x)=1/15+0.04x (cero fuera). ¿Cuál es E(X)?",
      "options": [
        "3.0",
        "3.5",
        "3.2",
        "3.4"
      ],
      "correct": "c",
      "explanation": "Σxf(x)=3.2."
    },
    {
      "id": "VA-003",
      "topic": "distribución",
      "difficulty": "intermediate",
      "question": "Una variable absolutamente continua tiene F(x)=0 si x<1; F(x)=(2x²−2)/30 si 1≤x<K; F(x)=1 si x≥K. ¿Qué K hace continua esta CDF?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": "d",
      "explanation": "La continuidad exige (2K²−2)/30=1 y K≥1, de donde K=4."
    },
    {
      "id": "VA-004",
      "topic": "esperanza",
      "difficulty": "intermediate",
      "question": "Sea F(x)=0 si x<1, (2x²−2)/30 si 1≤x<4 y 1 si x≥4. ¿Cuánto vale E(X)?",
      "options": [
        "14/5",
        "25/6",
        "2.5",
        "Ninguna de las anteriores"
      ],
      "correct": "a",
      "explanation": "La densidad es 4x/30 en (1,4); ∫x(4x/30)dx=14/5."
    },
    {
      "id": "VA-005",
      "topic": "varianza",
      "difficulty": "intermediate",
      "question": "Sea F(x)=0 si x<1, (2x²−2)/30 si 1≤x<4 y 1 si x≥4. ¿Cuánto vale Var(X)?",
      "options": [
        "25/60",
        "33/50",
        "22/40",
        "Ninguna de las anteriores"
      ],
      "correct": "b",
      "explanation": "E(X²)=8.5 y E(X)=2.8; Var(X)=8.5−2.8²=0.66."
    },
    {
      "id": "VA-006",
      "topic": "esperanza",
      "difficulty": "intermediate",
      "question": "Se venden 1000 billetes a 10 euros cada uno y se sortean un premio de 100 euros y otro de 1000. Cada billete tiene la misma probabilidad de ganar cada premio. ¿Cuál es la ganancia neta esperada al comprar dos billetes?",
      "options": [
        "+2.2 euros",
        "−17.8 euros",
        "−15.4 euros",
        "Ninguna de las anteriores"
      ],
      "correct": "b",
      "explanation": "Premios esperados: 2(100+1000)/1000=2.2; coste 20; neto −17.8."
    },
    {
      "id": "VA-007",
      "topic": "probabilidad de intervalos",
      "difficulty": "intermediate",
      "question": "Sea f(x)=0.5 para −1≤x<0, f(x)=1−x para 0≤x<1, y cero fuera. ¿Cuánto vale P(−0.3<X<0.6)?",
      "options": [
        "0.47",
        "0.57",
        "0.67",
        "Ninguna de las anteriores"
      ],
      "correct": "b",
      "explanation": "0.3·0.5+∫₀⁰·⁶(1−x)dx=0.15+0.42=0.57."
    },
    {
      "id": "VA-008",
      "topic": "existencia de momentos",
      "difficulty": "intermediate",
      "question": "Una variable no negativa tiene densidad f(x)=2x^(−1.5) si x>16, y cero fuera. ¿Qué ocurre con su esperanza?",
      "options": [
        "Es 25",
        "Es 120",
        "Es +∞; no tiene esperanza finita",
        "Es 0"
      ],
      "correct": "c",
      "explanation": "∫₁₆∞x·2x^(−1.5)dx diverge a +∞. La densidad sí integra uno."
    },
    {
      "id": "VA-009",
      "topic": "propiedades de la esperanza",
      "difficulty": "intermediate",
      "question": "X e Y tienen segundos momentos finitos. ¿Qué identidad no es válida necesariamente para cualquier par X,Y?",
      "options": [
        "E(X+Y)=E(X)+E(Y)",
        "E(XY)=E(X)E(Y)",
        "E(aX+b)=aE(X)+b, para a,b reales",
        "E(k)=k, para k real"
      ],
      "correct": "b",
      "explanation": "La linealidad no requiere independencia. La identidad del producto puede fallar; la independencia es una condición suficiente."
    },
    {
      "id": "VA-010",
      "topic": "probabilidad de intervalos",
      "difficulty": "intermediate",
      "question": "X toma valores 0,1,2,3,4 con probabilidades 0.42,0.24,0.20,0.11,0.03. ¿Cuánto vale P(1≤X<3)?",
      "options": [
        "0.44",
        "0.55",
        "0.86",
        "0.97"
      ],
      "correct": "a",
      "explanation": "Se incluyen 1 y 2: 0.24+0.20=0.44."
    },
    {
      "id": "VA-011",
      "topic": "normalización",
      "difficulty": "intermediate",
      "question": "El número de huevos en un nido tiene masa f(x)=K/(2+x), x=0,1,2,3,4,5; cero fuera. ¿Qué K normaliza la masa?",
      "options": [
        "1",
        "14/223",
        "140/223",
        "1/223"
      ],
      "correct": "c",
      "explanation": "Σ₀⁵1/(2+x)=223/140; K=140/223."
    },
    {
      "id": "VA-012",
      "topic": "probabilidad de intervalos",
      "difficulty": "intermediate",
      "question": "El número de huevos X tiene masa f(x)=(140/223)/(2+x), x=0,...,5; cero fuera. ¿Cuál es la probabilidad de encontrar al menos un huevo?",
      "options": [
        "0.209",
        "0.686",
        "0.477",
        "0.314"
      ],
      "correct": "c",
      "explanation": "P(X≥1)=1−f(0)=1−70/223=153/223≈0.686."
    },
    {
      "id": "VA-013",
      "topic": "normalización",
      "difficulty": "intermediate",
      "question": "Sea f(x)=Kx exp(−2x) para x≥0 y cero fuera. ¿Qué K hace de f una densidad?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": "d",
      "explanation": "∫₀∞x exp(−2x)dx=1/4; K=4."
    },
    {
      "id": "VA-014",
      "topic": "esperanza",
      "difficulty": "intermediate",
      "question": "Sea f(x)=4x exp(−2x) para x≥0 y cero fuera. ¿Cuánto vale E(X)?",
      "options": [
        "1",
        "2",
        "3",
        "Ninguna de las anteriores"
      ],
      "correct": "a",
      "explanation": "∫₀∞4x²exp(−2x)dx=1."
    },
    {
      "id": "VA-015",
      "topic": "transformaciones",
      "difficulty": "intermediate",
      "question": "Sea f(x)=4x exp(−2x) para x≥0 y cero fuera. Definimos la media armónica teórica como 1/E(1/X). ¿Cuánto vale?",
      "options": [
        "0.25",
        "0.5",
        "1",
        "2"
      ],
      "correct": "b",
      "explanation": "E(1/X)=∫₀∞4exp(−2x)dx=2, por tanto 1/E(1/X)=0.5."
    },
    {
      "id": "VA-016",
      "topic": "probabilidad de intervalos",
      "difficulty": "intermediate",
      "question": "El número de aleteos X toma valores 6,7,8,9,10 con probabilidades 0.05,0.10,0.60,0.15,0.10. ¿Cuánto vale P(6≤X<8)?",
      "options": [
        "0.75",
        "0.05",
        "0.10",
        "0.15"
      ],
      "correct": "d",
      "explanation": "Se incluyen 6 y 7: 0.05+0.10=0.15."
    },
    {
      "id": "VA-017",
      "topic": "varianza",
      "difficulty": "intermediate",
      "question": "X toma valores 6,7,8,9,10 con probabilidades 0.05,0.10,0.60,0.15,0.10. ¿Cuánto vale Var(X)?",
      "options": [
        "0.8275",
        "0.5549",
        "67.25",
        "0.6725"
      ],
      "correct": "a",
      "explanation": "E(X)=8.15; E(X²)=67.25; Var(X)=67.25−8.15²=0.8275."
    },
    {
      "id": "VA-018",
      "topic": "esperanza",
      "difficulty": "intermediate",
      "question": "Se lanzan dos dados regulares e independientes. La ganancia neta es −200 euros si la suma es menor que 5, cero si está entre 5 y 7, 100 si está entre 8 y 11, y 500 si es 12. ¿Cómo es su esperanza?",
      "options": [
        "Es cero: juego equitativo",
        "Es positiva: favorable al jugador en promedio",
        "Es negativa",
        "No tiene esperanza finita"
      ],
      "correct": "b",
      "explanation": "Las frecuencias respectivas son 6,15,14,1 de 36; E=(−200·6+100·14+500)/36=600/36>0."
    },
    {
      "id": "VA-019",
      "topic": "varianza",
      "difficulty": "intermediate",
      "question": "X e Y tienen segundos momentos finitos. ¿Cuál de estas afirmaciones vale siempre, para a,b reales?",
      "options": [
        "Var(X+Y)=Var(X)+Var(Y)",
        "Var(XY)=Var(X)Var(Y)",
        "Var(aX+b)=aVar(X)",
        "Ninguna de las anteriores"
      ],
      "correct": "d",
      "explanation": "Las dos primeras no son universales; la tercera requiere a², no a."
    },
    {
      "id": "VA-020",
      "topic": "distribución",
      "difficulty": "intermediate",
      "question": "Sea F(x)=0 si x≤0, x³ si 0<x≤1, y 1 si x>1. ¿Cuál es una densidad correspondiente?",
      "options": [
        "3x² si 0<x≤1; cero fuera",
        "3x² si x≤1; cero fuera",
        "x³ si x≤1; cero fuera",
        "3x² si x>1; cero fuera"
      ],
      "correct": "a",
      "explanation": "Derivar F en el interior da 3x², con soporte (0,1). El valor puntual en los extremos no altera probabilidades."
    },
    {
      "id": "VA-021",
      "topic": "distribución",
      "difficulty": "intermediate",
      "question": "Un modelo didáctico de colesterol tiene F(x)=0 si x≤150, c(x−150)² si 150<x<250 y 1 si x≥250. La variable es absolutamente continua. ¿Qué c corresponde?",
      "options": [
        "1",
        "0.0001",
        "0.01",
        "10"
      ],
      "correct": "b",
      "explanation": "La continuidad en 250 exige c·100²=1."
    },
    {
      "id": "VA-022",
      "topic": "probabilidad condicionada",
      "difficulty": "intermediate",
      "question": "Un modelo tiene F(x)=0 si x≤150, 0.0001(x−150)² si 150<x<250, y 1 si x≥250. Sabiendo que X<200, ¿cuánto vale P(X<185 | X<200)?",
      "options": [
        "0.35",
        "1",
        "0.49",
        "0"
      ],
      "correct": "c",
      "explanation": "F(185)/F(200)=0.1225/0.25=0.49; el denominador es positivo."
    },
    {
      "id": "VA-023",
      "topic": "esperanza",
      "difficulty": "intermediate",
      "question": "El número de nacimientos X toma valores 3,4,5,6,7,8,9 con probabilidades 0.05,0.12,0.20,0.30,0.20,0.10,0.03. ¿Cuánto vale E(X)?",
      "options": [
        "6",
        "5.9",
        "6.2",
        "5.6"
      ],
      "correct": "b",
      "explanation": "Σxp(x)=5.9."
    },
    {
      "id": "VA-024",
      "topic": "probabilidad condicionada",
      "difficulty": "intermediate",
      "question": "X toma valores 3,4,5,6,7,8,9 con probabilidades 0.05,0.12,0.20,0.30,0.20,0.10,0.03. Sabiendo que X es par, ¿cuánto vale P(X<8 | X es par)?",
      "options": [
        "0.42",
        "0.52",
        "0.64",
        "0.8077, aproximadamente"
      ],
      "correct": "d",
      "explanation": "Los pares son 4,6,8: total 0.52. Los pares menores que 8 suman 0.42. El cociente es 0.8076923. Se corrige la opción original 0.74."
    },
    {
      "id": "VA-025",
      "topic": "independencia",
      "difficulty": "intermediate",
      "question": "En cada parto X toma valores 3,4,5,6,7,8,9 con probabilidades 0.05,0.12,0.20,0.30,0.20,0.10,0.03. En dos partos independientes, ¿cuál es la probabilidad de que ambos tengan menos de cinco nacimientos?",
      "options": [
        "0.0289",
        "0.0025",
        "0.17",
        "0.20"
      ],
      "correct": "a",
      "explanation": "P(X<5)=0.17; independencia da 0.17²=0.0289."
    },
    {
      "id": "VA-026",
      "topic": "existencia de momentos",
      "difficulty": "intermediate",
      "question": "¿Cuál de estas afirmaciones es falsa?",
      "options": [
        "Toda variable aleatoria tiene función de distribución",
        "Si la esperanza es finita, se interpreta como el valor medio teórico",
        "Toda variable aleatoria tiene esperanza finita",
        "Si la varianza es finita, siempre es no negativa"
      ],
      "correct": "c",
      "explanation": "Hay variables sin esperanza finita. La varianza puede valer cero; por eso se corrige «positiva» a «no negativa»."
    },
    {
      "id": "VA-027",
      "topic": "probabilidad de intervalos",
      "difficulty": "intermediate",
      "question": "Sea f(x)=0.5 exp(−|x|), para todo x real. ¿Cuánto vale P(X<0)?",
      "options": [
        "0.5",
        "0.25",
        "0.75",
        "0"
      ],
      "correct": "a",
      "explanation": "La densidad es simétrica y la mitad del área queda a cada lado de cero."
    },
    {
      "id": "VA-028",
      "topic": "distribución",
      "difficulty": "intermediate",
      "question": "Sea f(x)=0.5 exp(−|x|), para todo x real. ¿Cuál afirmación sobre F es correcta?",
      "options": [
        "Su gráfica es simétrica respecto del eje vertical x=0",
        "F decrece para x>0",
        "F alcanza un máximo en x=0",
        "Las tres afirmaciones anteriores son falsas"
      ],
      "correct": "d",
      "explanation": "F es creciente; la densidad es simétrica, mientras que F(−x)=1−F(x)."
    },
    {
      "id": "VA-029",
      "topic": "densidad y probabilidad",
      "difficulty": "intermediate",
      "question": "Sea f(x)=0.5 exp(−|x|), para todo x real. ¿Cuánto vale P(X=0)?",
      "options": [
        "0.5",
        "0.25",
        "0.75",
        "0"
      ],
      "correct": "d",
      "explanation": "Una distribución con densidad tiene probabilidad puntual cero; f(0)=0.5 no es esa probabilidad."
    },
    {
      "id": "VA-030",
      "topic": "esperanza",
      "difficulty": "intermediate",
      "question": "Un dado tiene probabilidad de cada cara proporcional a sus puntos: P(X=i)=i/21 para i=1,...,6. ¿Cuánto vale E(X)?",
      "options": [
        "3.50",
        "4.33, aproximadamente",
        "4.50",
        "5.20"
      ],
      "correct": "b",
      "explanation": "E(X)=Σi²/21=91/21≈4.33."
    },
    {
      "id": "VA-031",
      "topic": "variable aleatoria",
      "difficulty": "basic",
      "question": "Se lanzan dos dados y X es la suma. ¿Cuál es la relación correcta entre resultado elemental y variable?",
      "options": [
        "X es una función: X((i,j))=i+j",
        "Cada suma identifica un único resultado elemental",
        "X es el espacio muestral de 36 pares",
        "X asigna una probabilidad a cada suceso"
      ],
      "correct": "a",
      "explanation": "Varios pares tienen la misma suma. La variable asigna números a resultados; la probabilidad se aplica a sucesos."
    },
    {
      "id": "VA-032",
      "topic": "distribución",
      "difficulty": "basic",
      "question": "Una CDF tiene un salto en x=2: F(2)=0.7 y el límite por la izquierda es 0.4. ¿Cuánto vale P(X=2)?",
      "options": [
        "0",
        "0.3",
        "0.4",
        "0.7"
      ],
      "correct": "b",
      "explanation": "La masa en 2 es el tamaño del salto: 0.7−0.4=0.3."
    },
    {
      "id": "VA-033",
      "topic": "distribución",
      "difficulty": "basic",
      "question": "¿Qué propiedad cumple toda función de distribución F?",
      "options": [
        "Es continua por la izquierda",
        "Es estrictamente creciente",
        "Es no decreciente y continua por la derecha",
        "Su integral sobre R vale uno"
      ],
      "correct": "c",
      "explanation": "La continuidad por la derecha y la monotonía no decreciente son propiedades generales de una CDF."
    },
    {
      "id": "VA-034",
      "topic": "densidad y probabilidad",
      "difficulty": "basic",
      "question": "Una variable es uniforme en (0,0.2), con densidad f(x)=5 en ese intervalo. ¿Qué afirmación es correcta?",
      "options": [
        "El modelo es imposible porque 5>1",
        "P(X=0.1)=5",
        "P(0<X<0.1)=0.5",
        "F(0.1)=5"
      ],
      "correct": "c",
      "explanation": "La densidad puede superar uno. La probabilidad es el área: 5·0.1=0.5."
    },
    {
      "id": "VA-035",
      "topic": "transformaciones",
      "difficulty": "basic",
      "question": "X tiene E(X)=3 y Var(X)=4. Si Y=2X−1, ¿qué valores tienen E(Y) y Var(Y)?",
      "options": [
        "5 y 8",
        "5 y 16",
        "6 y 16",
        "5 y 4"
      ],
      "correct": "b",
      "explanation": "E(Y)=2·3−1=5; Var(Y)=2²·4=16."
    },
    {
      "id": "VA-036",
      "topic": "variable aleatoria",
      "difficulty": "basic",
      "question": "Sea A un suceso de probabilidad 0.3 e I_A su indicadora. ¿Cuánto valen E(I_A) y Var(I_A)?",
      "options": [
        "0.3 y 0.21",
        "0.3 y 0.3",
        "1 y 0.21",
        "0.7 y 0.21"
      ],
      "correct": "a",
      "explanation": "E(I_A)=P(A)=0.3; Var(I_A)=0.3(1−0.3)=0.21."
    },
    {
      "id": "VA-037",
      "topic": "propiedades de la esperanza",
      "difficulty": "basic",
      "question": "¿Qué supuesto se necesita para E(X+Y)=E(X)+E(Y) con valores finitos?",
      "options": [
        "Independencia",
        "Igual distribución",
        "Esperanzas finitas de X e Y",
        "Varianzas iguales"
      ],
      "correct": "c",
      "explanation": "La linealidad vale aunque sean dependientes, siempre que las esperanzas sean finitas."
    },
    {
      "id": "VA-038",
      "topic": "lectura de R",
      "difficulty": "basic",
      "question": "En R, F_x(k) devuelve P(X≤k) para una variable discreta de valores enteros. ¿Qué expresión calcula P(X≥8)?",
      "options": [
        "F_x(8)",
        "1-F_x(8)",
        "1-F_x(7)",
        "F_x(7)"
      ],
      "correct": "c",
      "explanation": "El complemento debe excluir 0,...,7; los valores enteros permiten usar F_x(7)."
    },
    {
      "id": "VA-039",
      "topic": "varianza",
      "difficulty": "basic",
      "question": "Si E(X)=2 y E(X²)=7, ¿cuánto vale la varianza?",
      "options": [
        "3",
        "5",
        "7",
        "9"
      ],
      "correct": "a",
      "explanation": "Var(X)=E(X²)−E(X)²=7−4=3."
    },
    {
      "id": "VA-040",
      "topic": "densidad y probabilidad",
      "difficulty": "basic",
      "question": "Una variable tiene densidad. ¿Qué relación entre sus probabilidades es correcta para a<b?",
      "options": [
        "P(a<X<b)=P(a≤X≤b)",
        "P(X=a)=f(a)",
        "P(X≤a)=1−F(a)",
        "P(a<X≤b)=F(a)+F(b)"
      ],
      "correct": "a",
      "explanation": "Los extremos tienen probabilidad cero; por eso no alteran la probabilidad del intervalo."
    }
  ]
};
