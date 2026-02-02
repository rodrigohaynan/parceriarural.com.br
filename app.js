/* Minimal interactive touches: rotate news card on tap and simple focus states */
const heroCard = document.querySelector('.hero-card');
if (heroCard) {
  heroCard.addEventListener('pointerenter', () => heroCard.style.transform = 'translateY(-6px)');
  heroCard.addEventListener('pointerleave', () => heroCard.style.transform = '');
  heroCard.style.transition = 'transform 240ms ease';
}

/* Progressive randomization of the hero headline (small UX flourish) */
const headlines = [
  'Mercado do milho registra alta de preços',
  'Soja: exportações atingem novo patamar',
  'Irrigação inteligente reduz consumo em 30%',
  'Pecuária sustentável ganha espaço em leilões'
];
const h2 = document.querySelector('.hero-card h2');
if (h2) {
  const idx = Math.floor(Math.random()*headlines.length);
  h2.textContent = headlines[idx];
}

/* Make cards focusable for keyboard users */
document.querySelectorAll('.card').forEach(card => {
  card.setAttribute('tabindex', '0');
  card.addEventListener('focus', () => card.style.boxShadow = '0 10px 24px rgba(10,10,10,0.08)');
  card.addEventListener('blur', () => card.style.boxShadow = '');
});

/* Ensure links open safely on mobile; no other setup needed */