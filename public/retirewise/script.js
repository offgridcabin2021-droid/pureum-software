const isFr = document.documentElement.lang === 'fr';
const locale = isFr ? 'fr-CA' : 'en-CA';
const fmt = n => new Intl.NumberFormat(locale, { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(n);
const ids = ['age', 'retire', 'savings', 'monthly'];
const els = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));

function updatePlanner() {
  if (!els.age) return;
  const age = +els.age.value, retire = +els.retire.value, savings = +els.savings.value, monthly = +els.monthly.value;
  document.getElementById('ageLabel').textContent = age;
  document.getElementById('retireLabel').textContent = retire;
  document.getElementById('savingsLabel').textContent = fmt(savings);
  document.getElementById('monthlyLabel').textContent = fmt(monthly);
  let years = Math.max(0, retire - age), months = years * 12, rate = .05 / 12, projected = savings * Math.pow(1 + rate, months) + monthly * (months ? (Math.pow(1 + rate, months) - 1) / rate : 0);
  document.getElementById('projection').textContent = fmt(Math.round(projected));
  const descEl = document.getElementById('calcDescription');
  if (descEl) {
    if (isFr) {
      descEl.textContent = years ? `Basé sur ${years} ans de cotisations et une croissance annuelle estimée à 5 %.` : "L'âge de la retraite est inférieur ou égal à l'âge actuel; affichage de l'épargne actuelle uniquement.";
    } else {
      descEl.textContent = years ? `Based on ${years} years of contributions and assumed 5% annual growth.` : 'Retirement age is at or below current age; showing present savings only.';
    }
  }
  ids.forEach(id => {
    let e = els[id];
    if (e) e.style.setProperty('--fill', `${100 * (e.value - e.min) / (e.max - e.min)}%`);
  });
}
ids.forEach(id => { if (els[id]) els[id].addEventListener('input', updatePlanner); });
updatePlanner();

const pricing = isFr ? {
  annual: { pro: '19,99 $', advisor: '499,99 $', period: '/ an' },
  monthly: { pro: "Voir l'App Store", advisor: "Voir l'App Store", period: '' }
} : {
  annual: { pro: '$19.99', advisor: '$499.99', period: '/ year' },
  monthly: { pro: 'See App Store', advisor: 'See App Store', period: '' }
};

document.querySelectorAll('[data-billing]').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('[data-billing]').forEach(b => {
    b.classList.toggle('active', b === btn);
    b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
  });
  const item = pricing[btn.dataset.billing];
  if (item) {
    const p1 = document.getElementById('proPrice'), a1 = document.getElementById('advisorPrice'), p2 = document.getElementById('proPeriod'), a2 = document.getElementById('advisorPeriod');
    if (p1) p1.textContent = item.pro;
    if (a1) a1.textContent = item.advisor;
    if (p2) p2.textContent = item.period;
    if (a2) a2.textContent = item.period;
  }
}));

const menu = document.getElementById('menuToggle'), nav = document.getElementById('nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .08 });
document.querySelectorAll('.intro,.story-card,.feature-card,.planner-intro,.calculator,.privacy-content,.price-card,.faq,.end-cta').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
