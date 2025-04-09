import '/scss/contact.scss';

import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { usePartnersSlider } from './components/home/slider.js';
import { usePhone } from './components/contact/phone.js';
import { useInputValidation } from './components/contact/input-validation.js';

useBurger();
useHeader();
usePartnersSlider();
usePhone();
useInputValidation();
