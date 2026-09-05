// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `site` is the origin, `base` the sub-path the site is served from.
//
// GitHub Pages project site (https://<user>.github.io/<repo>/):
//   site: 'https://<user>.github.io', base: '/<repo>'
// Custom domain or user site (https://example.com/):
//   site: 'https://example.com', base: '/'  — or drop `base` entirely.
//
// Internal links are written through src/lib/url.ts, so changing `base` here
// is all that is needed to move the site between the two.
export default defineConfig({
  site: 'https://kiarashs.github.io',
  base: '/academic-website1',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  markdown: { shikiConfig: { theme: 'github-light' } },
});
