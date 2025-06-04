export const observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('Элемент виден111111111111111');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '15px';

        // element.addEventListener('wheel', handleSlideScroll, { passive: false });
      } else {
        console.log('Элемент не виден11111111111111');
        setTimeout(() => {
          document.body.style.overflow = '';
          document.body.style.paddingRight = '';
          //   element.removeEventListener('wheel', handleSlideScroll);
        }, 1000);
      }
    });
  },
  {
    threshold: 1.0,
    rootMargin: '0px',
  }
);

const element = document.getElementById('third-section');
const elementBusiness = document.getElementById('business - macbook - section');

if (element) {
  observer1.observe(element);
}
//
