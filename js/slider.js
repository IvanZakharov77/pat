// first slider
let parents = document.getElementsByClassName('hero');

const disableScroll = function (event) {
  event.preventDefault();
};

const disableTouchMove = function (event) {
  event.preventDefault();
};

let currentSlide = 1;
const slides = document.querySelectorAll('.slid');

//
let circles = document.querySelectorAll('.circle-hero');
let lastScroll = 0;
let isScrolling = false;
const offsets = [-0, -0, -45, -60, -74, -88];
const offsets1 = [-0, -0, 0, 0, 0, 0];

function changeSlideForward() {
  const current = document.querySelector(`.slid-${currentSlide}`);
  if (current) {
    current.style.transition = 'transform 1s ease, opacity 1s ease';
    current.style.transform = 'translateX(-100%)';
    current.style.opacity = 0;

    setTimeout(() => {
      current.style.display = 'none';
    }, 1000);
  }

  currentSlide++;
  if (currentSlide > slides.length) {
    currentSlide = 1;
  }
  const currentDot = document.querySelector(`.circle${currentSlide - 1}`);
  if (currentDot) {
    let offset = offsets[currentSlide];
    currentDot.style.transform = `translateX(${offset}px)`;
  }

  const next = document.querySelector(`.slid-${currentSlide}`);
  if (next) {
    next.style.right = '210px';
    next.style.display = 'inline-flex';
    next.style.transition = 'transform 1s ease, opacity 1s ease';
    next.style.transform = 'translateX(100%)';
    next.style.opacity = 1;

    setTimeout(() => {
      next.style.transform = 'translateX(0)';
    }, 0);
  }
}

function changeSlideBackward() {
  const current = document.querySelector(`.slid-${currentSlide}`);
  if (current) {
    current.style.transition = 'transform 1s ease, opacity 1s ease';
    current.style.transform = 'translateX(100%)';
    current.style.opacity = 0;

    setTimeout(() => {
      current.style.display = 'none';
    }, 1000);
  }
  //

  //
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = slides.length;
  }
  const currentDot = document.querySelector(`.circle${currentSlide}`);
  if (currentDot) {
    let offset = offsets1[currentSlide];
    currentDot.style.transform = `translateX(${offset}px)`;
  }
  const previous = document.querySelector(`.slid-${currentSlide}`);
  if (previous) {
    previous.style.display = 'inline-flex';
    previous.style.transition = 'transform 1s ease, opacity 1s ease';
    previous.style.transform = 'translateX(-100%)';
    previous.style.opacity = 1;

    setTimeout(() => {
      previous.style.transform = 'translateX(0)';
    }, 0);
  }
}

function startPageScroll() {
  window.removeEventListener('wheel', handleScrollSlide);
  window.removeEventListener('wheel', handleScrollSlide);
  window.removeEventListener('touchmove', disableTouchMove);
}

function startSlideScroll() {
  window.removeEventListener('wheel', disableScroll);
  window.removeEventListener('wheel', handleScrollSlide);
  window.removeEventListener('touchmove', disableTouchMove);
}

function handleScrollSlide(event) {
  event.preventDefault();

  if (event.deltaY > 0) {
    changeSlideForward();

    if (currentSlide === 5) {
      startPageScroll();
    }
  } else if (event.deltaY < 0 && currentSlide > 1) {
    changeSlideBackward();

    if (currentSlide === 1) {
      startPageScroll();
    }
  }
}

function handleMouseEnter(event) {
  window.addEventListener('wheel', handleScrollSlide, { passive: false });
  window.addEventListener('touchmove', disableTouchMove, { passive: false });
}

function handleMouseLeave(event) {
  window.removeEventListener('wheel', handleScrollSlide);
  window.removeEventListener('touchmove', disableTouchMove);

  if (currentSlide === 5) {
    startPageScroll();
  }
}

const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

rightBtn.addEventListener('click', function () {
  if (currentSlide === 1) {
    return;
  }

  changeSlideBackward();
  if (currentSlide != 1) {
    if (currentSlide === 1) {
      startPageScroll();
    }
  }
});

