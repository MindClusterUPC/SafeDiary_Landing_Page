const carousel = document.getElementById('about-product');
const navigation = carousel.querySelector('.video-carousel__navigation');
const tablist = navigation.querySelector('[role="tablist"]');
const tabs = [...tablist.querySelectorAll('[role="tab"]')];
const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
const videos = panels.map(panel => panel.querySelector('video'));
const status = carousel.querySelector('[role="status"]');
let active = 0;

function showVideo(index, announce = false) {
  if (index !== active && !videos[active].paused) {
    videos[active].pause();
  }
  active = index;

  tabs.forEach((tab, position) => {
    const selected = position === active;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    panels[position].hidden = !selected;
  });

  status.textContent = announce ? panels[active].querySelector('h3').textContent : '';
}

function wrappedIndex(step) {
  return (active + step + tabs.length) % tabs.length;
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showVideo(index));
});

navigation.querySelectorAll('[data-video-step]').forEach(button => {
  button.addEventListener('click', () => {
    showVideo(wrappedIndex(Number(button.dataset.videoStep)), true);
  });
});

tablist.addEventListener('keydown', (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

  let index;
  switch (event.key) {
    case 'ArrowLeft': index = wrappedIndex(-1); break;
    case 'ArrowRight': index = wrappedIndex(1); break;
    case 'Home': index = 0; break;
    case 'End': index = tabs.length - 1; break;
    default: return;
  }
  event.preventDefault();
  showVideo(index);
  tabs[active].focus();
});

function selectFromHash() {
  if (location.hash === '#about-team') {
    showVideo(1);
  } else if (location.hash === '#about-product') {
    showVideo(0);
  }
}

showVideo(location.hash === '#about-team' ? 1 : 0);
window.addEventListener('hashchange', selectFromHash);
navigation.hidden = false;
