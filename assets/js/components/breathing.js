/**
 * SafeDiary - Mindful Breathing Exercise (4-7-8 Rhythm)
 * MindCluster
 */

import { getCurrentDict } from '../i18n/i18n.js';

let isRunning = false;
let currentPhaseIndex = 0;
let phaseTimer = null;
let countdownTimer = null;
let currentSeconds = 4;

const PHASES = [
  { key: 'breathStateInhale', duration: 4, scale: 1.35 },
  { key: 'breathStateHold', duration: 7, scale: 1.35 },
  { key: 'breathStateExhale', duration: 8, scale: 1.0 }
];

export function initBreathing() {
  const toggleBtn = document.getElementById('breathingToggleBtn');
  const innerCircle = document.getElementById('breathingCircleInner');
  const stateText = document.getElementById('breathingStateText');
  const counterEl = document.getElementById('breathingCounter');

  if (!toggleBtn || !innerCircle || !stateText || !counterEl) return;

  function updatePhaseDisplay() {
    const dict = getCurrentDict();
    const phase = PHASES[currentPhaseIndex];
    stateText.textContent = dict[phase.key] || '';
    counterEl.textContent = currentSeconds;
    innerCircle.style.transform = `scale(${phase.scale})`;
  }

  function tickCountdown() {
    if (!isRunning) return;
    currentSeconds--;
    if (currentSeconds > 0) {
      counterEl.textContent = currentSeconds;
    }
  }

  function runNextPhase() {
    if (!isRunning) return;
    const phase = PHASES[currentPhaseIndex];
    currentSeconds = phase.duration;
    updatePhaseDisplay();

    countdownTimer = setInterval(tickCountdown, 1000);

    phaseTimer = setTimeout(() => {
      clearInterval(countdownTimer);
      if (!isRunning) return;
      currentPhaseIndex = (currentPhaseIndex + 1) % PHASES.length;
      runNextPhase();
    }, phase.duration * 1000);
  }

  function start() {
    isRunning = true;
    currentPhaseIndex = 0;
    const dict = getCurrentDict();
    toggleBtn.innerHTML = `
      <span class="material-symbols-outlined">pause_circle</span>
      <span data-i18n="btnPauseExercise">${dict.btnPauseExercise || 'Pausar ejercicio'}</span>
    `;
    toggleBtn.classList.add('btn--secondary');
    toggleBtn.classList.remove('btn--primary');
    runNextPhase();
  }

  function pause() {
    isRunning = false;
    clearTimeout(phaseTimer);
    clearInterval(countdownTimer);
    const dict = getCurrentDict();
    toggleBtn.innerHTML = `
      <span class="material-symbols-outlined">play_circle</span>
      <span data-i18n="btnStartExercise">${dict.btnStartExercise || 'Iniciar ejercicio'}</span>
    `;
    toggleBtn.classList.add('btn--primary');
    toggleBtn.classList.remove('btn--secondary');

    innerCircle.style.transform = 'scale(1.0)';
    stateText.textContent = dict.breathStateReady || 'Listo para comenzar';
    counterEl.textContent = '4';
  }

  toggleBtn.addEventListener('click', () => {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  });

  // Reaccionar al cambio de idioma
  document.addEventListener('languageChange', ({ detail }) => {
    const dict = detail.dict;
    if (isRunning) {
      const phase = PHASES[currentPhaseIndex];
      stateText.textContent = dict[phase.key] || '';
      const span = toggleBtn.querySelector('[data-i18n]');
      if (span) span.textContent = dict.btnPauseExercise;
    } else {
      stateText.textContent = dict.breathStateReady || 'Listo para comenzar';
      const span = toggleBtn.querySelector('[data-i18n]');
      if (span) span.textContent = dict.btnStartExercise;
    }
  });
}
