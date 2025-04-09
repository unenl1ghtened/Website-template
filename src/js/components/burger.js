/* eslint-disable prettier/prettier */
export const useBurger = () => {
  const burgerBtn = document.querySelector('[data-burger="btn"]');
  const overlay = document.querySelector('[data-burger="overlay"]');
  const burgerMenu = document.querySelector('[data-burger="menu"]');
  const body = document.body;

  const closeBurgerMenu = () => {
    burgerBtn.classList.remove('nav_1_1_1_1_1_1_1_1_1--active');
    overlay.classList.remove('overlay--visible');
    burgerMenu.classList.remove('nav_1_1_1_1--visible');
    body.classList.remove('body--fixed');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('nav_1_1_1_1_1_1_1_1_1--active');
    overlay.classList.toggle('overlay--visible');
    burgerMenu.classList.toggle('nav_1_1_1_1--visible');
    body.classList.toggle('body--fixed');
  });

  overlay.addEventListener('click', closeBurgerMenu);
};
