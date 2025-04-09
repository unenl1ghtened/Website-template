/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade } from 'swiper/modules';

export const useTestimonialsSlider = () => {
  new Swiper('.reviews_1__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      prevEl: '.reviews_1__btn--prev',
      nextEl: '.reviews_1__btn--next',
    },
  });
};
