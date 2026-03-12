import rss from '@astrojs/rss';

export async function GET(context) {
  const API_KEY = import.meta.env.API_KEY;
  const BLOG_ID = import.meta.env.BLOG_ID;
  
  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  const articles = data.items || [];

  return rss({
    title: '24Watchin - 全世界の最新ニュース (日本版)',
    description: 'AIが届ける、世界と日本の今を日本語でお届けします',
    site: 'https://24watchin.com/jp/jp/', // サイトのトップも日本版のURLに
    items: articles.map((article) => ({
      title: article.title,
      pubDate: new Date(article.published),
      link: `/jp/jp/news/${article.id}/`, // 記事の住所を /jp/jp/ 込みに修正
    })),
  });
}
