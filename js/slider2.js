const slidesThird = document.querySelectorAll('.slider-t');
const sliderCountThird = slidesThird.length;
let currentSlideThird = 1;

function handleSlideScroll(e) {
  if (e.deltaY > 0) {
    //  вниз
    if (currentSlideThird >= 3) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      return;
    }
    const current = document.querySelector(`.slider-animation${currentSlideThird}`);
    currentSlideThird++;
    if (currentSlideThird > sliderCountThird) {
      currentSlideThird = 1;
    }
    const next = document.querySelector(`.slider-animation${currentSlideThird}`);

    if (current) {
      current.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
      current.style.transform = 'scale(0.8)';
      current.style.opacity = 0;

      setTimeout(() => {
        current.style.display = 'none';
        current.style.transform = 'scale(1)';
      }, 600);
    }

    if (next) {
      next.style.position = 'absolute';
      next.style.top = '0';
      next.style.left = '0';
      next.style.width = '100%';
      next.style.display = 'block';
      next.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
      next.style.transform = 'scale(1.2)';
      next.style.opacity = 1;

      setTimeout(() => {
        next.style.transform = 'scale(1)';
      }, 50);
    }
  } else {
    //  вверх
    if (currentSlideThird <= 1) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      return;
    }
    const current = document.querySelector(`.slider-animation${currentSlideThird}`);
    currentSlideThird--;
    if (currentSlideThird < 1) {
      currentSlideThird = sliderCountThird;
    }
    const next = document.querySelector(`.slider-animation${currentSlideThird}`);

    if (current) {
      current.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
      current.style.transform = 'scale(0.8)';
      current.style.opacity = 0;

      setTimeout(() => {
        current.style.display = 'none';
        current.style.transform = 'scale(1)';
      }, 600);
    }

    if (next) {
      next.style.position = 'absolute';
      next.style.top = '0';
      next.style.left = '0';
      next.style.width = '100%';
      next.style.display = 'block';
      next.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
      next.style.transform = 'scale(1.2)';
      next.style.opacity = 1;

      setTimeout(() => {
        next.style.transform = 'scale(1)';
      }, 50);
    }
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('Элемент виден');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '15px';

        element.addEventListener('wheel', handleSlideScroll, { passive: false });
      } else {
        console.log('Элемент не виден');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';

        element.removeEventListener('wheel', handleSlideScroll);
      }
    });
  },
  {
    threshold: 1.0,
    rootMargin: '0px',
  }
);

const element = document.getElementById('third-section');
business - macbook - section;
if (element) {
  observer.observe(element);
}
