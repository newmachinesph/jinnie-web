import {test} from 'node:test';
import assert from 'node:assert/strict';
import {paths,nextBite} from '../content/index.js';
import {get,reset,set,addWish,fundWish,localDay} from '../src/store.js';
import {parseBackup} from '../src/backup.js';
import {certificateSvg} from '../src/certificate.js';
import {openInHost} from '../src/host.js';

test('Continue respects the learner age path and placement starting lesson',()=>{
  reset();set({band:'first',family:true});assert.equal(nextBite(get()).path.id,'first');
  set({placed:{path:'securing',startAt:3}});assert.equal(nextBite(get()).lesson.id,paths.find(p=>p.id==='securing').lessons[2].id);
});
test('invalid savings amounts cannot corrupt a wish',()=>{
  reset();addWish({key:'w',kind:'have',title:{en:'Goal',tl:'Goal'},amount:100});
  for(const amount of [NaN,Infinity,-20,0])fundWish('w',amount);
  assert.equal(get().wishes[0].saved,0);
});
test('commitment day uses the local calendar',()=>{
  const date={getFullYear:()=>2026,getMonth:()=>8,getDate:()=>11};assert.equal(localDay(date),'2026-09-11');
});
test('backup roundtrip preserves valid progress and rejects malformed data',()=>{
  reset();const backup={app:'jinnie-learn',version:1,state:get()};
  assert.deepEqual(parseBackup(JSON.stringify(backup)),get());
  assert.throws(()=>parseBackup('{}'));
  assert.throws(()=>parseBackup(JSON.stringify({...backup,state:{...get(),wishes:null}})));
  for(const key of ['drills','events'])assert.throws(()=>parseBackup(JSON.stringify({...backup,state:{...get(),[key]:[null]}})));
  assert.throws(()=>parseBackup(JSON.stringify({...backup,state:{...get(),review:{x:null}}})));
  assert.throws(()=>parseBackup(JSON.stringify({...backup,state:{...get(),commitments:{x:{days:7,marks:[{}]}}}})));
});
test('certificates list the actual competencies and cannot be issued before passing',()=>{
  const p=paths[0];assert.throws(()=>certificateSvg(p,{passed:false,at:Date.now()}));
  const svg=certificateSvg(p,{passed:true,at:1700000000000});
  assert.ok(svg.includes('Local completion record'));assert.ok(svg.includes('JL-KIDS-'));
  assert.equal((svg.match(/<svg/g)||[]).length,1);assert.ok(svg.includes('You can now'));
});
test('every authored app action opens its requested host destination',async()=>{
  const opened=[];const previous=globalThis.window;
  globalThis.window={JinnieLearnHost:{openApp:async app=>{opened.push(app);return true;}}};
  try{
    const actions=paths.flatMap(p=>p.lessons.flatMap(l=>l.bites.map(b=>b.keep.action))).filter(a=>a?.kind==='open');
    for(const a of actions)assert.equal(await openInHost(a.payload.app,a.label),'open');
    assert.deepEqual(opened,actions.map(a=>a.payload.app));
    assert.equal(await openInHost('unknown',{}),false);
  }finally{if(previous===undefined)delete globalThis.window;else globalThis.window=previous;}
});
