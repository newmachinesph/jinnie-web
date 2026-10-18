import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { paths } from '../content/index.js';
import { spokenText } from '../src/speech-text.js';

const jobs = new Map();
const add = (path, lang, text) => {
  text = text.replace(/\s+/g, ' ').trim();
  const key = createHash('sha256').update(lang + '\0' + text).digest('hex').slice(0, 24);
  if (!jobs.has(key)) jobs.set(key, { key, path, paths: [path], lang, text, spokenText: spokenText(text, lang), file: `assets/audio/${path}/${key}.mp3` });
  else if (!jobs.get(key).paths.includes(path)) jobs.get(key).paths.push(path);
  return key;
};
const videos = [];
for (const p of paths) for (const lang of ['en', 'tl']) {
  for (const lesson of p.lessons) for (const bite of lesson.bites) {
    for (const text of [bite.hook.text[lang], [bite.show.text[lang], ...(bite.show.points || []).map(x => x[lang])].join(' '), bite.do.prompt?.[lang], bite.keep.text[lang]].filter(Boolean)) add(p.id, lang, text);
  }
  const first = p.lessons[0].bites[0];
  const scenes = [
    { art: `path-${p.id}`, text: p.intro.text[lang] },
    { art: first.hook.illo, text: first.hook.text[lang] },
    { art: 'jinnie', text: first.keep.text[lang] },
  ].map(s => ({ ...s, audio: add(p.id, lang, s.text) }));
  videos.push({ id: p.id, lang, title: p.title[lang], scenes });
}
await mkdir(new URL('../assets/audio/', import.meta.url), { recursive: true });
await writeFile(new URL('../assets/audio/jobs.json', import.meta.url), JSON.stringify([...jobs.values()], null, 2));
await writeFile(new URL('../assets/audio/video-scenes.json', import.meta.url), JSON.stringify(videos, null, 2));
console.log(`${jobs.size} narration clips, ${videos.length} localized intro videos; original text preserved with currency normalized for speech.`);
