import { esc, h } from './ui.js';
import { t } from './i18n.js';
import { lampLines } from '../assets/artwork.js';
import { saveNativeFile } from './embed.js';

export function certificateSvg(path, check, lang = 'en') {
  if (!check?.passed || !Number.isFinite(check.at)) throw new Error('Certificate not earned');
  const text = value => value?.[lang] || value?.en || '';
  const lines = [];
  for (const lesson of path.lessons) {
    const words = text(lesson.competency).split(/\s+/);
    let line = '';
    for (const word of words) {
      if ((line + ' ' + word).trim().length > 68 && line) { lines.push(line); line = word; }
      else line = (line + ' ' + word).trim();
    }
    lines.push(line, '');
  }
  const height = Math.max(960, 480 + lines.length * 28);
  const code = `JL-${path.id.toUpperCase()}-${Math.trunc(check.at).toString(36).toUpperCase()}`;
  const date = new Date(check.at).toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="${height}" viewBox="0 0 800 ${height}" font-family="Arial, sans-serif">
    <rect width="800" height="${height}" fill="#F7F7FB"/>
    <rect x="24" y="24" width="752" height="${height - 48}" rx="12" fill="#FFFFFF" stroke="#D4AF37" stroke-width="3"/>
    <path d="M24 130H776" stroke="#E4E4ED"/>
    <g transform="translate(48 14) scale(.85)" fill="none" stroke="#4338CA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${lampLines}</g>
    <text x="160" y="78" fill="#312E81" font-size="28" font-weight="700">Jinnie Learn</text>
    <text x="160" y="107" fill="#6B7280" font-size="16">${lang === 'tl' ? 'Tala ng pagkumpleto sa device' : 'Local completion record'}</text>
    <text x="60" y="190" fill="#312E81" font-size="38" font-weight="700">${esc(text(path.title))}</text>
    <text x="60" y="228" fill="#6B7280" font-size="18">${esc(date)}</text>
    <text x="60" y="280" fill="#A16207" font-size="18" font-weight="700">${lang === 'tl' ? 'Kaya mo na' : 'You can now'}</text>
    ${lines.map((line, i) => `<text x="60" y="${320 + i * 28}" fill="#111827" font-size="17">${esc(line)}</text>`).join('')}
    <path d="M60 ${height - 118}H740" stroke="#E4E4ED"/>
    <text x="60" y="${height - 83}" fill="#312E81" font-size="16">${code}</text>
    <text x="60" y="${height - 54}" fill="#6B7280" font-size="13">${lang === 'tl' ? 'Tala sa device na ito. Hindi propesyonal na kwalipikasyon.' : 'Recorded on this device. Not a professional qualification.'}</text>
  </svg>`;
}

export async function downloadBlob(blob, name) {
  if (await saveNativeFile(blob, name)) return;
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url; link.download = name;
  document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function certificateButton(path, check, lang) {
  return h('button', { class: 'btn-ghost mt-3 w-full', onclick: () => downloadBlob(new Blob([certificateSvg(path, check, lang)], { type: 'image/svg+xml;charset=utf-8' }), `jinnie-${path.id}-certificate.svg`) }, t({ en: 'Download certificate', tl: 'I-download ang sertipiko' }));
}
