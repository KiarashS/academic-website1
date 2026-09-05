# Academic website

A personal site for a PhD student, built with [Astro](https://astro.build). Static
output, no client framework, roughly 30 kB of JavaScript in total (a theme toggle,
a publication filter and a copy-to-clipboard button).

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
   canonical tags, Open Graph and the sitemap, so set it to your real domain.
2. `astro.config.mjs` — the same domain, again, in `site`.
3. `public/robots.txt` — the sitemap URL.
4. `public/portrait.svg` — replace with a real photo (`portrait.jpg` works; update
   `site.portrait`). Around 880×1040 covers retina at the size it renders.
5. `public/alex-rivera-cv.pdf` — a placeholder one-pager. Overwrite it with your
   real CV and rename it, then update `site.cvPdf`. The `/cv` page also prints
   cleanly to PDF from a browser.
6. `public/favicon.svg` — the initials in the accent square.
7. `node scripts/make-og.mjs` — regenerates `public/og.png`, the link preview
   image. Edit the strings at the top of the script first.

## Design

One accent colour, `--accent` in `src/styles/global.css`, drives every highlight.
Change it there and the whole site follows. The rest of the palette is a warm
paper background and a near-black ink, with a dark variant defined under
`:root[data-theme='dark']`.

Headings and long text use Newsreader; interface text uses Inter. Both are
self-hosted via Fontsource, so no request leaves the reader's browser.

The theme follows the operating system until a visitor clicks the toggle, after
which the choice is remembered in `localStorage`. The inline script in
`src/layouts/Base.astro` applies it before first paint so there is no flash.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages
on every push to `main`. Enable it under Settings → Pages → Source → GitHub
Actions.

If you serve the site from `https://<user>.github.io/<repo>/` rather than a
custom domain, add `base: '/<repo>'` to `astro.config.mjs`; otherwise every
absolute link will point at the wrong place.

Netlify, Cloudflare Pages and Vercel all work with no configuration: build
command `npm run build`, output directory `dist`.

## Licence

No licence file yet — add one under your own name if you plan to publish the
repository. The placeholder text is yours to delete.
