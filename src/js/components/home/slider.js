/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

export const useInsightSlider = () => {
  let swiper;

  const initSwiper = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 380) {
      // слайдер с эффектов fade
      swiper = new Swiper('.insight__slider', {
        modules: [Pagination, EffectFade, Navigation],
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: '.insight__btn--next',
          prevEl: '.insight__btn--prev',
        },
      });
    } else if (screenWidth >= 993) {
      // выключаем центрироваие слайдов
      swiper = new Swiper('.insight__slider', {
        modules: [Pagination, Navigation],
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: false,
        navigation: {
          nextEl: '.insight__btn--next',
          prevEl: '.insight__btn--prev',
        },
      });
    } else if (screenWidth > 380) {
      // слайдер без эффека fade
      swiper = new Swiper('.insight__slider', {
        modules: [Pagination, Navigation],
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: false,
        navigation: {
          nextEl: '.insight__btn--next',
          prevEl: '.insight__btn--prev',
        },
      });
    }
  };

  // уничтожить предыдущий экземпляр Swiper и пересоздать его при изменении размера экрана

  const handleResize = () => {
    if (swiper) {
      swiper.destroy(true, true);
    }
    initSwiper();
  };

  initSwiper();

  window.addEventListener('resize', handleResize);
};
export const useTestimonialsSlider = () => {
  new Swiper('.reviews__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      prevEl: '.reviews__btn--prev',
      nextEl: '.reviews__btn--next',
    },
  });
};
