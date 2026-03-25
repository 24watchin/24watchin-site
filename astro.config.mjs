// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';

const siteUrl = process.env.SITE_URL || 'https://24watchin.com';

export default defineConfig({
  site: siteUrl,
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
});
