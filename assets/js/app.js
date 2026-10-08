// Inicializacion de la aplicacion principal SafeDiary

import { initI18n } from './i18n/i18n.js';
import { loadSharedComponents } from './components/include.js';
import { initTeam } from './components/team.js';
import { initFaq } from './components/faq.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Cargar header y footer reutilizables
  await loadSharedComponents({ isSubfolder: false });

  // Inicializar traducciones e interactividad
  initI18n();
  initTeam();
  initFaq();

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
