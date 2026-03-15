import type { APIRoute } from 'astro';

export const prerender = false;

type Env = {
  DB: D1Database;
};

async function getTotals(db: D1Database, articleId: string) {
  const row = await db
    .prepare(
      `SELECT smile_count, troubled_count
       FROM reaction_totals
       WHERE article_id = ?`
    )
    .bind(articleId)
    .first<{ smile_count: number; troubled_count: number }>();

  if (!row) {
    return { smile_count: 0, troubled_count: 0 };
  }

  return {
    smile_count: row.smile_count ?? 0,
    troubled_count: row.troubled_count ?? 0,
  };
}

export const GET: APIRoute = async ({ params, locals }) => {
  const env = (locals.runtime as { env: Env }).env;
  const db = env.DB;
  const articleId = params.id;

  if (!articleId) {
    return new Response(JSON.stringify({ error: 'Missing article id' }), { status: 400 });
  }

  const totals = await getTotals(db, articleId);

  return new Response(JSON.stringify(totals), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ params, request, locals }) => {
  const env = (locals.runtime as { env: Env }).env;
  const db = env.DB;
  const articleId = params.id;

  if (!articleId) {
    return new Response(JSON.stringify({ error: 'Missing article id' }), { status: 400 });
  }

  const body = await request.json();
  const deviceId = String(body.device_id || '').trim();
  const nextReaction = String(body.next_reaction || '').trim();

  if (!deviceId) {
    return new Response(JSON.stringify({ error: 'Missing device id' }), { status: 400 });
  }

  if (nextReaction && nextReaction !== 'smile' && nextReaction !== 'troubled') {
    return new Response(JSON.stringify({ error: 'Invalid reaction' }), { status: 400 });
  }

  const currentVote = await db
    .prepare(
      `SELECT reaction_type
       FROM reaction_votes
       WHERE article_id = ? AND device_id = ?`
    )
    .bind(articleId, deviceId)
    .first<{ reaction_type: 'smile' | 'troubled' }>();

  const currentReaction = currentVote?.reaction_type || '';

  await db
    .prepare(
      `INSERT OR IGNORE INTO reaction_totals (article_id, smile_count, troubled_count)
       VALUES (?, 0, 0)`
    )
    .bind(articleId)
    .run();

  // 取り消し
  if (currentReaction && !nextReaction) {
    await db
      .prepare(
        `DELETE FROM reaction_votes
         WHERE article_id = ? AND device_id = ?`
      )
      .bind(articleId, deviceId)
      .run();

    if (currentReaction === 'smile') {
      await db
        .prepare(
          `UPDATE reaction_totals
           SET smile_count = CASE WHEN smile_count > 0 THEN smile_count - 1 ELSE 0 END,
               updated_at = CURRENT_TIMESTAMP
           WHERE article_id = ?`
        )
        .bind(articleId)
        .run();
    }

    if (currentReaction === 'troubled') {
      await db
        .prepare(
          `UPDATE reaction_totals
           SET troubled_count = CASE WHEN troubled_count > 0 THEN troubled_count - 1 ELSE 0 END,
               updated_at = CURRENT_TIMESTAMP
           WHERE article_id = ?`
        )
        .bind(articleId)
        .run();
    }

    const totals = await getTotals(db, articleId);

    return new Response(
      JSON.stringify({
        ...totals,
        active_reaction: '',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // 初回登録
  if (!currentReaction && nextReaction) {
    await db
      .prepare(
        `INSERT INTO reaction_votes (article_id, device_id, reaction_type)
         VALUES (?, ?, ?)`
      )
      .bind(articleId, deviceId, nextReaction)
      .run();

    if (nextReaction === 'smile') {
      await db
        .prepare(
          `UPDATE reaction_totals
           SET smile_count = smile_count + 1,
               updated_at = CURRENT_TIMESTAMP
           WHERE article_id = ?`
        )
        .bind(articleId)
        .run();
    }

    if (nextReaction === 'troubled') {
      await db
        .prepare(
          `UPDATE reaction_totals
           SET troubled_count = troubled_count + 1,
               updated_at = CURRENT_TIMESTAMP
           WHERE article_id = ?`
        )
        .bind(articleId)
        .run();
    }

    const totals = await getTotals(db, articleId);

    return new Response(
      JSON.stringify({
        ...totals,
        active_reaction: nextReaction,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // 切り替え
  if (currentReaction && nextReaction && currentReaction !== nextReaction) {
    await db
      .prepare(
        `UPDATE reaction_votes
         SET reaction_type = ?, updated_at = CURRENT_TIMESTAMP
         WHERE article_id = ? AND device_id = ?`
      )
      .bind(nextReaction, articleId, deviceId)
      .run();

    if (currentReaction === 'smile') {
      await db
        .prepare(
          `UPDATE reaction_totals
           SET smile_count = CASE WHEN smile_count > 0 THEN smile_count - 1 ELSE 0 END,
               troubled_count = troubled_count + 1,
               updated_at = CURRENT_TIMESTAMP
           WHERE article_id = ?`
        )
        .bind(articleId)
        .run();
    }

    if (currentReaction === 'troubled') {
      await db
        .prepare(
          `UPDATE reaction_totals
           SET troubled_count = CASE WHEN troubled_count > 0 THEN troubled_count - 1 ELSE 0 END,
               smile_count = smile_count + 1,
               updated_at = CURRENT_TIMESTAMP
           WHERE article_id = ?`
        )
        .bind(articleId)
        .run();
    }

    const totals = await getTotals(db, articleId);

    return new Response(
      JSON.stringify({
        ...totals,
        active_reaction: nextReaction,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const totals = await getTotals(db, articleId);

  return new Response(
    JSON.stringify({
      ...totals,
      active_reaction: currentReaction,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
