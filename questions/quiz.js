const SIZE = 8, MIN_TOPICS = 5, MAX_PER_TOPIC = 2, letters = ['a', 'b', 'c', 'd'];
let bank = [], selected = [];
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[character]));
const shuffled = items => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

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
    fieldset.innerHTML = `<legend>${i + 1}. ${escapeHTML(q.question)}</legend><p class="question-meta">${escapeHTML(q.topic)}</p>`;
    q.options.forEach((option, j) => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="${q.id}" value="${letters[j]}"> ${letters[j]}) ${escapeHTML(option)}`;
      fieldset.append(label);
    });
    root.append(fieldset);
  });
  document.querySelector('#finish').hidden = false;
  clearResult();
}

document.querySelector('#generate').addEventListener('click', renderQuiz);
document.querySelector('#finish').addEventListener('click', () => {
  let score = 0; const rows = [];
  selected.forEach((q, i) => {
    const answer = document.querySelector(`input[name="${q.id}"]:checked`)?.value || '';
    const correct = answer === q.correct; score += Number(correct);
    const solution = `${q.correct}) ${q.options[letters.indexOf(q.correct)]}`;
    const explanation = q.explanation ? `<p>${escapeHTML(q.explanation)}</p>` : '';
    rows.push(`<li class="${correct ? 'correct' : 'incorrect'}">${i + 1}. ${correct ? 'Correcta' : 'Incorrecta'} — respuesta correcta: ${escapeHTML(solution)}${explanation}</li>`);
  });
  const result = document.querySelector('#result'); result.hidden = false;
  result.innerHTML = `<h2>Resultado</h2><p><strong>Puntuación: ${score}/${selected.length}</strong></p><ol>${rows.join('')}</ol>`;
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const unitSelector = document.querySelector('#unit');
let units = [], loadVersion = 0;
const bankLoads = new Map();
function readBank(file) {
  // Classic local scripts work with both file:// and HTTP; no fetch or CORS override.
  if (!/^unit[1-9][0-9]*\.js$/.test(file)) return Promise.reject(Error('Invalid bank file'));
  if (bankLoads.has(file)) return bankLoads.get(file);
  const pending = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = file;
    script.onload = () => {
      const data = window.questionData.banks[file];
      if (!data || !Array.isArray(data.questions) || !data.questions.length) reject(Error('Empty bank'));
      else resolve(data);
      script.remove();
    };
    script.onerror = () => { script.remove(); reject(Error('Bank not found')); };
    document.head.append(script);
  });
  bankLoads.set(file, pending);
  pending.catch(() => bankLoads.delete(file));
  return pending;
}
function clearResult() {
  const result = document.querySelector('#result');
  result.hidden = true;
  result.innerHTML = '';
}
async function loadUnit() {
  const version = ++loadVersion;
  bank = []; selected = [];
  document.querySelector('#generate').disabled = true;
  document.querySelector('#finish').hidden = true;
  clearResult();
  document.querySelector('#bank-status').textContent = '';
  document.querySelector('#quiz').innerHTML = '<p>Cargando preguntas…</p>';
  const unit = units.find(item => String(item.id) === unitSelector.value);
  document.querySelector('#unit-heading').textContent = `Unidad ${unit.id} — ${unit.title}`;
  try {
    const data = await readBank(unit.file);
    if (version !== loadVersion) return;
    bank = data.questions;
    if (!bank.length) throw Error('Empty bank');
    document.querySelector('#quiz').innerHTML = '';
    document.querySelector('#bank-status').textContent = `${bank.length} preguntas disponibles`;
    document.querySelector('#generate').disabled = false;
  } catch (error) {
    if (version === loadVersion) document.querySelector('#quiz').innerHTML = '<p>No se pudo cargar el banco de cuestiones.</p>';
  }
}
unitSelector.addEventListener('change', loadUnit);
function initializeUnits() {
  units = window.questionData?.units;
  if (!Array.isArray(units) || !units.length) throw Error('Missing catalog');
  units.forEach(unit => {
    const option = document.createElement('option');
    option.value = unit.id; option.textContent = `Unidad ${unit.id} — ${unit.title}`;
    unitSelector.append(option);
  });
  const requested = new URLSearchParams(location.search).get('unit');
  if (units.some(unit => String(unit.id) === requested)) unitSelector.value = requested;
  unitSelector.disabled = false;
  return loadUnit();
}
try { initializeUnits(); } catch (error) {
  document.querySelector('#quiz').innerHTML = '<p>No se pudo cargar la lista de unidades.</p>';
}
