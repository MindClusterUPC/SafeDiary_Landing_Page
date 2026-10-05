// Control del ritmo de respiracion guiada 4-7-8

import { getCurrentDict } from '../i18n/i18n.js';

let isRunning = false;
let currentPhaseIndex = 0;
let phaseTimer = null;

const PHASES = [
  { textKey: 'breathStateInhale', subKey: 'breathSubInhale', duration: 4, scale: 1.25 },
  { textKey: 'breathStateHold', subKey: 'breathSubHold', duration: 7, scale: 1.25 },
  { textKey: 'breathStateExhale', subKey: 'breathSubExhale', duration: 8, scale: 1.0 }
];

export function initBreathing() {
  const toggleBtn = document.getElementById('breathingToggleBtn');
  const orb = document.getElementById('breathingOrb');
  const stateText = document.getElementById('breathingStateText');
  const subText = document.getElementById('breathingSubText');

  if (!toggleBtn || !stateText) return;

  function runPhase() {
    if (!isRunning) return;
    const dict = getCurrentDict();
    const phase = PHASES[currentPhaseIndex];

    stateText.textContent = dict[phase.textKey] || '';
    if (subText) subText.textContent = dict[phase.subKey] || '';
    if (orb) orb.style.transform = `scale(${phase.scale})`;

    phaseTimer = setTimeout(() => {
      if (!isRunning) return;
      currentPhaseIndex = (currentPhaseIndex + 1) % PHASES.length;
      runPhase();
    }, phase.duration * 1000);
  }

  function start() {
    isRunning = true;
    currentPhaseIndex = 0;
    const dict = getCurrentDict();
    const btnSpan = toggleBtn.querySelector('.btn-label');
    if (btnSpan) btnSpan.textContent = dict.btnPauseExercise || 'Pausar ejercicio';
    toggleBtn.classList.add('btn--secondary');
    runPhase();
  }

  function pause() {
    isRunning = false;
    clearTimeout(phaseTimer);
    const dict = getCurrentDict();
    const btnSpan = toggleBtn.querySelector('.btn-label');
    if (btnSpan) btnSpan.textContent = dict.btnStartExercise || 'Iniciar ejercicio de respiración';
    toggleBtn.classList.remove('btn--secondary');

    if (orb) orb.style.transform = 'scale(1)';
    stateText.textContent = dict.breathStateReady || 'Listo para comenzar';
    if (subText) subText.textContent = dict.breathSubInhale || '';
  }

  toggleBtn.addEventListener('click', () => {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  });

  document.addEventListener('languageChange', ({ detail }) => {
    const dict = detail.dict;
    const btnSpan = toggleBtn.querySelector('.btn-label');
    if (isRunning) {
      const phase = PHASES[currentPhaseIndex];
      stateText.textContent = dict[phase.textKey] || '';
      if (subText) subText.textContent = dict[phase.subKey] || '';
      if (btnSpan) btnSpan.textContent = dict.btnPauseExercise;
    } else {
      stateText.textContent = dict.breathStateReady || 'Listo para comenzar';
      if (subText) subText.textContent = dict.breathSubInhale || '';
      if (btnSpan) btnSpan.textContent = dict.btnStartExercise;
    }
  });
}
