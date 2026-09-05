import type { APIRoute } from 'astro';
import { publications } from '../data/publications';
import { site } from '../data/site';

// Serves every entry as one .bib file at /publications.bib
export const GET: APIRoute = () => {
  const header = `% BibTeX entries for the publications of ${site.name}\n% ${site.url}\n% Generated ${new Date().toISOString().slice(0, 10)}\n\n`;
  const body = publications
    .filter((p) => p.bibtex)
    .map((p) => p.bibtex!.trim())
    .join('\n\n');

  return new Response(header + body + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
