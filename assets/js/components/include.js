import { initI18n } from '../i18n/i18n.js';

export async function loadSharedComponents(options = {}) {
  const isSubfolder = options.isSubfolder || false;
  const prefix = isSubfolder ? '../' : '';

  const headerContainer = document.getElementById('header-placeholder');
  const footerContainer = document.getElementById('footer-placeholder');

  try {
    if (headerContainer) {
      const res = await fetch(`${prefix}components/header.html`);
      const html = await res.text();
      headerContainer.innerHTML = html;

      // Ajustar rutas según ubicación de la página
      const homeLink = headerContainer.querySelector('.nav-home-link');
      if (homeLink) homeLink.href = `${prefix}index.html`;
      const headerLogo = headerContainer.querySelector('.brand__logo img');
      if (headerLogo) headerLogo.src = `${prefix}assets/images/safediary-logo.jpeg`;

      headerContainer.querySelectorAll('.nav-section-link').forEach((link) => {
        const section = link.getAttribute('data-section');
        link.href = isSubfolder ? `${prefix}index.html#${section}` : `#${section}`;
      });

      // Manejo del menú móvil
      const mobileBtn = headerContainer.querySelector('#mobileMenuBtn');
      const mobileNav = headerContainer.querySelector('#mobileNav');
      if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
          const isOpen = mobileNav.classList.toggle('open');
          mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          const icon = mobileBtn.querySelector('.material-symbols-outlined');
          if (icon) icon.textContent = isOpen ? 'close' : 'menu';
        });

        mobileNav.querySelectorAll('.nav-section-link').forEach((link) => {
          link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            mobileBtn.setAttribute('aria-expanded', 'false');
            const icon = mobileBtn.querySelector('.material-symbols-outlined');
            if (icon) icon.textContent = 'menu';
          });
        });
      }
    }

    if (footerContainer) {
      const res = await fetch(`${prefix}components/footer.html`);
      const html = await res.text();
      footerContainer.innerHTML = html;

      const termsLink = footerContainer.querySelector('.footer-terms-link');
      if (termsLink) termsLink.href = isSubfolder ? 'terms.html' : 'pages/terms.html';
      const footerLogo = footerContainer.querySelector('.footer-brand img');
      if (footerLogo) footerLogo.src = `${prefix}assets/images/safediary-logo.jpeg`;
    }

    // Inicializar o refrescar traducciones de header y footer
    initI18n();
  } catch (err) {
    console.error('Error cargando componentes compartidos:', err);
  }
}
