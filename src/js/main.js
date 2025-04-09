/* eslint-disable prettier/prettier */
import '/scss/main.scss';

// components
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { useTheme } from './components/theme.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';
import {
  useCollaborateHeroSlider,
  useCollaborateTeamSlider,
} from './components/collaborate/slider.js';
import { usePhone } from './components/contact/phone.js';
import { useInputValidation } from './components/contact/input-validation.js';

useBurger();
useHeader();
useInsightSlider();
useTestimonialsSlider();
useCollaborateHeroSlider();
useCollaborateTeamSlider();
usePhone();
useInputValidation();
useTheme();
