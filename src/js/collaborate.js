/* eslint-disable prettier/prettier */
import '/scss/collaborate.scss';

// components
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { useTextAnimation } from './components/collaborate/textAnimation.js';
import {
  useCollaborateHeroSlider,
  useCollaborateTeamSlider,
} from './components/collaborate/slider.js';

useBurger();
useHeader();
useTextAnimation();
useCollaborateHeroSlider();
useCollaborateTeamSlider();
