import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { illustrations } from '../assets/illustrations.js';
const root = new URL('../', import.meta.url);
await mkdir(new URL('.tmp/media-art/', root), { recursive: true });
for (const [name, markup] of Object.entries(illustrations)) {
  if (name === 'jinnie') continue;
  const svg = markup.replace('<svg ', '<svg color="#4338CA" ');
  await sharp(Buffer.from(svg), { density: 180 }).resize(640, 640, { fit: 'contain', background: '#00000000' }).png().toFile(new URL(`.tmp/media-art/${name}.png`, root).pathname.replace(/^\/(.:)/, '$1'));
}
const icon = await readFile(new URL('assets/icon.svg', root));
for (const size of [192, 512]) await sharp(icon).resize(size, size).png().toFile(new URL(`assets/icon-${size}.png`, root).pathname.replace(/^\/(.:)/, '$1'));
console.log('Rendered video illustration layers and install icons.');
