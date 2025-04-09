/* eslint-disable prettier/prettier */
import '/scss/blog.scss';

// components
import { useBurger } from './components/burger.js';
import { useHeader } from './components/scroll.js';
import { useHeroSlider, useTabControl } from './components/blog/heroSlider.js';
import { useArticlesSlider } from './components/blog/articlesSlider.js';

useHeader();
useBurger();
useHeroSlider();
useTabControl();
useArticlesSlider();
