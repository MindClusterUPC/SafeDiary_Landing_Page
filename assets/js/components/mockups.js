function initMockupCarousel() {
  const track = document.getElementById('previewTrack');
  const previous = document.getElementById('previewPrev');
  const next = document.getElementById('previewNext');
  const count = document.getElementById('previewCount');
  if (!track || !previous || !next || !count) return;

  const slides = [...track.querySelectorAll('.app-preview__slide')];
  if (!slides.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;
  let scrollFrame = 0;
  let autoplayTimer = null;
  let programmaticScrollTimer = null;
  let programmaticScroll = false;
  let hovering = false;

  function showPosition() {
    count.textContent = `${String(active + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }

  function goTo(index) {
    active = (index + slides.length) % slides.length;
    const left = slides[active].offsetLeft - slides[0].offsetLeft;
    const wrapping = index < 0 || index >= slides.length;
    programmaticScroll = true;
    clearTimeout(programmaticScrollTimer);
    track.scrollTo({ left, behavior: reducedMotion.matches || wrapping ? 'auto' : 'smooth' });
    programmaticScrollTimer = setTimeout(() => { programmaticScroll = false; }, wrapping || reducedMotion.matches ? 0 : 700);
    showPosition();
  }

  function syncFromScroll() {
    if (programmaticScroll) return;
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll > 1 && track.scrollLeft >= maxScroll - 2) {
        active = slides.length - 1;
      } else {
        active = slides.reduce((best, slide, index) => {
          const position = slide.offsetLeft - slides[0].offsetLeft;
          const bestPosition = slides[best].offsetLeft - slides[0].offsetLeft;
          return Math.abs(position - track.scrollLeft) < Math.abs(bestPosition - track.scrollLeft) ? index : best;
        }, 0);
      }
      showPosition();
    });
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }

  function startAutoplay() {
    stopAutoplay();
    if (!hovering || document.hidden || slides.length < 2) return;
    autoplayTimer = setInterval(() => goTo(active + 1), 3000);
  }

  previous.addEventListener('click', () => { goTo(active - 1); startAutoplay(); });
  next.addEventListener('click', () => { goTo(active + 1); startAutoplay(); });
  track.addEventListener('scroll', syncFromScroll, { passive: true });
  track.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(active + (event.key === 'ArrowRight' ? 1 : -1));
      startAutoplay();
    }
  });
  track.addEventListener('mouseenter', () => {
    hovering = true;
    goTo(active + 1);
    startAutoplay();
  });
  track.addEventListener('mouseleave', () => { hovering = false; stopAutoplay(); });
  document.addEventListener('visibilitychange', startAutoplay);

  function updateLabels(lang) {
    const english = lang === 'en';
    previous.setAttribute('aria-label', english ? 'Previous screen' : 'Pantalla anterior');
    next.setAttribute('aria-label', english ? 'Next screen' : 'Pantalla siguiente');
    track.setAttribute('aria-label', english ? 'SafeDiary app screens' : 'Pantallas de SafeDiary');
    track.setAttribute('aria-roledescription', english ? 'carousel' : 'carrusel');
    const descriptions = english
      ? [
          'Home screen with mood check-in, routines and journal access',
          'Diarito chat with suggestions to start a conversation',
          'Routines screen with immediate relief exercises and daily habits',
          'Psychologist directory with specialties, availability and fees',
          'Appointments screen with upcoming sessions and active conversations'
        ]
      : [
          'Inicio de SafeDiary con cuestionario de ánimo y acceso al diario',
          'Chat de Diarito con sugerencias para iniciar una conversación',
          'Pantalla de Rutinas con ejercicios de alivio inmediato y hábitos diarios',
          'Directorio de psicólogos con especialidad, disponibilidad y tarifa',
          'Mis citas con próximas sesiones y conversaciones activas'
        ];
    track.querySelectorAll('.app-preview__phone img').forEach((image, index) => {
      image.alt = descriptions[index] || '';
    });
  }
  document.addEventListener('languageChange', ({ detail }) => updateLabels(detail.lang));
  updateLabels(document.documentElement.lang);
  showPosition();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMockupCarousel, { once: true });
} else {
  initMockupCarousel();
}
