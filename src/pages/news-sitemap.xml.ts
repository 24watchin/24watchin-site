// src/pages/news-sitemap.xml.ts
// Google News 向けニュースサイトマップ
// Blogger APIから48時間以内の記事を取得して自動生成

import { langCountryPairs, getBlogId } from '../lib/siteRoutes';

const SITE_URL = 'https://24watchin.com';
const API_KEY = import.meta.env.API_KEY;

// 言語コード → ISO 639言語コードマッピング
const langToISO: Record<string, string> = {
  ja: 'ja', en: 'en', 'zh-cn': 'zh-cn', 'zh-tw': 'zh-tw',
  es: 'es', fr: 'fr', de: 'de', ru: 'ru',
};

export async function GET() {
  try {
    // 全言語のブログIDを取得（重複なし）
    const langs = [...new Set(langCountryPairs.map(p => p.lang))];

    // 全言語の記事を並列取得
    const allPostsResult = await Promise.all(
      langs.map(async (lang) => {
        const blogId = getBlogId(lang);
        try {
          const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${API_KEY}&maxResults=50&orderBy=published`;
          const res = await fetch(url);
          if (!res.ok) return { lang, posts: [] };
          const data = await res.json();
          return { lang, posts: data.items || [] };
        } catch {
          return { lang, posts: [] };
        }
      })
    );

    // 48時間以内の記事のみ抽出
    const now = new Date();
    const cutoff = new Date(now.getTime() - 48 * 60 * 60 * 1000);

    const newsItems: string[] = [];

    for (const { lang, posts } of allPostsResult) {
      for (const post of posts) {
        const publishedDate = new Date(post.published);
        if (publishedDate < cutoff) continue;

        // この記事に対応する国を特定
        const matchedPairs = langCountryPairs.filter(pair => {
          if (pair.lang !== lang) return false;
          return post.labels?.some((label: string) =>
            label.toLowerCase() === `${lang}-${pair.country}`.toLowerCase()
          );
        });

        for (const pair of matchedPairs) {
          const articleUrl = `${SITE_URL}/${pair.lang}/${pair.country}/news/${post.id}/`;
          const isoLang = langToISO[lang] || lang;
          const pubDate = new Date(post.published).toISOString();
          const title = post.title
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');

          newsItems.push(`
  <url>
    <loc>${articleUrl}</loc>
    <news:news>
      <news:publication>
        <news:name>24Watchin</news:name>
        <news:language>${isoLang}</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${title}</news:title>
    </news:news>
  </url>`);
        }
      }
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsItems.join('\n')}
</urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=300', // 5分キャッシュ
      },
    });

  } catch (e) {
    console.error('News sitemap generation error:', e);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
      { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
    );
  }
}
