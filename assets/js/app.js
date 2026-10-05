// Inicializacion de la aplicacion principal SafeDiary

import { initI18n } from './i18n/i18n.js';
import { loadSharedComponents } from './components/include.js';
import { initBreathing } from './components/breathing.js';
import { initJournal } from './components/journal.js';
import { initTeam } from './components/team.js';
import { initFaq } from './components/faq.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Cargar header y footer reutilizables
  await loadSharedComponents({ isSubfolder: false });

  // Inicializar traducciones e interactividad
  initI18n();
  initBreathing();
  initJournal();
  initTeam();
  initFaq();

  // Interaccion en chips de estado emocional
  const moodChips = document.querySelectorAll('.mood-chip');
  moodChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      moodChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');

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

  // Resaltado de seccion activa en la navegacion
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
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
