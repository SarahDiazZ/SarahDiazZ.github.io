// ── Typewriter effect ──────────────────────────────────────────────────────
const phrases = [
  'Building mixed reality experiences.',
  'Turning ideas into code.',
  'CS student at NMSU.',
  'US Army DEVCOM intern alumni.',
];

let phraseIdx = 0, charIdx = 0, deleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
  if (!typeEl) return;
  const phrase = phrases[phraseIdx];

  typeEl.textContent = deleting
    ? phrase.slice(0, --charIdx)
    : phrase.slice(0, ++charIdx);

  if (!deleting && charIdx === phrase.length) {
    deleting = true;
    return setTimeout(type, 2200);
  }
  if (deleting && charIdx === 0) {
    deleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
  }

  setTimeout(type, deleting ? 45 : 75);
}

setTimeout(type, 1500);

// ── Active nav link ────────────────────────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach((link) => {
  if (link.dataset.nav === currentPage) {
    link.classList.add('active-link');
  }
});

// ── Mobile menu ────────────────────────────────────────────────────────────
const menuBtn      = document.getElementById('menu-btn');
const mobileMenu   = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon    = document.getElementById('close-icon');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', isOpen);
    hamburgerIcon?.classList.toggle('hidden', !isOpen);
    closeIcon?.classList.toggle('hidden', isOpen);
  });
}

// ── Scroll reveal ──────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
