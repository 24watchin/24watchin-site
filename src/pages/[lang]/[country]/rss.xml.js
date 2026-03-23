import rss from '@astrojs/rss';

// ▼ 購読用ファイルを作成する言語・地域の組み合わせ
export async function getStaticPaths() {
  return [
    { params: { lang: 'ja',    country: 'jp' } },
    { params: { lang: 'en',    country: 'jp' } },
    { params: { lang: 'en',    country: 'us' } },
    { params: { lang: 'en',    country: 'ae' } },
    { params: { lang: 'zh-cn', country: 'jp' } },
    { params: { lang: 'zh-tw', country: 'jp' } },
    { params: { lang: 'es',    country: 'jp' } },
    { params: { lang: 'fr',    country: 'jp' } },
    { params: { lang: 'de',    country: 'jp' } },
    { params: { lang: 'ru',    country: 'jp' } },
    { params: { lang: 'de',    country: 'de' } },
    { params: { lang: 'fr',    country: 'fr' } },
  ];
}

export async function GET(context) {
  const { lang, country } = context.params;
  const API_KEY = import.meta.env.API_KEY;

  // ▼ 表示している言語に合わせて、Cloudflare上の適切なブログIDを選択します
  const blogIdMap = {
    ja: 'BLOG_ID_JA',
    en: 'BLOG_ID_EN',
    de: 'BLOG_ID_DE',
    fr: 'BLOG_ID_FR',
    es: 'BLOG_ID_ES',
    ru: 'BLOG_ID_RU',
    'zh-cn': 'BLOG_ID_ZH_CN',
    'zh-tw': 'BLOG_ID_ZH_TW'
  };

  const envKey = blogIdMap[lang] || 'BLOG_ID_JA';
  const BLOG_ID = import.meta.env[envKey] || import.meta.env.BLOG_ID;

  // ▼ Bloggerから、その言語・地域のタグがついた最新記事だけを直接取得します
  const targetTag = `${lang}-${country}`;
  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&labels=${targetTag}&maxResults=100`;

  const response = await fetch(url);
  const data = await response.json();
  const articles = data.items || [];

  return rss({
    title: `24Watchin - ${lang.toUpperCase()}/${country.toUpperCase()}`,
    description: 'Global News Media for International Residents',
    // サイトの住所を各言語のトップページに合わせます
    site: `https://24watchin.com/${lang}/${country}/`,
    items: articles.map((article) => ({
      title: article.title,
      pubDate: new Date(article.published),
      // ニュース記事へのリンクも各言語のページを向くようにします
      link: `/${lang}/${country}/news/${article.id}/`,
    })),
  });
}
