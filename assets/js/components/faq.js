/**
 * SafeDiary - FAQ Accordion Component
 * MindCluster
 */

import { getCurrentDict } from '../i18n/i18n.js';

export function initFaq() {
  const container = document.getElementById('faqContainer');
  if (!container) return;

  function renderFaq() {
    const dict = getCurrentDict();
    const items = dict.faqItems || [];
    container.innerHTML = '';

    items.forEach((item, index) => {
      const faqItem = document.createElement('div');
      faqItem.className = `faq-item ${index === 0 ? 'active' : ''}`;

      faqItem.innerHTML = `
        <button class="faq-header" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
          <span>${item.question}</span>
          <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div class="faq-content">
          <p class="faq-text">${item.answer}</p>
        </div>
      `;

      const header = faqItem.querySelector('.faq-header');
      header.addEventListener('click', () => {
        const isActive = faqItem.classList.contains('active');
        // Cerrar otros acordeones si se desea comportamiento exclusivo
        container.querySelectorAll('.faq-item').forEach((el) => {
          el.classList.remove('active');
          const btn = el.querySelector('.faq-header');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          faqItem.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
        }
      });

      container.appendChild(faqItem);
    });
  }

  renderFaq();

  // Reaccionar al cambio de idioma
  document.addEventListener('languageChange', () => {
    renderFaq();
  });
}
