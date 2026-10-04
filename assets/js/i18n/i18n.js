/**
 * SafeDiary - i18n Internationalization Engine
 * MindCluster
 */

import { es } from './es.js';
import { en } from './en.js';

const dictionaries = { es, en };
const STORAGE_KEY = 'safediary_lang';
let currentLang = 'es';

/**
 * Obtiene el idioma actual
 */
export function getCurrentLang() {
  return currentLang;
}

/**
 * Obtiene el diccionario actual
 */
export function getCurrentDict() {
  return dictionaries[currentLang] || dictionaries.es;
}

/**
 * Traduce una clave dada
 */
export function t(key) {
  const dict = getCurrentDict();
  return dict[key] !== undefined ? dict[key] : key;
}

/**
 * Aplica el idioma a la interfaz
 */
export function setLanguage(lang) {
  if (!dictionaries[lang]) {
    lang = 'es';
  }
  currentLang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // Si localStorage está bloqueado, continúa sin error
  }

  document.documentElement.lang = lang;

  // Actualizar textos simples con data-i18n
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const value = t(key);
    if (typeof value === 'string') {
      element.textContent = value;
    }
  });

  // Actualizar placeholders con data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    const value = t(key);
    if (typeof value === 'string') {
      element.placeholder = value;
    }
  });

  // Actualizar titles con data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const key = element.getAttribute('data-i18n-title');
    const value = t(key);
    if (typeof value === 'string') {
      element.title = value;
    }
  });

  // Actualizar botones de toggle
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Notificar a componentes reactivos
  document.dispatchEvent(
    new CustomEvent('languageChange', {
      detail: { lang, dict: getCurrentDict() }
    })
  );
}

/**
 * Inicializa el sistema de idiomas
 */
export function initI18n() {
  let savedLang = 'es';
  try {
    savedLang = localStorage.getItem(STORAGE_KEY) || 'es';
  } catch (e) {
    savedLang = 'es';
  }

  // Configurar listeners de botones de cambio de idioma
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });

  // Aplicar idioma inicial
  setLanguage(savedLang);
}
