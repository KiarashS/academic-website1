# Academic website

A personal site for a PhD student, built with [Astro](https://astro.build). Static
output, no client framework: one 16 kB JavaScript file (Astro's view-transition
router) plus a few inlined kilobytes for the theme toggle, the publication filter,
the BibTeX copy buttons and the scroll reveals.

The content that ships with it is placeholder. Alex Rivera is not a real person,
Northwood University is not a real university, and every arXiv link points at
`0000.00000`.

## Running it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/
```

## Where the content lives

All of it is in `src/data/`. You should not need to touch a `.astro` file to keep
the site current.

| File | What it holds |
| --- | --- |
| `site.ts` | Your name, affiliation, email, profile links, navigation |
| `publications.ts` | Every paper, including its BibTeX |
| `news.ts` | The dated lines on the home page |
| `research.ts` | The three "what I work on" blurbs |
| `talks.ts` | Talks, seminars and posters |
| `teaching.ts` | Courses and mentees |
| `projects.ts` | Software and datasets |
| `cv.ts` | Education, experience, awards, service, skills |

### Adding a paper

Add an entry at the top of the array in `src/data/publications.ts`. Nothing sorts
it for you — the array order is the page order.

```ts
{
  id: 'short-slug-2027',          // becomes the #anchor, so keep it stable
  title: 'Title Case Like This',
  authors: ['Alex Rivera', 'Coauthor Name'],   // trailing * = equal contribution
  venue: 'NeurIPS 2027',
  venueLong: 'Conference on Neural Information Processing Systems',
  year: 2027,
  kind: 'conference',             // conference | journal | workshop | preprint | thesis
  note: 'Oral',                   // optional badge
  summary: 'One or two sentences. What you did, and the number that matters.',
  links: [{ label: 'PDF', href: '/papers/thing.pdf' }],
  bibtex: `@inproceedings{...}`,
  selected: true,                 // shows on the home page
}
```

Your own name is emphasised automatically wherever it matches `site.name`, so
spell it identically in every entry. The `/publications.bib` route concatenates
every `bibtex` field into one downloadable file.

## What to change first

1. `src/data/site.ts` — name, email, affiliation, links. The `url` field feeds
   the JSON-LD block and the address printed on the CV.
2. `astro.config.mjs` — `site` (the origin) and `base` (the sub-path). See
   **Deploying** below; getting these wrong is what breaks the stylesheet.
3. `public/robots.txt` — the sitemap URL.
4. `public/portrait.svg` — replace with a real photo (`portrait.jpg` works; update
   `site.portrait`). Around 880×1040 covers retina at the size it renders. It is
   rendered as a duotone in the accent colour and returns to full colour on
   hover, so a photo with a clear tonal range works better than a flat one.
5. `public/alex-rivera-cv.pdf` — a placeholder one-pager. Overwrite it with your
   real CV and rename it, then update `site.cvPdf`. The `/cv` page also prints
   cleanly to PDF from a browser.
6. `public/favicon.svg` — the initials in the accent square.
7. `node scripts/make-og.mjs` — regenerates `public/og.png`, the link preview
   image. Edit the strings at the top of the script first.

## Design

**Two grounds.** Reading sections sit on warm paper (`--paper`); heroes, page
headers, the contact block and the footer are full-bleed dark bands (`--band`).
Add `class="band"` to a section and every token inside it flips — headings,
labels, pills, chips and links all have band variants in `global.css`. The
alternation is what gives the page its rhythm; a site that is beige from top to
bottom reads as a document, not a design.

**One accent.** `--accent` drives every highlight: the name, the numerals, the
rails that slide in on hover, the filter chips. Change that one value in
`src/styles/global.css` and the whole site follows. Bands use `--accent-on-band`,
a lighter tint that holds up on near-black.

**A type scale with real jumps in it.** `--t-display` (up to 9.5rem) down to
`--t-label` (0.7rem), all fluid. Newsreader with optical sizing for anything
large, Inter for interface text, and a monospace `.label` in letterspaced caps as
the connective tissue between sections. Fonts are self-hosted via Fontsource, so
no request leaves the reader's browser.

**One graphic device.** `src/components/AttentionGrid.astro` draws a sparse
causal attention mask — two sink columns, a local band along the diagonal, a
scattering of routed blocks — deterministically, so it does not change between
builds. It appears large in the hero, medium in every page header, and small and
still in the footer. If your research is not about attention, replace this
component with a motif that means something for your own work; the rest of the
design does not depend on what it draws.

**Full-width editorial rows.** Publications, projects, courses, talks and news
all use the same grid: an index in the gutter, the title block, a second column
carrying the detail, and metadata flush right. Hovering slides an accent rail in
from the left and nudges the row over.

The theme follows the operating system until a visitor clicks the toggle, after
which the choice is remembered in `localStorage`. The inline script in
`src/layouts/Base.astro` applies it before first paint, so there is no flash.

Sections fade in as they scroll into view. That is a progressive enhancement: the
`opacity: 0` rule is scoped to `html.js`, a class the head script adds, so if the
bundle never loads the page renders in full. A three-second timer reveals
everything regardless, and `prefers-reduced-motion` turns the whole thing off.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages
on every push to `main`. Enable it under Settings → Pages → Source → GitHub
Actions.

**`site` and `base` have to match where the site is actually served from.** A
GitHub Pages *project* site lives under a sub-path, and if `base` is unset every
stylesheet, script and image resolves against the domain root and 404s — the page
renders as unstyled HTML.

```js
// https://<user>.github.io/<repo>/
site: 'https://<user>.github.io',
base: '/<repo>',

// https://example.com/ — a custom domain, or a <user>.github.io user site
site: 'https://example.com',
// drop `base` entirely
```

Astro rewrites the URLs it generates itself (bundled CSS, JS, fonts) but not
hrefs written by hand in templates, so every internal link in this project goes
through `url()` in `src/lib/url.ts`. Keep using it for links you add and moving
between the two layouts stays a one-line change.

Netlify, Cloudflare Pages and Vercel serve from the domain root: set `site` and
remove `base`. Build command `npm run build`, output directory `dist`.

## Licence

No licence file yet — add one under your own name if you plan to publish the
repository. The placeholder text is yours to delete.
