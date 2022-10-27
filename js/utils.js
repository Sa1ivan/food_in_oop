export const selector = document.querySelector(".menu__field"),
  container = selector.querySelector(".container");

// tabs
export const tabsContent = document.querySelectorAll(".tabcontent"),
  tabs = document.querySelectorAll(".tabheader__item"),
  tabsParent = document.querySelector(".tabheader__items");

// timer
export const timerSelectors = {
    timerSelector: ".timer",
    days: document.querySelector("#days"),
    hours: document.querySelector("#hours"),
    minutes: document.querySelector("#minutes"),
    seconds: document.querySelector("#seconds"),
  },
  deadline = "2022-11-15";

// modal
export const modalSettings = {
  openBtn: document.querySelectorAll("[data-btn]"),
  closeBtn: document.querySelector(".modal__close"),
  popup: document.querySelector(".modal"),
  forms: document.querySelectorAll("form"),
};

// slider

export const sliderUtils = {
  btns: document.querySelector(".offer__slider-counter"),
  current: document.querySelector("#current"),
  total: document.querySelector("#total"),
  slides: document.querySelectorAll(".offer__slide"),
  next: document.querySelector(".next"),
  prev: document.querySelector(".prev"),
};
