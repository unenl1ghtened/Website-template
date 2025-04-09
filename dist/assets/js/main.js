import { S as Swiper, N as Navigation, E as EffectFade } from "./vendor.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const useBurger = () => {
  const burgerBtn = document.querySelector('[data-burger="btn"]');
  const overlay = document.querySelector('[data-burger="overlay"]');
  const burgerMenu = document.querySelector('[data-burger="menu"]');
  const body = document.body;
  const closeBurgerMenu = () => {
    burgerBtn.classList.remove("nav_1_1_1_1_1_1_1_1_1--active");
    overlay.classList.remove("overlay--visible");
    burgerMenu.classList.remove("nav_1_1_1_1--visible");
    body.classList.remove("body--fixed");
  };
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("nav_1_1_1_1_1_1_1_1_1--active");
    overlay.classList.toggle("overlay--visible");
    burgerMenu.classList.toggle("nav_1_1_1_1--visible");
    body.classList.toggle("body--fixed");
  });
  overlay.addEventListener("click", closeBurgerMenu);
};
const useHeader = () => {
  const header = document.querySelector(".nav_1");
  if (!header) return;
  const heroSection = document.querySelector(".hero_1");
  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;
  if (heroSection) {
    heroSection.style.marginTop = `${headerHeight + 50}px`;
  } else {
    const nextSection = header.nextElementSibling;
    if (nextSection) {
      nextSection.style.marginTop = `${headerHeight + 50}px`;
    }
  }
  document.body.style.marginTop = `${headerHeight}px`;
  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance <= headerHeight) {
      header.classList.add("nav_1--show");
      header.classList.add("nav_1--background-transparent");
    } else if (scrollDistance > lastScrollTop && scrollDistance > headerHeight) {
      header.classList.remove("nav_1--show");
      header.classList.add("nav_1--fixed");
      header.classList.remove("nav_1--background-transparent");
    } else if (scrollDistance < lastScrollTop && scrollDistance > headerHeight) {
      header.classList.add("nav_1--show");
      header.classList.add("nav_1--fixed");
      header.classList.remove("nav_1--background-transparent");
    }
    lastScrollTop = scrollDistance;
  });
};
const useTheme = () => {
  const themeTarget = document.querySelector("[data-theme]");
  const themeTargetDataSet = themeTarget.dataset;
  const theme = localStorage.getItem("theme") || "dark";
  themeTargetDataSet.theme = theme;
};
const useTestimonialsSlider = () => {
  new Swiper(".reviews_1__slider", {
    modules: [Navigation, EffectFade],
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: ".reviews_1__btn--prev",
      nextEl: ".reviews_1__btn--next"
    }
  });
};
const useTeamSlider = () => {
  new Swiper(".team__slider", {
    modules: [Navigation],
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      381: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true
      },
      992: {
        slidesPerView: 2.8,
        spaceBetween: 15,
        loop: true
      },
      1201: {
        slidesPerView: "auto",
        spaceBetween: 32,
        loop: true
      }
    },
    navigation: {
      nextEl: ".team_1__btn--next",
      prevEl: ".team_1__btn--prev"
    }
  });
};
useBurger();
useHeader();
useTestimonialsSlider();
useTeamSlider();
useTheme();
