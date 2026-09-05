// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to your real domain before deploying. It is used for the
// sitemap, canonical URLs and Open Graph tags.
export default defineConfig({
  site: 'https://alexrivera.example',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  markdown: { shikiConfig: { theme: 'github-light' } },
});
