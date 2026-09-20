const SIZE = 8, MIN_TOPICS = 5, MAX_PER_TOPIC = 2, letters = ['a', 'b', 'c', 'd'];
let bank = [], selected = [];
const shuffled = items => [...items].sort(() => Math.random() - .5);

function diverseSelection(items, n) {
  const groups = new Map();
  shuffled(items).forEach(q => { if (!groups.has(q.topic)) groups.set(q.topic, []); groups.get(q.topic).push(q); });
  const picked = [], counts = new Map();
  shuffled([...groups.keys()]).slice(0, Math.min(MIN_TOPICS, n, groups.size)).forEach(topic => {
    picked.push(groups.get(topic)[0]); counts.set(topic, 1);
  });
  shuffled(items.filter(q => !picked.includes(q))).forEach(q => {
    if (picked.length < n && (counts.get(q.topic) || 0) < MAX_PER_TOPIC) {
      picked.push(q); counts.set(q.topic, (counts.get(q.topic) || 0) + 1);
    }
  });
  shuffled(items.filter(q => !picked.includes(q))).forEach(q => { if (picked.length < n) picked.push(q); });
  return picked;
}

function renderQuiz() {
  selected = diverseSelection(bank, SIZE);
  const root = document.querySelector('#quiz'); root.innerHTML = '';
  selected.forEach((q, i) => {
    const fieldset = document.createElement('fieldset');
    fieldset.innerHTML = `<legend>${i + 1}. ${q.question}</legend><p class="question-meta">${q.topic}</p>`;
    q.options.forEach((option, j) => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="${q.id}" value="${letters[j]}"> ${letters[j]}) ${option}`;
      fieldset.append(label);
    });
    root.append(fieldset);
  });
  document.querySelector('#finish').hidden = false;
  document.querySelector('#result').hidden = true;
}

document.querySelector('#generate').addEventListener('click', renderQuiz);
document.querySelector('#finish').addEventListener('click', () => {
  let score = 0; const rows = [];
  selected.forEach((q, i) => {
    const answer = document.querySelector(`input[name="${q.id}"]:checked`)?.value || '';
    const correct = answer === q.correct; score += Number(correct);
    const solution = `${q.correct}) ${q.options[letters.indexOf(q.correct)]}`;
    const explanation = q.explanation ? `<p>${q.explanation}</p>` : '';
    rows.push(`<li class="${correct ? 'correct' : 'incorrect'}">${i + 1}. ${correct ? 'Correcta' : 'Incorrecta'} — respuesta correcta: ${solution}${explanation}</li>`);
  });
  const result = document.querySelector('#result'); result.hidden = false;
  result.innerHTML = `<h2>Resultado</h2><p><strong>Puntuación: ${score}/${selected.length}</strong></p><ol>${rows.join('')}</ol>`;
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

fetch('unit1.json').then(response => {
  if (!response.ok) throw Error(response.status);
  return response.json();
}).then(data => { bank = data.questions; }).catch(() => {
  document.querySelector('#quiz').innerHTML = '<p>No se pudo cargar el banco de cuestiones.</p>';
  document.querySelector('#generate').disabled = true;
});
