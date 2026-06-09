// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
  // The canonical site URL. Used for sitemap, canonical tags, and Open Graph.
  // Edit `url` in src/config/site.ts to change this in one place.
  site: SITE.url,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
