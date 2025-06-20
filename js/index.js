function adjustLayout() {
  const blocks = document.querySelectorAll('.businesswoman-block > div');
  if (window.innerWidth <= 767) {
    blocks.forEach((block) => {
      if (!block.querySelector('div')) {
        const h3 = block.querySelector('h3');
        const p = block.querySelector('p');

        if (h3 && p) {
          const newDiv = document.createElement('div');
          newDiv.appendChild(h3);
          newDiv.appendChild(p);
          block.appendChild(newDiv);
        }
      }
    });
  } else {
    blocks.forEach((block) => {
      const wrapper = block.querySelector('div');
      if (wrapper) {
        block.insertBefore(wrapper.querySelector('h3'), wrapper);
        block.insertBefore(wrapper.querySelector('p'), wrapper);
        block.removeChild(wrapper);
      }
    });
  }
}
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);

// --------------
const btnOpenMenu = document.querySelectorAll('.navbar-toggler');
const btnClozeMenu = document.querySelectorAll('.btn-close-menu');
const activeBlockMenuBack = document.querySelector('.mobile-block-menu');
const activeMenu = document.querySelector('.mobile-menu');
const parentBlock = document.querySelector('.mobile-block-menu');

function closeMenu(event) {
  if (!event.target.closest('.mobile-menu') && !event.target.closest('.navbar-toggler')) {
    activeBlockMenuBack.classList.remove('active-block-menu-back');
    activeMenu.classList.remove('active-menu');
    setTimeout(() => {
      activeBlockMenuBack.style.display = 'none';
    }, 300);
  }
}

function initMenu() {
  if (window.innerWidth < 1280) {
    if (btnOpenMenu.length > 0 && activeBlockMenuBack && activeMenu) {
      btnOpenMenu.forEach(function (btn) {
        btn.addEventListener('click', function () {
          activeBlockMenuBack.style.display = 'block';
          setTimeout(() => {
            activeBlockMenuBack.classList.add('active-block-menu-back');
            activeMenu.classList.add('active-menu');
          }, 10);
        });
      });

      btnClozeMenu.forEach(function (btn) {
        btn.addEventListener('click', function () {
          activeBlockMenuBack.classList.remove('active-block-menu-back');
          activeMenu.classList.remove('active-menu');
          setTimeout(() => {
            activeBlockMenuBack.style.display = 'none';
          }, 300);
        });
      });

      parentBlock.addEventListener('click', closeMenu);
    }
  } else {
    activeBlockMenuBack.style.display = 'block';
    activeBlockMenuBack.classList.remove('active-block-menu-back');
    activeMenu.classList.remove('active-menu');
  }
}
initMenu();
window.addEventListener('resize', function () {
  initMenu();
});
// замена в кнопке входа текста на иконку человекчек
const btn = document.querySelector('.btn.btn-secondary.btn-lg');

function replaceTextWithImage() {
  if (window.innerWidth < 1000) {
    const img = document.createElement('img');
    img.src = './image/entrance.svg';
    img.alt = 'Войти';
    img.style.width = 'auto';
    btn.innerHTML = '';
    btn.appendChild(img);
  } else {
    btn.innerHTML = 'Войти';
  }
}
replaceTextWithImage();
window.addEventListener('resize', function () {
  replaceTextWithImage();
});
// замена текста в кнопке "попробовать бесплатно" на "попробовать за 0"
const btnFirst = document.querySelector('.btn.btn-first.btn-lg');

function replaceText() {
  if (window.innerWidth < 768) {
    btnFirst.innerHTML = '';
    btnFirst.innerHTML = 'Попробовать за 0€';
  } else {
    btnFirst.innerHTML = 'Попробовать бесплатно';
  }
}
replaceText();
window.addEventListener('resize', function () {
  replaceText();
});
// btn price--------------------
function toggleOption(option) {
  const yearly = document.getElementById('yearly');
  const monthly = document.getElementById('monthly');

  const firstBlock = document.getElementsByClassName('first-block-price')[0];
  const secondBlock = document.getElementsByClassName('second-block-price')[0];

  if (option === 'yearly') {
    yearly.classList.add('activ');
    monthly.classList.remove('activ');

    firstBlock.classList.remove('active-block-price');
    secondBlock.classList.add('active-block-price');
  } else {
    monthly.classList.add('activ');
    yearly.classList.remove('activ');

    secondBlock.classList.remove('active-block-price');
    firstBlock.classList.add('active-block-price');
  }
}
// -------------
// ------------------acordion
function toggleCollapse(targetId, collapseElements, otherCollapseElements) {
  setTimeout(() => {
    collapseElements.forEach((element) => {
      if (element.classList.contains('show')) {
        element.classList.remove('show');
        otherCollapseElements.forEach((otherElement) => {
          otherElement.classList.remove('show');
        });
      } else {
        element.classList.add('show');
        otherCollapseElements.forEach((otherElement) => {
          otherElement.classList.remove('show');
        });
      }
    });
  }, 200);
}

const allBlocksBtn = document.querySelector('.list-all-price');
const collapse00 = document.querySelectorAll('.collapse00');
const collapse01 = document.querySelectorAll('.collapse01');
const collapse02 = document.querySelectorAll('.collapse02');
const collapse03 = document.querySelectorAll('.collapse03');
const collapse04 = document.querySelectorAll('.collapse04');
const collapse05 = document.querySelectorAll('.collapse05');

allBlocksBtn.addEventListener('click', function (event) {
  if (event.target.classList.contains('accordion-button')) {
    const targetId = event.target.getAttribute('data-bs-target');

    if (targetId === '#collapse0') {
      collapse01.forEach((element) => {
        if (element.classList.contains('show')) {
          element.classList.remove('show');
        }
      });
    } else if (targetId === '#collapse1') {
      toggleCollapse(targetId, collapse01, collapse02);
    } else if (targetId === '#collapse2') {
      toggleCollapse(targetId, collapse02, collapse01);
    } else if (targetId === '#collapse3') {
      collapse04.forEach((element) => {
        if (element.classList.contains('show')) {
          element.classList.remove('show');
        }
      });
    } else if (targetId === '#collapse4') {
      toggleCollapse(targetId, collapse04, collapse05);
    } else if (targetId === '#collapse5') {
      toggleCollapse(targetId, collapse05, collapse04);
    }
  }
});
