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
  // ここから下を追加しました。/info/ へのアクセスを /en/info/ へ転送する設定です。
  redirects: {
    '/info': '/en/info',
    '/info/contact': '/en/info/contact',
    '/info/about': '/en/info/about',
    '/info/terms': '/en/info/terms',
    '/info/privacy': '/en/info/privacy',
    '/info/copyright': '/en/info/copyright',
    '/info/corrections': '/en/info/corrections',
  },
});
