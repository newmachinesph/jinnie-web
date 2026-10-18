// Export the same SVG sources consumed by the app, for reuse in design tools.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { illustrations } from '../assets/illustrations.js';
import { icons } from '../src/ui.js';

// Embed the generated character in standalone SVG exports so they open anywhere.
const character = await readFile(new URL('../assets/characters/jinnie.png', import.meta.url));
const embedCharacter = svg => svg.replace('assets/characters/jinnie.png', `data:image/png;base64,${character.toString('base64')}`);

for (const [folder, assets] of [['illustrations', illustrations], ['icons', icons]]) {
  await mkdir(new URL(`../assets/${folder}/`, import.meta.url), { recursive: true });
  for (const [id, markup] of Object.entries(assets)) {
    const svg = (markup.includes('xmlns=') ? markup : markup.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ')).replace('<svg ', '<svg color="#4338CA" ');
    await writeFile(new URL(`../assets/${folder}/${id}.svg`, import.meta.url), embedCharacter(svg));
  }
}

const logo = illustrations.lamp.replace('<svg ', '<svg color="#4338CA" ').replace('aria-hidden="true"', 'role="img" aria-label="Jinnie"');
await writeFile(new URL('../assets/logo.svg', import.meta.url), logo);

const cells = Object.entries(illustrations).map(([id, markup], index) => {
  const svg = embedCharacter(markup);
  const x = (index % 4) * 200 + 24;
  const y = Math.floor(index / 4) * 200 + 100;
  return `<g transform="translate(${x} ${y})"><rect width="184" height="184" rx="4" fill="#fff" stroke="#e4e4ed"/>${svg.replace('<svg ', '<svg x="32" y="16" width="120" height="120" ')}<text x="92" y="166" text-anchor="middle" fill="#6b7280" font-size="13">${id}</text></g>`;
}).join('');
await writeFile(new URL('../assets/visual-assets.svg', import.meta.url), `<svg xmlns="http://www.w3.org/2000/svg" width="840" height="1520" viewBox="0 0 840 1520" color="#4338ca" font-family="system-ui,sans-serif"><rect width="840" height="1520" fill="#f7f7fb"/><text x="24" y="44" fill="#312e81" font-size="24" font-weight="600">Jinnie · Finlit</text><text x="24" y="72" fill="#6b7280" font-size="14">Illustration library · 金 · Theme-aware vector artwork</text>${cells}</svg>`);
console.log(`Exported ${Object.keys(illustrations).length} illustrations, ${Object.keys(icons).length} icons, logo, and contact sheet.`);
