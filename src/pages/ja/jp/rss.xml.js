import rss from '@astrojs/rss';

export async function GET(context) {
  const API_KEY = import.meta.env.API_KEY;
  const BLOG_ID = import.meta.env.BLOG_ID;
  
  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  const articles = data.items || [];

  return rss({
    title: '24Watchin - 全世界の最新ニュース',
    description: 'AIが届ける、世界と日本の今',
    // ★ サイト全体の住所を最新版に修正
    site: 'https://24watchin.com/ja/jp/', 
    items: articles.map((article) => ({
      title: article.title,
      pubDate: new Date(article.published),
      // ★ 記事のリンク先も最新版（/ja/jp/）に修正
      link: `/ja/jp/news/${article.id}/`, 
    })),
  });
}
