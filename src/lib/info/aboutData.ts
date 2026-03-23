// src/lib/info/aboutData.ts

export const aboutData = {
  ja: {
    title: 'About 24Watchin',
    description: '24Watchinの運営者情報・サイト概要です。海外在住者向けの多言語グローバルニュースメディアです。',
    content: `
      <p class="lead">
        24Watchinは、海外で暮らす人々に向けて、現地のニュースや生活情報を<strong>母国語で</strong>わかりやすくお届けする、グローバル情報メディアです。
      </p>

      <section>
        <h2>どこにいても、母国語でニュースを</h2>
        <p>
          異国の地で暮らしていると、現地の言葉の壁でニュースや情報が入ってきにくいと感じることがあります。
          24Watchinは、そんな「言葉の壁」をなくすために生まれました。
        </p>
        <p>
          日本語、英語、中国語（簡体字・繁体字）、ドイツ語、フランス語、スペイン語、ロシア語など、多言語で現地の最新情報を発信しています。
          どの国にいても、自分の言葉で「今、現地で何が起きているか」を知ることができます。
        </p>
      </section>

      <section>
        <h2>難しいニュースを、わかりやすく</h2>
        <p>
          政治・経済・社会・文化など、一見難しく感じるニュースも、24Watchinでは<strong>背景から丁寧に解説</strong>します。
          専門知識がなくても読めるわかりやすさを大切にしながら、現地で生活するうえで本当に役立つ情報をお届けします。
        </p>
        <p>
          「ニュースを読んで、現地のことをもっとよく知りたい」そんな方に寄り添うメディアを目指しています。
        </p>
      </section>

      <section>
        <h2>世界各地の「今」をリアルタイムで</h2>
        <p>
          24Watchinは、アジア・ヨーロッパ・アメリカ・中東・アフリカ・オセアニアなど、世界各地のニュースを毎日更新しています。
          ビジネス、政治、経済、生活、文化、天気、交通など、現地生活に密着した幅広いジャンルの情報を取り扱います。
        </p>
      </section>

      <section>
        <h2>運営者情報</h2>
        <table class="info-table">
          <tr>
            <th>サイト名</th>
            <td>24Watchin</td>
          </tr>
          <tr>
            <th>運営者</th>
            <td>The Dexent Media Enterprises</td>
          </tr>
          <tr>
            <th>お問い合わせ</th>
            <td>
              <a href="/ja/jp/contact/">お問い合わせフォームはこちら</a>
            </td>
          </tr>
        </table>
      </section>

      <section>
        <h2>免責事項</h2>
        <p>
          掲載情報については、できる限り正確性・最新性に配慮しています。
          詳細については、<a href="/ja/jp/info/terms/">利用規約</a>、<a href="/ja/jp/info/privacy/">プライバシーポリシー</a>、<a href="/ja/jp/info/corrections/">訂正・修正ポリシー</a>をご確認ください。
        </p>
      </section>
    `
  },
  en: {
    title: 'About 24Watchin',
    description: 'About 24Watchin. A multilingual global news media for international residents around the world.',
    content: `
      <p class="lead">This is a dummy text for the About page. The actual translated text will be inserted here later.</p>
      <section>
        <h2>Dummy Heading</h2>
        <p>Dummy text...</p>
      </section>
    `
  },
  'zh-cn': {
    title: '关于 24Watchin',
    description: '关于24Watchin。面向海外居民的多语言全球新闻媒体。',
    content: `
      <p class="lead">这是关于页面的占位符文本（ダミーテキスト）。</p>
      <section>
        <h2>Dummy Heading</h2>
        <p>占位符文本...</p>
      </section>
    `
  },
  'zh-tw': {
    title: '關於 24Watchin',
    description: '關於24Watchin。面向海外居民的多語言全球新聞媒體。',
    content: `
      <p class="lead">這是關於頁面的佔位符文本（ダミーテキスト）。</p>
      <section>
        <h2>Dummy Heading</h2>
        <p>佔位符文本...</p>
      </section>
    `
  },
  es: {
    title: 'Acerca de 24Watchin',
    description: 'Acerca de 24Watchin. Un medio de comunicación global multilingüe para residentes en el extranjero.',
    content: `
      <p class="lead">Este es un texto simulado (dummy text) para la página Acerca de.</p>
      <section>
        <h2>Dummy Heading</h2>
        <p>Texto simulado...</p>
      </section>
    `
  },
  de: {
    title: 'Über 24Watchin',
    description: 'Über 24Watchin. Ein mehrsprachiges globales Nachrichtenmedium für im Ausland lebende Menschen.',
    content: `
      <p class="lead">Dies ist ein Blindtext (dummy text) für die Über-Seite.</p>
      <section>
        <h2>Dummy Heading</h2>
        <p>Blindtext...</p>
      </section>
    `
  },
  fr: {
    title: 'À propos de 24Watchin',
    description: 'À propos de 24Watchin. Un média d\'information mondial multilingue pour les résidents étrangers.',
    content: `
      <p class="lead">Ceci est un texte factice (dummy text) pour la page À propos.</p>
      <section>
        <h2>Dummy Heading</h2>
        <p>Texte factice...</p>
      </section>
    `
  },
  ru: {
    title: 'О 24Watchin',
    description: 'О 24Watchin. Многоязычное глобальное новостное издание для иностранных резидентов.',
    content: `
      <p class="lead">Это фиктивный текст (dummy text) для страницы О нас.</p>
      <section>
        <h2>Dummy Heading</h2>
        <p>Фиктивный текст...</p>
      </section>
    `
  }
} as const;

export type AboutDataKey = keyof typeof aboutData;
