// Engine/transport test with a minimal DOM, not a real browser file:// test.
// node scripts/test-questions-loading.js SCRATCH/work/docs/questions
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const directory = path.resolve(process.argv[2]);
const source = fs.readFileSync(path.join(directory, 'quiz.js'), 'utf8');
const tick = () => new Promise(resolve => setImmediate(resolve));

async function run(protocol) {
  const events = {}, nodes = {}, scripts = [];
  let answers = {}, requests = 0;
  const element = tag => ({tag, children: [], value: '', hidden: false, disabled: false,
    append(child) { this.children.push(child); }, remove() {}, scrollIntoView() {},
    addEventListener(name, callback) { events[`${this.id}:${name}`] = callback; },
    set innerHTML(value) { this.html = value; this.children = []; if (this.id === '#quiz') answers = {}; },
    get innerHTML() { return this.html || ''; }});
  for (const id of ['#quiz','#result','#generate','#finish','#unit','#unit-heading','#bank-status']) {
    nodes[id] = element('div'); nodes[id].id = id;
  }
  nodes['#unit'].value = '2';
  const document = {head: {append(script) { scripts.push(script); }}, createElement: element,
    querySelector(selector) {
      if (nodes[selector]) return nodes[selector];
      const match = selector.match(/^input\[name="(.+)"\]:checked$/);
      return match && answers[match[1]] ? {value: answers[match[1]]} : null;
    }};
  const context = {document, window: {}, URLSearchParams, location: {protocol, search: '?unit=2'},
    fetch() { requests++; throw Error('fetch must not be used'); }};
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(directory,'units.js'),'utf8'), context);
  vm.runInContext(source + '\nthis.state = () => ({bank,selected}); this.readBank = readBank;', context);
  function load(index) {
    const script = scripts[index];
    vm.runInContext(fs.readFileSync(path.join(directory,script.src),'utf8'), context);
    script.onload();
  }
  const unitIds = nodes['#unit'].children.map(option => String(option.value));
  assert.ok(unitIds.includes('1') && unitIds.includes('2'));
  assert.equal(nodes['#generate'].disabled, true);
  load(0); await tick();
  assert.equal(context.state().bank.length, 40);
  assert.ok(context.state().bank.every(q => q.id.startsWith('VA-')));
  assert.equal(nodes['#bank-status'].textContent, '40 preguntas disponibles');
  events['#generate:click']();
  assert.equal(nodes['#quiz'].children.length, 8);
  for (const q of context.state().selected) answers[q.id] = q.correct;
  events['#finish:click']();
  assert.match(nodes['#result'].innerHTML, /Puntuación: 8\/8/);
  assert.match(nodes['#result'].innerHTML, /<p>.+<\/p>/);

  nodes['#unit'].value = '1'; events['#unit:change']();
  assert.equal(nodes['#generate'].disabled, true);
  assert.equal(nodes['#result'].innerHTML, '');
  assert.equal(Object.keys(answers).length, 0);
  // Switch back before the U1 request resolves: late U1 must not overwrite U2.
  nodes['#unit'].value = '2'; events['#unit:change'](); await tick();
  load(1); await tick();
  assert.ok(context.state().bank.every(q => q.id.startsWith('VA-')));
  nodes['#unit'].value = '1'; events['#unit:change'](); await tick();
  assert.equal(context.state().bank.length, 40);
  assert.ok(context.state().bank.every(q => q.id.startsWith('PROB-')));
  events['#generate:click']();
  assert.equal(context.state().selected.length, 8);
  nodes['#unit'].value = '2'; events['#unit:change'](); await tick();
  events['#generate:click']();
  assert.ok(context.state().selected.every(q => q.id.startsWith('VA-')));
  assert.equal(Object.keys(answers).length, 0);
  assert.equal(nodes['#result'].innerHTML, '');
  assert.equal(scripts.length, 2); // Each bank loaded only once.
  assert.equal(requests, 0);
  const failure = context.readBank('unit99.js'); scripts[2].onerror();
  await assert.rejects(failure, /Bank not found/);
  await assert.rejects(context.readBank('../private.js'), /Invalid bank file/);
  assert.equal(fs.existsSync(path.join(directory,'units.json')), false);
  console.log(`PASS: ${protocol} engine fixture, 40+40, score/explanations, reset, cached load, late response, errors, no fetch.`);
}
run('file:').then(() => run('http:')).catch(error => { console.error(error); process.exitCode = 1; });
