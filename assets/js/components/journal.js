/**
 * SafeDiary - Interactive Journal Component
 * MindCluster
 */

import { getCurrentDict, t } from '../i18n/i18n.js';

export function initJournal() {
  const textarea = document.getElementById('journalPromptArea');
  const inspirationBtn = document.getElementById('inspirationBtn');
  const recordVoiceBtn = document.getElementById('recordVoiceBtn');
  const recordingBadge = document.getElementById('recordingBadge');
  const saveBtn = document.getElementById('saveReflectionBtn');
  const feedbackEl = document.getElementById('journalFeedback');
  const recordIcon = document.getElementById('recordIcon');
  const recordLabel = document.getElementById('recordLabel');

  if (!textarea || !saveBtn) return;

  let promptIndex = 0;
  let isRecording = false;

  // Rotar sugerencias de inspiración
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

  // Simulación de grabación de nota de voz
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
        
        // Simular que se capturó una nota de audio
        if (textarea.value.trim() === '') {
          textarea.value = dict.journalPlaceholder || '';
        }
      }
    });
  }

  // Guardar reflexión con feedback
  saveBtn.addEventListener('click', () => {
    const text = textarea.value.trim();
    const dict = getCurrentDict();

    if (feedbackEl) {
      feedbackEl.classList.add('visible');
      const textSpan = feedbackEl.querySelector('.feedback-text');
      if (textSpan) {
        textSpan.textContent = dict.reflectionSavedFeedback || '✨ Tu reflexión ha sido guardada con éxito.';
      }

      // Cerrar si estaba grabando
      if (isRecording && recordVoiceBtn) {
        recordVoiceBtn.click();
      }

      // Ocultar feedback tras 4 segundos
      setTimeout(() => {
        feedbackEl.classList.remove('visible');
      }, 4000);
    }
  });

  // Reaccionar a cambios de idioma
  document.addEventListener('languageChange', ({ detail }) => {
    const dict = detail.dict;
    if (recordLabel) {
      recordLabel.textContent = isRecording
        ? (dict.btnVoiceRecording || 'GRABANDO...')
        : (dict.btnRecordVoice || 'Grabar nota de voz');
    }
  });
}
