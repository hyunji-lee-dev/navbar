'use strict';

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarSearch = document.querySelector('.navbar__search');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
  navbarSearch.classList.toggle('open');
});
