// src/lib/info/privacyData.ts

export const privacyData = {
  ja: {
    title: 'プライバシーポリシー',
    description: '24Watchinのプライバシーポリシーです。個人情報の取り扱いについて説明しています。',
    lastUpdated: '最終更新日：2026年3月20日',
    content: `
      <p>24Watchin（以下「当サイト」といいます）は、当サイトを利用する皆さまの個人情報、利用者情報その他これらに関連する情報について、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定め、適切に取り扱います。</p>
      <section>
        <h2>1. 本ポリシーの適用範囲</h2>
        <p>本ポリシーは、当サイトおよび当サイトが提供するウェブサイト、お問い合わせ窓口その他これらに付随するサービスに適用されます。</p>
        <p>外部サイト、外部サービス、広告配信先、SNSその他第三者が提供するサービスについては、当該第三者の定めるプライバシーポリシーが適用されます。</p>
      </section>
      <section>
        <h2>2. お問い合わせ窓口</h2>
        <table class="info-table">
          <tr><th>運営者</th><td>The Dexent Media Enterprises</td></tr>
          <tr><th>お問い合わせ</th><td><a href="/ja/jp/contact/">お問い合わせフォームはこちら</a></td></tr>
        </table>
      </section>
    `
  },
  en: {
    title: 'Privacy Policy',
    description: 'Privacy Policy of 24Watchin. This page explains how we handle your personal information.',
    lastUpdated: 'Last Updated: March 20, 2026',
    content: `
      <p>This is a dummy text for the Privacy Policy. The actual translated text will be inserted here later.</p>
      <section>
        <h2>1. Scope of Policy</h2>
        <p>Dummy text for scope of policy...</p>
      </section>
    `
  },
  'zh-cn': {
    title: '隐私政策',
    description: '24Watchin的隐私政策。本页说明我们如何处理您的个人信息。',
    lastUpdated: '最后更新：2026年3月20日',
    content: `
      <p>这是隐私政策的占位符文本（ダミーテキスト）。实际的翻译文本稍后将插入此处。</p>
      <section>
        <h2>1. 政策范围</h2>
        <p>占位符文本...</p>
      </section>
    `
  },
  'zh-tw': {
    title: '隱私政策',
    description: '24Watchin的隱私政策。本頁說明我們如何處理您的個人資訊。',
    lastUpdated: '最後更新：2026年3月20日',
    content: `
      <p>這是隱私政策的佔位符文本（ダミーテキスト）。實際的翻譯文本稍後將插入此處。</p>
      <section>
        <h2>1. 政策範圍</h2>
        <p>佔位符文本...</p>
      </section>
    `
  },
  es: {
    title: 'Política de privacidad',
    description: 'Política de privacidad de 24Watchin. Esta página explica cómo manejamos su información personal.',
    lastUpdated: 'Última actualización: 20 de marzo de 2026',
    content: `
      <p>Este es un texto simulado (dummy text) para la Política de Privacidad. El texto traducido se insertará aquí más adelante.</p>
      <section>
        <h2>1. Ámbito de aplicación</h2>
        <p>Texto simulado...</p>
      </section>
    `
  },
  de: {
    title: 'Datenschutzrichtlinie',
    description: 'Datenschutzrichtlinie von 24Watchin. Diese Seite erklärt den Umgang mit Ihren persönlichen Daten.',
    lastUpdated: 'Zuletzt aktualisiert: 20. März 2026',
    content: `
      <p>Dies ist ein Blindtext (dummy text) für die Datenschutzrichtlinie. Der tatsächliche übersetzte Text wird später hier eingefügt.</p>
      <section>
        <h2>1. Geltungsbereich</h2>
        <p>Blindtext...</p>
      </section>
    `
  },
  fr: {
    title: 'Politique de confidentialité',
    description: 'Politique de confidentialité de 24Watchin. Cette page explique comment nous traitons vos données personnelles.',
    lastUpdated: 'Dernière mise à jour : 20 mars 2026',
    content: `
      <p>Ceci est un texte factice (dummy text) pour la politique de confidentialité. Le texte traduit sera inséré ici plus tard.</p>
      <section>
        <h2>1. Champ d'application</h2>
        <p>Texte factice...</p>
      </section>
    `
  },
  ru: {
    title: 'Политика конфиденциальности',
    description: 'Политика конфиденциальности 24Watchin. На этой странице объясняется порядок обработки персональных данных.',
    lastUpdated: 'Последнее обновление: 20 марта 2026 г.',
    content: `
      <p>Это фиктивный текст (dummy text) для Политики конфиденциальности. Фактический переведенный текст будет вставлен сюда позже.</p>
      <section>
        <h2>1. Сфера действия</h2>
        <p>Фиктивный текст...</p>
      </section>
    `
  }
} as const;

export type PrivacyDataKey = keyof typeof privacyData;

