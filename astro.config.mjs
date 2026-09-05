// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Canonical origin. Used for sitemap.xml, canonical links, and absolute OG URLs.
  site: 'https://theenginefactory.com',
  // Build output goes to ./dist, which is what wrangler.jsonc serves as static assets.
  outDir: './dist',
  // build.format is left at Astro's default ("directory"), so pages are emitted as
  // partners/index.html and served by Cloudflare at /partners/.
  integrations: [
    sitemap({
      // /datenschutz/ and /impressum/ are noindex, so they stay out of the sitemap.
      filter: (page) =>
        !page.includes('/impressum') && !page.includes('/datenschutz'),
    }),
  ],
  markdown: {
    // Off so markdown bodies keep their punctuation exactly as typed. With this on,
    // Astro rewrites straight apostrophes and quotes into curly ones, which would
    // silently change the migrated copy.
    smartypants: false,
  },
});
