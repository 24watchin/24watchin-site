import rss from '@astrojs/rss';

// ▼ どの言語・地域の組み合わせでRSSを作るかを指定します
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
  const BLOG_ID = import.meta.env.BLOG_ID;
  
  // Bloggerから全記事を取得
  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const allArticles = data.items || [];

  // ▼ 現在の「言語-地域」（例：ja-jp）のタグがついている記事だけを絞り込みます
  const targetTag = `${lang}-${country}`;
  const filteredArticles = allArticles.filter(article => 
    article.labels && article.labels.includes(targetTag)
  );

  return rss({
    // タイトルも言語に合わせて変えたい場合はここを修正できます
    title: `24Watchin - ${lang.toUpperCase()}/${country.toUpperCase()}`,
    description: 'Global News Media for International Residents',
    // ★ サイトの住所を現在の言語・地域に合わせます
    site: `https://24watchin.com/${lang}/${country}/`, 
    items: filteredArticles.map((article) => ({
      title: article.title,
      pubDate: new Date(article.published),
      // ★ 記事のリンク先も現在の言語・地域のニュースページへ案内します
      link: `/${lang}/${country}/news/${article.id}/`, 
    })),
  });
}
