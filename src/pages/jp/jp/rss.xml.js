import rss from '@astrojs/rss';

export async function GET(context) {
  // Cloudflareの金庫から合言葉を取り出します
  const API_KEY = import.meta.env.API_KEY;
  const BLOG_ID = import.meta.env.BLOG_ID;
  
  // Google（Blogger）に最新記事をお願いするための専用URLを作ります
  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;

  // 最新の記事リストをもらってきます
  const response = await fetch(url);
  const data = await response.json();
  const articles = data.items || [];

  // もらってきた記事を、お知らせ係（RSS）が読める形に翻訳して渡します
  return rss({
    title: '24Watchin - 全世界の最新ニュース',
    description: 'AIが届ける、世界と日本の今',
    site: 'https://24watchin.com/jp/jp/', // ★ サイト全体の住所も日本版に修正しました！
    items: articles.map((article) => ({
      title: article.title,
      pubDate: new Date(article.published),
      link: `/jp/jp/news/${article.id}/`, // ★ 記事のリンク先も日本版（/jp/jp/）に修正しました！
    })),
  });
}
