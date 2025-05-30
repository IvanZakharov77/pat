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
