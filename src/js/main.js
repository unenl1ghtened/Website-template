/* eslint-disable prettier/prettier */
import '/scss/main.scss';

// components
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import {
  useInsightSlider,
  usePartnersSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';

useBurger();
useHeader();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
