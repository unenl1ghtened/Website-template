/* eslint-disable prettier/prettier */
import '/scss/main.scss';

// components
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { useTheme } from './components/theme.js';
import { useTestimonialsSlider } from './components/home/testi-slider.js';
import { useTeamSlider } from './components/home/team-slider.js';

useBurger();
useHeader();
useTestimonialsSlider();
useTeamSlider();
useTheme();
