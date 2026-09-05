// Renders public/og.png, the image shown when someone shares a link to the site.
// Run with:  node scripts/make-og.mjs
//
// Text is rendered with whatever serif fontconfig resolves on the machine that
// runs this, so the result is close to, but not identical to, the Newsreader
// headings on the site itself.

import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const first = 'Alex';
const last = 'Rivera';
const meta = 'PHD CANDIDATE IN COMPUTER SCIENCE / NORTHWOOD UNIVERSITY';
const topics = 'Efficient inference · Quantization · Sparse attention';

const BAND = '#16140f';
const INK = '#f6f1e6';
const SOFT = '#a8a294';
const ACCENT = '#ef8a5e';

// The same sparse causal mask the site uses as its motif.
const hash = (i, j) => {
  let h = (i * 73856093) ^ (j * 19349663);
  return (h ^ (h >>> 13)) >>> 0;
};

const n = 16;
const cell = 17;
const gap = 3;
const originX = 760;
const originY = 150;

let grid = '';
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let fill = INK;
    let opacity = 0.07;
    if (j < 2) {
      fill = ACCENT;
      opacity = 0.85;
    } else if (i - j < 3) {
      opacity = 0.4;
    } else if (hash(i, j) % 11 === 0) {
      fill = ACCENT;
      opacity = 0.5;
    }
    grid += `<rect x="${originX + j * (cell + gap)}" y="${originY + i * (cell + gap)}" width="${cell}" height="${cell}" rx="3" fill="${fill}" opacity="${opacity}"/>`;
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${BAND}"/>
  ${grid}
  <text x="80" y="132" font-family="DejaVu Sans Mono, monospace" font-size="19"
        letter-spacing="3" fill="${SOFT}">${meta}</text>
  <text x="72" y="300" font-family="Charter, Bitstream Charter, Georgia, serif"
        font-size="132" fill="${INK}">${first}</text>
  <text x="82" y="420" font-family="Charter, Bitstream Charter, Georgia, serif"
        font-size="132" fill="${ACCENT}">${last}</text>
  <rect x="80" y="486" width="110" height="3" fill="${ACCENT}"/>
  <text x="80" y="548" font-family="DejaVu Sans, Helvetica, sans-serif"
        font-size="27" fill="${SOFT}">${topics}</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile(new URL('../public/og.png', import.meta.url), png);
console.log(`wrote public/og.png (${(png.length / 1024).toFixed(1)} kB)`);
