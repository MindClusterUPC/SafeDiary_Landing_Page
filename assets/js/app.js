/**
 * SafeDiary - Main Application Entry Point
 * MindCluster
 */

import { initI18n } from './i18n/i18n.js';
import { initBreathing } from './components/breathing.js';
import { initJournal } from './components/journal.js';
import { initTeam } from './components/team.js';
import { initFaq } from './components/faq.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar motor i18n
  initI18n();

  // 2. Inicializar componentes interactivos
  initBreathing();
  initJournal();
  initTeam();
  initFaq();

  // 3. Menú móvil
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const icon = mobileBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = isOpen ? 'close' : 'menu';
      }
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileBtn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = 'menu';
      });
    });
  }

  // 4. Interacción en chips de estado emocional (Wellness section)
  const moodChips = document.querySelectorAll('.mood-chip');
  moodChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      moodChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');

      // Animación suave en las barras de gráfico
      const bars = document.querySelectorAll('.chart-bar');
      bars.forEach((bar) => {
        bar.style.opacity = '0.7';
      });
      setTimeout(() => {
        bars.forEach((bar) => {
          bar.style.opacity = '1';
        });
      }, 200);
    });
  });

  // 5. ScrollSpy para resaltar el menú activo
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset + 120;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
});
