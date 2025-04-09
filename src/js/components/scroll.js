/* eslint-disable prettier/prettier */
export const useHeader = () => {
  const header = document.querySelector('.nav_1');
  if (!header) return;

  const heroSection = document.querySelector('.hero_1');
  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;

  // Задем отступ от .hero т.к. .header выпадает изи потока
  if (heroSection) {
    heroSection.style.marginTop = `${headerHeight + 50}px`;
  } else {
    const nextSection = header.nextElementSibling;

    if (nextSection) {
      nextSection.style.marginTop = `${headerHeight + 50}px`;
    }
  }
  document.body.style.marginTop = `${headerHeight}px`;

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    // Добавляем класс nav_1--show и nav_1--background-transparent когда .header находится в самом верху страницы
    if (scrollDistance <= headerHeight) {
      header.classList.add('nav_1--show');
      header.classList.add('nav_1--background-transparent');
      // Добавляем класс header--fixed при прокрутке вниз, при условии что мы прокрутили больше высоты headerHeight
    } else if (
      scrollDistance > lastScrollTop &&
      scrollDistance > headerHeight
    ) {
      header.classList.remove('nav_1--show');
      header.classList.add('nav_1--fixed');
      header.classList.remove('nav_1--background-transparent');

      // Добавляем класс nav_1--show и header--fixed при прокрутке вверх
    } else if (
      scrollDistance < lastScrollTop &&
      scrollDistance > headerHeight
    ) {
      header.classList.add('nav_1--show');
      header.classList.add('nav_1--fixed');
      header.classList.remove('nav_1--background-transparent');
    }

    lastScrollTop = scrollDistance;
  });
};
