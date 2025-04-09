import '/scss/pricing.scss';

import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { usePriceSwitcher } from './components/pricing/plans.js';

useBurger();
useHeader();
usePriceSwitcher();
