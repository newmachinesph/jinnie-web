// Theme-aware blue-and-gold illustrations, with a separate animated ink layer.
import { artwork, plates, pathArt, lampBody, lampLines } from './artwork.js';
const wrap = inner => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

const painted = id => `${plates[id] || ''}<g class="art-lines">${artwork[id]}</g>`;
export const illustrations = Object.fromEntries(Object.keys(artwork).map(id => [id, wrap(painted(id))]));

// Six life-stage compositions reuse the lesson art so exports and UI stay in sync.
for (const [id, [main, left, right]] of Object.entries(pathArt)) {
  illustrations[`path-${id}`] = wrap(`
    <path d="M18 101h204" opacity=".18"/>
    <g transform="translate(4 38) scale(.56)" opacity=".8">${painted(left)}</g>
    <g transform="translate(163 38) scale(.56)" opacity=".8">${painted(right)}</g>
    <g transform="translate(63 0) scale(.95)">${painted(main)}</g>
    <path d="m46 20 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" fill="var(--c-gold, #D4AF37)" stroke="none"/>
    <path d="M191 18v8m-4-4h8" stroke="var(--c-gold, #D4AF37)" stroke-width="1.5"/>
  `).replace('viewBox="0 0 120 120"', 'viewBox="0 0 240 120"');
}

export function illo(id, { draw = false, className = '' } = {}) {
  if (!id) return '';
  if (id.startsWith('new:')) {
    const brief = id.slice(4);
    return `<figure class="illo card flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 p-4 text-center ${className}"><span class="chip">Illustration</span><span class="small">${brief}</span></figure>`;
  }
  const svg = illustrations[id] || illustrations.lamp;
  const character = id === 'jinnie';
  const scene = id.startsWith('path-');
  const sizing = /(?:^|\s)w-/.test(className) ? '' : scene ? 'w-full' : 'w-40';
  return `<figure class="illo ${character ? 'illo-character' : ''} ${scene ? 'illo-scene' : ''} ${draw ? `draw concept-${id}` : ''} mx-auto ${sizing} text-primary ${className}" ${character ? 'style="width: min(100%, 17rem)"' : ''}>${svg}</figure>`;
}

// The lamp that fills with light. Unique clips support multiple wishes on one screen.
let lampInstance = 0;
export function lamp(pct, { granted = false } = {}) {
  const p = Math.max(0, Math.min(1, pct));
  const color = granted ? 'var(--c-accent)' : 'var(--c-primary)';
  const clip = `lampclip-${++lampInstance}`;
  return `<svg viewBox="0 0 120 120" class="w-full h-auto" role="img" aria-label="Lamp ${Math.round(p * 100)}% full">
    <defs><clipPath id="${clip}"><path d="${lampBody}"/></clipPath></defs>
    <path d="${lampBody}" fill="${color}" opacity=".06"/>
    <g clip-path="url(#${clip})"><rect class="lamp-fill" x="12" y="48" width="96" height="58" fill="${color}" opacity="0.25" style="transform: scaleY(${p})"/></g>
    <g fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${lampLines}
      ${p >= 1 ? '<path d="M56 32v-9M41 38l-6-6M72 38l6-6"/>' : ''}
    </g></svg>`;
}
