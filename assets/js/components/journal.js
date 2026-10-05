// Funcionalidad del diario interactivo y grabacion simulada

import { getCurrentDict } from '../i18n/i18n.js';

export function initJournal() {
  const textarea = document.getElementById('journalPromptArea');
  const inspirationBtn = document.getElementById('inspirationBtn');
  const recordVoiceBtn = document.getElementById('recordVoiceBtn');
  const recordingBadge = document.getElementById('recordingBadge');
  const saveBtn = document.getElementById('saveReflectionBtn');
  const drawer = document.getElementById('reflectionDrawer');
  const recordIcon = document.getElementById('recordIcon');
  const recordLabel = document.getElementById('recordLabel');

  if (!textarea || !saveBtn) return;

  let promptIndex = 0;
  let isRecording = false;

  // Botón inspiración
  if (inspirationBtn) {
    inspirationBtn.addEventListener('click', () => {
      const dict = getCurrentDict();
      const prompts = dict.inspirationPrompts || [];
      if (prompts.length > 0) {
        promptIndex = (promptIndex + 1) % prompts.length;
        textarea.value = prompts[promptIndex];
        textarea.focus();
      }
    });
  }

  // Píldoras de sugerencias debajo del diario
  document.querySelectorAll('.supportive-pill-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const span = btn.querySelector('[data-i18n]');
      if (span && span.textContent) {
        textarea.value = span.textContent + ' — ';
        textarea.focus();
      }
    });
  });

  // Simulación de grabación de voz
  if (recordVoiceBtn) {
    recordVoiceBtn.addEventListener('click', () => {
      isRecording = !isRecording;
      const dict = getCurrentDict();

      if (isRecording) {
        if (recordingBadge) recordingBadge.classList.add('active');
        if (recordIcon) recordIcon.textContent = 'stop_circle';
        if (recordLabel) recordLabel.textContent = dict.btnVoiceRecording || 'GRABANDO...';
        recordVoiceBtn.classList.add('btn--secondary');
      } else {
        if (recordingBadge) recordingBadge.classList.remove('active');
        if (recordIcon) recordIcon.textContent = 'mic';
        if (recordLabel) recordLabel.textContent = dict.btnRecordVoice || 'Grabar nota de voz';
        recordVoiceBtn.classList.remove('btn--secondary');

        if (textarea.value.trim() === '') {
          textarea.value = dict.journalPlaceholder || '';
        }
      }
    });
  }

  // Guardar reflexion y mostrar aviso
  saveBtn.addEventListener('click', () => {
    const dict = getCurrentDict();
    if (drawer) {
      drawer.classList.add('visible');
      const textSpan = drawer.querySelector('.drawer-message');
      if (textSpan) {
        textSpan.textContent = dict.reflectionSavedFeedback || 'Guardado con cariño en la memoria de tu dispositivo.';
      }

      if (isRecording && recordVoiceBtn) {
        recordVoiceBtn.click();
      }

      setTimeout(() => {
        textarea.value = '';
        textarea.placeholder = dict.reflectionSavedFeedback;
      }, 500);

      setTimeout(() => {
        drawer.classList.remove('visible');
      }, 5000);
    }
  });

  document.addEventListener('languageChange', ({ detail }) => {
    const dict = detail.dict;
    if (recordLabel) {
      recordLabel.textContent = isRecording
        ? (dict.btnVoiceRecording || 'GRABANDO...')
        : (dict.btnRecordVoice || 'Grabar nota de voz');
    }
  });
}
