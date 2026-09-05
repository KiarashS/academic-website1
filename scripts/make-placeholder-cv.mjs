// Writes a one-page placeholder PDF so /alex-rivera-cv.pdf is not a dead link
// before you drop in the real thing. Replace public/*-cv.pdf with your own
// export and delete this script.
//
// Run with:  node scripts/make-placeholder-cv.mjs

import { writeFile } from 'node:fs/promises';

const lines = [
  ['/F1 26 Tf', 'Alex Rivera'],
  ['/F2 12 Tf', 'PhD Candidate in Computer Science, Northwood University'],
  ['/F2 12 Tf', 'arivera@cs.northwood.edu'],
  ['', ''],
  ['/F2 12 Tf', 'This is a placeholder. Export your real CV to PDF and overwrite'],
  ['/F2 12 Tf', 'public/alex-rivera-cv.pdf, or print the /cv page to PDF from a browser.'],
];

let y = 720;
const content =
  'BT\n' +
  lines
    .map(([font, text]) => {
      const chunk = text
        ? `${font} 1 0 0 1 72 ${y} Tm (${text.replace(/([()\\])/g, '\\$1')}) Tj\n`
        : '';
      y -= text ? (font.includes('26') ? 34 : 20) : 14;
      return chunk;
    })
    .join('') +
  'ET\n';

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>',
  `<< /Length ${content.length} >>\nstream\n${content}endstream`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
];

let pdf = '%PDF-1.4\n';
const offsets = [0];
objects.forEach((body, i) => {
  offsets.push(pdf.length);
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefStart = pdf.length;
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

await writeFile(new URL('../public/alex-rivera-cv.pdf', import.meta.url), pdf, 'latin1');
console.log('wrote public/alex-rivera-cv.pdf');
