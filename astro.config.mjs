// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const siteUrl = process.env.SITE_URL || 'https://example.com';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [mdx(), sitemap()],
});
