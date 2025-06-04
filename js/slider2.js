import { observer1 } from './examinationBlockSlider.js';

// переменные
const sliderT = '.slider-t';
const sliderAnimation = '.slider-animation';
const thirdSection = 'third-section';

const businessT = '.business-t';
const businessAnimation = '.business-macbook-slider';
const businessSection = 'business-macbook-section';
//

const slidesThird = document.querySelectorAll('.slider-t');
const sliderCountThird = slidesThird.length;
let currentSlideThird = 1;

function handleSlideScroll(e) {
  if (e.deltaY > 0) {
    //  вниз
    if (currentSlideThird === 3) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    } else {
      // console.log(e.distance);

      const current = document.querySelector(`.slider-animation${currentSlideThird}`);
      currentSlideThird++;
      if (currentSlideThird > sliderCountThird) {
        currentSlideThird = 1;
      }
      const next = document.querySelector(`.slider-animation${currentSlideThird}`);

      if (current) {
        current.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
        current.style.transform = 'translate3d(-100px, 0, 0)';
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
        next.style.transform = 'translate3d(100px, 0, 0)';
        next.style.opacity = 1;

        setTimeout(() => {
          next.style.transform = 'scale(1)';
        }, 50);
      }
    }
  } else {
    //  вверх
    if (currentSlideThird === 1) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    } else {
      const current = document.querySelector(`.slider-animation${currentSlideThird}`);
      currentSlideThird--;
      if (currentSlideThird < 1) {
        currentSlideThird = sliderCountThird;
      }
      const next = document.querySelector(`.slider-animation${currentSlideThird}`);

      if (current) {
        current.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
        current.style.transform = 'translate3d(-100px, 0, 0)';
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
        next.style.transform = 'translate3d(100px, 0, 0)';
        next.style.opacity = 1;

        setTimeout(() => {
          next.style.transform = 'scale(1)';
        }, 50);
      }
    }
  }
}
//
// function getDistanceFromBottomToFooterBottom(element, footer) {
//   const elementRect = element.getBoundingClientRect();
//   const footerRect = footer.getBoundingClientRect();
//   const distanceToFooterBottom = footerRect.bottom - elementRect.bottom;
//   return distanceToFooterBottom;
// }

// const element3 = document.getElementById('third-section');
// const footer = document.querySelector('footer');
// let distance = null;
// if (element3 && footer) {
//   distance = getDistanceFromBottomToFooterBottom(element3, footer);
//   console.log(`Расстояние от низа элемента до низа футера: ${distance}px`);
// } else {
//   console.log('Элемент не найден');
// }
//
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('Элемент виден');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '15px';

        element.addEventListener('mouseover', function () {
          element.addEventListener('wheel', handleSlideScroll, { passive: false });
        });
      } else {
        console.log('Элемент не виден');
        setTimeout(() => {
          document.body.style.overflow = '';
          document.body.style.paddingRight = '';
          element.addEventListener('mouseout', function () {
            element.removeEventListener('wheel', handleSlideScroll);
          });
        }, 1000);
      }
    });
  },
  {
    threshold: 1.0,
    rootMargin: '0px',
  }
);

const element = document.getElementById(thirdSection);

const elementBusiness = document.getElementById('business - macbook - section');

if (element) {
  observer.observe(element);
}
