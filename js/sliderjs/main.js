// 0) Подключаем GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function initFeaturesBannerAnimation() {
  const section = document.querySelector('.section-features-banner .features-content');
  const cards = gsap.utils.toArray('.section-features-banner .app-widget');

  if (!section || cards.length === 0) return;

  // 2) Собираем timeline для карточек
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
        // делим весь диапазон на (N−1) ровных шагов
        snapTo: 1 / (cards.length - 1),
        duration: 0.3,
        ease: 'power2.out',
      },
    },
  });

  // 3) Анимируем карточки как раньше
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

document.addEventListener('DOMContentLoaded', initFeaturesBannerAnimation);
