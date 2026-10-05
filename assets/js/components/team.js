// Visualizador interactivo de integrantes del equipo

import { getCurrentDict } from '../i18n/i18n.js';

let currentIndex = 0;

export function initTeam() {
  const memberImg = document.getElementById('teamMemberImg');
  const memberCounter = document.getElementById('teamMemberCounter');
  const memberPill = document.getElementById('teamMemberPill');
  const memberName = document.getElementById('teamMemberName');
  const memberRole = document.getElementById('teamMemberRole');
  const memberQuote = document.getElementById('teamMemberQuote');
  const memberBio = document.getElementById('teamMemberBio');
  const prevBtn = document.getElementById('prevMemberBtn');
  const nextBtn = document.getElementById('nextMemberBtn');
  const tabsContainer = document.getElementById('teamCarouselTabs');

  if (!memberName || !tabsContainer) return;

  function renderMember(index) {
    const dict = getCurrentDict();
    const members = dict.teamMembers || [];
    if (!members.length) return;

    if (index < 0) index = members.length - 1;
    if (index >= members.length) index = 0;
    currentIndex = index;

    const member = members[currentIndex];

    // Actualizar visuales del miembro
    if (memberImg) {
      memberImg.src = member.image;
      memberImg.alt = member.name;
    }
    if (memberCounter) {
      const num = String(currentIndex + 1).padStart(2, '0');
      const total = String(members.length).padStart(2, '0');
      memberCounter.textContent = `${num} / ${total}`;
    }
    if (memberPill) memberPill.textContent = member.specialty || member.role;
    if (memberName) memberName.textContent = member.name;
    if (memberRole) memberRole.textContent = member.role;
    if (memberQuote) memberQuote.textContent = member.quote;
    if (memberBio) memberBio.textContent = member.bio;

    const badgeFooter = document.getElementById('teamBadgeFooter');
    if (badgeFooter) badgeFooter.textContent = member.badgeRole || member.name;

    // Actualizar botones tabs inferiores
    tabsContainer.querySelectorAll('.team-member-pill-btn').forEach((btn, i) => {
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
      tab.className = `team-member-pill-btn ${i === currentIndex ? 'active' : ''}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
      tab.setAttribute('data-member-index', i);

      tab.innerHTML = `
        <img src="${member.image}" alt="${member.shortName || member.name}" class="team-pill-avatar">
        <span class="tracking-tight whitespace-nowrap">${member.shortName || member.name}</span>
      `;

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

  renderTabs();
  renderMember(0);

  document.addEventListener('languageChange', () => {
    renderTabs();
    renderMember(currentIndex);
  });
}
