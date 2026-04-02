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
  
  // リダイレクト設定の強化版
  redirects: {
    // 旧 info 階層へのアクセスを、実体のある英語の About ページへ集約します
    '/info': '/en/info/about',
    '/info/': '/en/info/about/',
    
    // 英語階層の「中身のない info」へアクセスが来ても About へ飛ばします
    '/en/info': '/en/info/about',
    '/en/info/': '/en/info/about/',

    // その他、各サブページへの直接アクセスも正しい英語階層へ
    '/info/contact': '/en/info/contact',
    '/info/terms': '/en/info/terms',
    '/info/privacy': '/en/info/privacy',
    '/info/copyright': '/en/info/copyright',
    '/info/corrections': '/en/info/corrections',
  },
});
