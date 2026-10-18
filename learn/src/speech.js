// Bundled narration first; device speech is the fallback. No learner text is uploaded.
import { get } from './store.js';
import { assetPath } from './urls.js';
import { spokenText } from './speech-text.js';

let voices = [];
let player, generation = 0, manifest;
function loadVoices() {
  try { voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : []; } catch { voices = []; }
}
if (typeof window !== 'undefined' && window.speechSynthesis) {
  loadVoices();
  window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
}

function pick(lang) {
  const want = lang === 'tl' ? ['fil-PH', 'fil', 'tl-PH', 'tl', 'en-PH'] : ['en-PH', 'en-US', 'en-GB', 'en'];
  for (const code of want) {
    const v = voices.find(v => (v.lang || '').toLowerCase().startsWith(code.toLowerCase()));
    if (v) return v;
  }
  return null;
}

export const canSpeak = () => typeof window !== 'undefined' && ('Audio' in window || 'speechSynthesis' in window);
const isHidden = () => (typeof document !== 'undefined' && document.hidden) || (typeof window !== 'undefined' && window.__JINNIE_LEARN_HIDDEN__ === true);

function synthesize(text) {
  if (!window.speechSynthesis || isHidden()) return;
  const lang = get().lang;
  const utt = new SpeechSynthesisUtterance(spokenText(text, lang));
  const v = pick(lang);
  if (v) utt.voice = v;
  utt.lang = v ? v.lang : (lang === 'tl' ? 'fil-PH' : 'en-PH');
  utt.rate = 0.95;
  utt.pitch = 1;
  window.speechSynthesis.speak(utt);
}

export function stop() {
  generation++;
  if (player) { player.pause(); player.removeAttribute('src'); player.load(); player = null; }
  if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
}

export async function narrationManifest() {
  if (!manifest) manifest = fetch(assetPath('assets/audio/manifest.json'))
    .then(r => { if (!r.ok) throw new Error('Narration unavailable'); return r.json(); })
    .catch(error => { manifest = null; throw error; });
  return manifest;
}

export async function narrationKey(text, lang) {
  const data = new TextEncoder().encode(lang + '\0' + text.replace(/\s+/g, ' ').trim());
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)].map(x => x.toString(16).padStart(2, '0')).join('').slice(0, 24);
}

export async function speak(text) {
  if (!canSpeak() || !text || isHidden()) return;
  stop();
  const ticket = generation, lang = get().lang;
  try {
    const [index, key] = await Promise.all([narrationManifest(), narrationKey(text, lang)]);
    if (ticket !== generation || isHidden()) return;
    if (!index[key]) return synthesize(text);
    player = new Audio(assetPath(index[key].src));
    await player.play();
  } catch { if (ticket === generation) synthesize(text); }
}
