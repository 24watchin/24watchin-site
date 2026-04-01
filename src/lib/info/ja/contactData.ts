---
// src/components/info/ContactBody.astro
import { contactData } from '../../lib/info/contactData.ts';
---

<div class="info-content-card">
  <h1 id="info-title">Contact</h1>
  
  <div class="info-body-text">
    <div id="intro-section" class="section">
      <p id="intro1"></p>
      <p id="intro2"></p>
    </div>

    <section class="info-section-box">
      <h2 id="before-title"></h2>
      <ul class="info-list">
        <li id="before1"></li>
        <li id="before2"></li>
        <li id="before3"></li>
        <li id="before4"></li>
      </ul>
    </section>

    <section class="info-section-box">
      <h2 id="privacy-title"></h2>
      <p>
        <span id="privacy-text"></span>
        <a href="/ja/jp/info/privacy/" id="privacy-link" class="theme-link"></a>
        <span id="privacy-end"></span>
      </p>
    </section>

    <section class="info-section-box contact-info">
      <h2 id="form-title"></h2>
      <p>現在、フォームの準備中です。お急ぎの場合は、以下のメールアドレスまで直接ご連絡ください。</p>
      <table class="info-table">
        <tr>
          <th>Email</th>
          <td>24watchin.info@gmail.com</td>
        </tr>
      </table>
    </section>
  </div>
</div>

<style>
  .info-content-card { background: #fff; padding: 40px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); min-height: 500px; }
  
  h1 { font-size: 24px; font-weight: bold; margin-bottom: 30px; padding-bottom: 15px; border-bottom: 4px solid var(--theme-color); color: #1a1a1a; }
  
  /* 本文サイズ：パソコン16px */
  .info-body-text { font-size: 16px; line-height: 1.8; color: #444; }
  
  .section { margin-bottom: 25px; }
  .info-section-box { margin-top: 30px; padding: 20px; background-color: #fcfcfc; border-radius: 6px; border: 1px solid #eee; }
  
  h2 { font-size: 20px; margin-top: 0; margin-bottom: 15px; color: #1a1a1a; border-left: 4px solid var(--theme-color); padding-left: 10px; }
  
  .info-list { padding-left: 20px; margin: 0; }
  .info-list li { margin-bottom: 8px; }
  
  .info-table { width: 100%; border-collapse: collapse; margin-top: 15px; }
  .info-table th, .info-table td { border: 1px solid #ddd; padding: 12px; font-size: 16px; }
  .info-table th { background-color: #f8f9fa; width: 30%; text-align: left; }
  
  .theme-link { color: var(--theme-color); text-decoration: underline; font-weight: bold; }

  /* スマホ表示：18px */
  @media (max-width: 640px) { 
    .info-content-card { padding: 25px 15px; } 
    h1 { font-size: 22px; } 
    .info-body-text { font-size: 18px; }
    h2 { font-size: 20px; }
    .info-table th, .info-table td { font-size: 16px; padding: 8px; }
  }
</style>

<script define:vars={{ pageData: contactData }}>
  (function() {
    const themeColors = {
      ja: '#872732', en: '#0033a0', 'zh-cn': '#e60012', 'zh-tw': '#000095',
      es: '#aa151b', de: '#000000', fr: '#002395', ru: '#d52b1e'
    };

    const browserLang = (navigator.language || navigator.userLanguage).split('-')[0].toLowerCase();
    const lang = pageData[browserLang] ? browserLang : 'ja'; 
    const t = pageData[lang];
    const theme = themeColors[lang] || '#872732';

    // データの流し込み
    document.title = t.title + ' | 24Watchin';
    document.getElementById('info-title').textContent = t.title;
    
    document.getElementById('intro1').textContent = t.intro1;
    document.getElementById('intro2').textContent = t.intro2;
    
    document.getElementById('before-title').textContent = t.beforeTitle;
    document.getElementById('before1').textContent = t.before1;
    document.getElementById('before2').textContent = t.before2;
    document.getElementById('before3').textContent = t.before3;
    document.getElementById('before4').textContent = t.before4;
    
    document.getElementById('privacy-title').textContent = t.privacyTitle;
    document.getElementById('privacy-text').textContent = t.privacyText;
    document.getElementById('privacy-link').textContent = t.privacyLink;
    document.getElementById('privacy-end').textContent = t.privacyEnd;
    
    document.getElementById('form-title').textContent = t.formTitle;

    document.body.style.setProperty('--theme-color', theme);
  })();
</script>
