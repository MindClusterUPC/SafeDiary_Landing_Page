/**
 * SafeDiary - Terms & Conditions Page Logic
 * MindCluster
 */

import { initI18n, getCurrentDict } from './i18n/i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar motor i18n
  initI18n();

  const container = document.getElementById('termsSectionsContainer');
  if (!container) return;

  function renderTerms() {
    const dict = getCurrentDict();
    const sections = dict.termsSections || [];
    container.innerHTML = '';

    sections.forEach((sec) => {
      const sectionEl = document.createElement('div');
      sectionEl.className = 'terms-section';
      sectionEl.innerHTML = `
        <h3 class="terms-section__title">
          <span class="material-symbols-outlined" style="font-size: 1.25rem;">shield</span>
          <span>${sec.title}</span>
        </h3>
        <p class="terms-section__body">${sec.content}</p>
      `;
      container.appendChild(sectionEl);
    });
  }

  renderTerms();

  document.addEventListener('languageChange', () => {
    renderTerms();
  });
});
