const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.classList.toggle('is-open', open);
});
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}));

// Language dropdown toggle
const langDropdowns = document.querySelectorAll('.lang-dropdown');
langDropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.lang-toggle');
  toggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

document.addEventListener('click', (e) => {
  langDropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('is-open');
      dropdown.querySelector('.lang-toggle')?.setAttribute('aria-expanded', 'false');
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    langDropdowns.forEach(dropdown => {
      dropdown.classList.remove('is-open');
      dropdown.querySelector('.lang-toggle')?.setAttribute('aria-expanded', 'false');
    });
  }
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.desktop-nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-30% 0px -55% 0px' });
  sections.forEach(section => observer.observe(section));
}

// Destination cards cinematic pan on click / tap (5.5s smooth motion)
const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach(card => {
  let timer = null;
  card.addEventListener('click', () => {
    destinationCards.forEach(other => {
      if (other !== card) other.classList.remove('is-animating');
    });
    card.classList.remove('is-animating');
    void card.offsetWidth;
    card.classList.add('is-animating');
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      card.classList.remove('is-animating');
    }, 5500);
  });
});

