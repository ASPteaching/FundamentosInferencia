// Run with node scripts/test-questions.js. No browser dependencies required.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(path.join(__dirname, '../questions/quiz.js'), 'utf8');
const context = {document: {querySelector: () => ({addEventListener() {}})},
  fetch: () => new Promise(() => {}), URLSearchParams, location: {search: ''}};
vm.createContext(context);
vm.runInContext(source + '\nthis.testAPI = {diverseSelection, escapeHTML};', context);
const {diverseSelection, escapeHTML} = context.testAPI;
assert.equal(escapeHTML('P(a<X<b) & "x"'), 'P(a&lt;X&lt;b) &amp; &quot;x&quot;');
for (const folder of ['Unidad_01', 'Unidad_02']) {
  const bank = JSON.parse(fs.readFileSync(path.join(__dirname,
    '../../FundamentosInferencia-QuestionBank', folder, 'questions.yml'), 'utf8')).bank;
  const items = bank.questions.filter(q => q.visibility === 'self_assessment');
  assert.equal(new Set(items.map(q => q.id)).size, items.length);
  assert.equal(items.length, 40);
  for (let attempt = 0; attempt < 200; attempt++) {
    const picked = diverseSelection(items, 8);
    assert.equal(picked.length, 8);
    assert.equal(new Set(picked.map(q => q.id)).size, 8);
    assert.ok(picked.every(q => items.includes(q)));
    assert.ok(new Set(picked.map(q => q.topic)).size >= 5);
    const counts = picked.reduce((m,q) => m.set(q.topic,(m.get(q.topic)||0)+1), new Map());
    assert.ok([...counts.values()].every(n => n <= 2));
  }
  assert.equal(diverseSelection(items.slice(0,3), 8).length, 3);
}
console.log('PASS: U1/U2 selection (400 attempts), unique IDs, diversity, small banks, formula escaping.');
