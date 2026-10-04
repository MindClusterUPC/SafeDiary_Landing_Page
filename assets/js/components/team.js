/**
 * SafeDiary - Team Carousel Component with Placeholders
 * MindCluster
 */

import { getCurrentDict } from '../i18n/i18n.js';

let currentIndex = 0;

export function initTeam() {
  const memberImg = document.getElementById('teamMemberImg');
  const memberCounter = document.getElementById('teamMemberCounter');
  const memberName = document.getElementById('teamMemberName');
  const memberRole = document.getElementById('teamMemberRole');
  const memberQuote = document.getElementById('teamMemberQuote');
  const memberBio = document.getElementById('teamMemberBio');
  const prevBtn = document.getElementById('teamPrevBtn');
  const nextBtn = document.getElementById('teamNextBtn');
  const tabsContainer = document.getElementById('teamTabsContainer');

  if (!memberName || !tabsContainer) return;

  function renderMember(index) {
    const dict = getCurrentDict();
    const members = dict.teamMembers || [];
    if (!members.length) return;

    if (index < 0) index = members.length - 1;
    if (index >= members.length) index = 0;
    currentIndex = index;

    const member = members[currentIndex];

    // Actualizar datos del integrante
    if (memberImg) {
      memberImg.src = member.image;
      memberImg.alt = member.name;
    }
    if (memberCounter) {
      const num = String(currentIndex + 1).padStart(2, '0');
      const total = String(members.length).padStart(2, '0');
      memberCounter.textContent = `${num} / ${total}`;
    }
    if (memberName) memberName.textContent = member.name;
    if (memberRole) memberRole.textContent = member.role;
    if (memberQuote) memberQuote.textContent = member.quote;
    if (memberBio) memberBio.textContent = member.bio;

    // Actualizar estado de las tabs
    tabsContainer.querySelectorAll('.team-tab-btn').forEach((btn, i) => {
      if (i === currentIndex) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });
  }

  function renderTabs() {
    const dict = getCurrentDict();
    const members = dict.teamMembers || [];
    tabsContainer.innerHTML = '';

    members.forEach((member, i) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = `team-tab-btn ${i === currentIndex ? 'active' : ''}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
      tab.textContent = member.name;
      tab.addEventListener('click', () => {
        renderMember(i);
      });
      tabsContainer.appendChild(tab);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      renderMember(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      renderMember(currentIndex + 1);
    });
  }

  // Inicializar tabs y miembro
  renderTabs();
  renderMember(0);

  // Escuchar cambio de idioma para actualizar placeholders en el idioma seleccionado
  document.addEventListener('languageChange', () => {
    renderTabs();
    renderMember(currentIndex);
  });
}
