import { test } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
const dom = new JSDOM('<body></body>', { url: 'https://jinnie.test/' });
Object.assign(globalThis, { window: dom.window, document: dom.window.document, Node: dom.window.Node, CustomEvent: dom.window.CustomEvent, localStorage: dom.window.localStorage });
const { mount } = await import('../src/interactions.js');
const { dispose } = await import('../src/lifecycle.js');
const { set } = await import('../src/store.js');
const { u } = await import('../src/i18n.js');
const { paths } = await import('../content/index.js');
const { drills } = await import('../content/drills.js');

function clickText(root, text) {
  const button = [...root.querySelectorAll('button')].find(b => !b.disabled && b.textContent.trim() === text.trim());
  assert.ok(button, `Missing enabled button: ${text}`); button.click();
}

function solve(root, spec, lang, clock) {
  const t = x => x[lang];
  if (spec.type === 'choice') clickText(root, t(spec.options.find(x => x.correct).text));
  if (spec.type === 'predict') { const range = root.querySelector('input'); range.value = spec.answer; root.querySelector('button').click(); }
  if (spec.type === 'number') { root.querySelector('input').value = spec.answer; root.querySelector('button').click(); }
  if (spec.type === 'compare') root.querySelectorAll('button')[spec.options.findIndex(x => x.cheaper)].click();
  if (spec.type === 'swipe') for (const card of spec.cards) {
    clickText(root, t(spec[card.side])); clickText(root, u('next'));
  }
  if (spec.type === 'spot') { const messages=root.querySelectorAll('.msg'); spec.message.lines.forEach((line,i)=>{if(line.suspicious)messages[i].click();}); root.querySelector('.btn-primary').click(); }
  if (spec.type === 'order') for (const step of spec.steps) clickText(root,t(step));
  if (spec.type === 'allocate') {
    const buttons=root.querySelectorAll('.grid button');
    const step=spec.step||100;
    let amount=spec.total;
    while(amount>=step*10){buttons[3].click();amount-=step*10;}
    while(amount>=step){buttons[2].click();amount-=step;}
    assert.equal(amount,0);const check=root.querySelector('.btn-primary');assert.equal(check.disabled,false);check.click();
  }
  if (spec.type === 'rapid') for (const item of spec.items) { clickText(root,u(item.answer?'true':'false'));clock.tick(1500); }
  if (spec.type === 'match') for(const pair of spec.pairs) {clickText(root,t(pair.a));clickText(root,t(pair.b));}
  if (spec.type === 'story') {
    const queue=[{id:spec.start,choices:[]}],seen=new Set();let route;
    while(queue.length){const item=queue.shift();if(seen.has(item.id))continue;seen.add(item.id);const node=spec.nodes[item.id];if(node.outcome){route=item.choices;break;}for(const choice of node.choices||[])queue.push({id:choice.next,choices:[...item.choices,choice]});}
    assert.ok(route);for(const choice of route)clickText(root,t(choice.text));
  }
  clickText(root,u('continue'));
}

test('all 255 authored interactions and 16 drills complete in both languages', async context => {
  context.mock.timers.enable({ apis: ['setTimeout','setInterval'] });
  const specs=[...paths.flatMap(p=>p.lessons.flatMap(l=>l.bites.map(b=>({id:b.id,spec:b.do})))),...drills.map(d=>({id:d.id,spec:d.do}))];
  for(const lang of ['en','tl']){
    set({lang});
    for(const {id,spec} of specs){
      const root=document.createElement('div');document.body.append(root);
      try{let outcome;mount(root,spec).then(value=>{outcome=value;});solve(root,spec,lang,context.mock.timers);await Promise.resolve();assert.ok(outcome,'Interaction did not complete');const {score}=outcome;assert.ok(Number.isFinite(score)&&score>=0&&score<=1,`${id} score`);}
      catch(error){throw new Error(`${id} (${lang}, ${spec.type}): ${error.message}`,{cause:error});}
      finally{dispose(root);root.remove();}
    }
  }
});

test('leaving a timed interaction cancels its callbacks and completion', async context => {
  context.mock.timers.enable({ apis: ['setTimeout','setInterval'] });
  const root=document.createElement('div');document.body.append(root);
  let completed=false;mount(root,drills[0].do).then(()=>{completed=true;});
  dispose(root);root.remove();const html=root.innerHTML;
  context.mock.timers.tick(100000);
  assert.equal(root.innerHTML,html);assert.equal(completed,false);
});
