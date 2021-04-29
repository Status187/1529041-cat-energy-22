let addBurger = document.querySelector('.menu__burger');

let addBurgerAll = document.querySelector('.menu__burger--closed');

addBurger.addEventListener('click', event => {
  event.preventDefault();
  addBurger.classList.toggle('closed');
addBurgerAll.classList.toggle('closed');
})
