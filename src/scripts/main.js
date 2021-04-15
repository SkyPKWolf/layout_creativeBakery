'use strict';

const toggler = document.querySelector('#toggler');
const nav = document.querySelector('.header__wrapper');

toggler.addEventListener('click', () => {
  nav.classList.toggle('header__wrapper--active');
  toggler.classList.toggle('header__burger--active');
}
);
