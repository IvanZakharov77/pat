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
