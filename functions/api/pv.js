export async function onRequestPost(context) {
  // 1. 必要な道具（リクエストの情報と、KVのメモ帳）を準備します
  const { request, env } = context;

  // 2. アクセスしてきた相手の「身分証（ユーザーエージェント）」を確認します
  const userAgent = request.headers.get('user-agent') || '';
  
  // 有名なロボットの名前リストです
  const bots = ['googlebot', 'bingbot', 'yandex', 'duckduckbot', 'slurp', 'baiduspider', 'ahrefs', 'petalbot'];
  
  // 身分証にロボットの名前が含まれているかチェックします
  const isBot = bots.some(bot => userAgent.toLowerCase().includes(bot));

  if (isBot) {
    // ロボットの場合は、数字を増やさずに「受付完了」として追い返します（これで水増しを防ぎます）
    return new Response(JSON.stringify({ success: true, message: 'Bot ignored' }), { status: 200 });
  }

  try {
    // 3. 人間だった場合、「どの記事が読まれたか（記事ID）」を受け取ります
    const data = await request.json();
    const postId = data.postId;

    if (!postId) {
      return new Response("記事IDがありません", { status: 400 });
    }

    // 4. メモ帳（KV）を開いて、その記事の今のPV数を確認します
    const key = `PV_${postId}`;
    let currentPv = await env.NEWS_PV_RANKING.get(key);
    
    // まだ記録がない（初めて読まれた）場合は「0」として扱います
    currentPv = currentPv ? parseInt(currentPv) : 0;
    
    // 今の数字に「1」を足します
    const newPv = currentPv + 1;

    // 5. 新しい数字をメモ帳に上書き保存します
    await env.NEWS_PV_RANKING.put(key, newPv.toString());

    // 無事に処理が終わったことを連絡係に伝えます
    return new Response(JSON.stringify({ success: true, pv: newPv }), {
      headers: { "Content-Type": "application/json" }
    });
    
  } catch (error) {
    // 万が一エラーが起きてもサイトが壊れないように安全に終了させます
    return new Response("エラーが発生しました", { status: 500 });
  }
}