leftBtn.addEventListener('click', function () {
  if (currentSlide === 5) {
    return;
  }

  changeSlideForward();
  if (currentSlide != 1) {
    if (currentSlide === 5) {
      startPageScroll();
    }
  }
  return;
});

for (let i = 0; i < parents.length; i++) {
  parents[i].addEventListener('mouseenter', handleMouseEnter);
  parents[i].addEventListener('mouseleave', handleMouseLeave);
}

// ---------------------second slider

// ---------------------second slider

let parentsThird = document.getElementsByClassName('third-block');

for (let i = 0; i < parentsThird.length; i++) {
  let currentSlideThird = 1;
  const slidesThird = document.querySelectorAll('.slider-t');
  const sliderCountThird = slidesThird.length;
  let isScrollingThird = false;
  let scrollTimeout;
  let isMouseOver = false;
  let lastScrollTime = 0;
  const SCROLL_THRESHOLD = 100;

  // Функция для проверки, находится ли мышь над слайдером
  const checkMousePosition = (e) => {
    const rect = parentsThird[i].getBoundingClientRect();
    return (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    );
  };

  const handleThirdSliderScroll = (e) => {
    // Проверяем позицию мыши при каждом событии прокрутки
    if (!checkMousePosition(e)) {
      isMouseOver = false;
      return;
    }
    isMouseOver = true;

    const currentTime = Date.now();
    if (currentTime - lastScrollTime < SCROLL_THRESHOLD) {
      return;
    }
    lastScrollTime = currentTime;

    if (isScrollingThird) {
      e.preventDefault();
      return;
    }

    const delta = e.deltaY || e.detail || e.wheelDelta;
    isScrollingThird = true;
    e.preventDefault();

    const animateSlide = (current, next, direction) => {
      if (current) {
        current.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
        current.style.transform = 'scale(0.8)';
        current.style.opacity = 0;

        setTimeout(() => {
          current.style.display = 'none';
          current.style.transform = 'scale(1)';
          isScrollingThird = false;
        }, 300);
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
    };

    if (delta > 0 && currentSlideThird < sliderCountThird) {
      const current = document.querySelector(`.slider-animation${currentSlideThird}`);
      currentSlideThird++;
      const next = document.querySelector(`.slider-animation${currentSlideThird}`);
      animateSlide(current, next, 'forward');
      if (currentSlideThird === 3) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        isMouseOver = false;
        isScrollingThird = false;
      }
    } else if (delta < 0 && currentSlideThird > 1) {
      const current = document.querySelector(`.slider-animation${currentSlideThird}`);
      currentSlideThird--;
      const next = document.querySelector(`.slider-animation${currentSlideThird}`);
      animateSlide(current, next, 'backward');
      if (currentSlideThird === 1) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        isMouseOver = false;
        isScrollingThird = false;
      }
    } else {
      isScrollingThird = false;
      if (currentSlideThird === 3 || currentSlideThird === 1) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        isMouseOver = false;
      }
    }

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrollingThird = false;
      if (currentSlideThird === 3 || currentSlideThird === 1) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        isMouseOver = false;
      }
    }, 400);
  };

  const blockScroll = (e) => {
    if (checkMousePosition(e) && currentSlideThird !== 3) {
      isMouseOver = true;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
  };

  const unblockScroll = (e) => {
    if (!checkMousePosition(e) || currentSlideThird === 3) {
      isMouseOver = false;
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  };

  // Добавляем обработчики для отслеживания движения мыши
  parentsThird[i].addEventListener('mousemove', (e) => {
    if (checkMousePosition(e)) {
      blockScroll(e);
    } else {
      unblockScroll(e);
    }
  });

  parentsThird[i].addEventListener('mouseenter', blockScroll);
  parentsThird[i].addEventListener('mouseleave', unblockScroll);
  parentsThird[i].addEventListener('wheel', handleThirdSliderScroll, { passive: false });
}
