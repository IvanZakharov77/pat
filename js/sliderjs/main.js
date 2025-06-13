// Подключаем GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function initFeaturesBannerAnimation(sectionSelector, cardSelector) {
  const section = document.querySelector(sectionSelector);
  const cards = gsap.utils.toArray(cardSelector);

  if (!section || cards.length === 0) return;

  const shift = 60;
  const showDur = 1.2;
  const hold = 1;
  const hideDur = 1.2;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: `+=${Math.max(cards.length * 400, 2400)}`,
      pin: true,
      scrub: 4,
      snap: {
        snapTo: 1 / (cards.length - 1),
        duration: 0.3,
        ease: 'power2.out',
      },
    },
  });

  // Анимация карточек
  cards.forEach((card, i) => {
    const xOff = i % 2 === 0 ? shift : -shift;
    tl.fromTo(
      card,
      { y: 60, x: xOff, opacity: 0 },
      { y: 0, x: xOff, opacity: 1, duration: showDur, ease: 'power3.out' }
    )
      .to({}, { duration: hold })
      .to(card, { y: -60, x: xOff, opacity: 0, duration: hideDur, ease: 'power3.in' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initFeaturesBannerAnimation(
    '.section-features-banner .features-content',
    '.section-features-banner .app-widget'
  );

  initFeaturesBannerAnimation(
    '.section-features-banner1 .features-content1',
    '.section-features-banner1 .app-widget1'
  );
});
