'use strict';

const milk = document.querySelector('.coffee__photo2');
const coffee = document.querySelector('.coffee__photo');

window.addEventListener('scroll', () => {
  const width = +window.pageYOffset + 150 + 'px';
  const height = +window.pageYOffset - 50 + 'px';

  milk.style.width = width;
  milk.style.height = height;

  if (+window.pageYOffset > 750) {
    milk.style.width = '900px';
    milk.style.height = '640px';

    coffee.style.position = 'absolute';
    coffee.style.top = '850px';
  } else {
    milk.style.width = width;
    milk.style.height = height;

    coffee.style.position = 'fixed';
    coffee.style.top = '50px';
  }
});
