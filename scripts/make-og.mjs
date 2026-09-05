// Renders public/og.png, the image shown when someone shares a link to the site.
// Run with:  node scripts/make-og.mjs
// Text is rendered with whatever serif fontconfig resolves, so the result will
// look close to, but not identical to, the site's Newsreader headings.

import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const name = 'Alex Rivera';
const tagline = 'PhD Candidate in Computer Science';
const affiliation = 'Northwood University';
const topics = 'Efficient inference · Quantization · Sparse attention';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#faf8f4"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#e7e2d7" stroke-width="2"/>
  <rect x="96" y="96" width="72" height="72" rx="16" fill="#b0492b"/>
  <text x="132" y="147" text-anchor="middle" font-family="Charter, Bitstream Charter, Georgia, serif"
        font-size="34" font-weight="bold" fill="#faf8f4">AR</text>
  <text x="96" y="330" font-family="Charter, Bitstream Charter, Georgia, serif"
        font-size="104" fill="#191713">${name}</text>
  <rect x="96" y="372" width="120" height="4" fill="#b0492b"/>
  <text x="96" y="440" font-family="DejaVu Sans, Helvetica, sans-serif"
        font-size="32" fill="#56534b">${tagline}</text>
  <text x="96" y="486" font-family="DejaVu Sans, Helvetica, sans-serif"
        font-size="32" fill="#56534b">${affiliation}</text>
  <text x="96" y="552" font-family="DejaVu Sans, Helvetica, sans-serif"
        font-size="22" fill="#8d887d">${topics}</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile(new URL('../public/og.png', import.meta.url), png);
console.log(`wrote public/og.png (${(png.length / 1024).toFixed(1)} kB)`);
