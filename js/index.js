// btn price
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
