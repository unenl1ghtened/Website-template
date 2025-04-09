/* eslint-disable prettier/prettier */
import '/scss/main.scss';

// components
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { useTheme } from './components/theme.js';
import { useTestimonialsSlider } from './components/home/testi-slider.js';
import { useTeamSlider } from './components/home/team-slider.js';
import { usePhone } from './components/home/phone.js';
import { useInputValidation } from './components/home/input-validation.js';

useBurger();
useHeader();
useTestimonialsSlider();
useTeamSlider();
usePhone();
useInputValidation();
useTheme();
