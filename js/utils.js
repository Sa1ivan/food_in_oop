// cards
export const settings = [
  {
    img: "img/tabs/vegy.jpg",
    alt: "vegy",
    subtitle: 'Меню "Фитнес"',
    descr:
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    cost: "Цена:",
    total: "229",
    currency: "грн/день",
  },
  {
    img: "img/tabs/elite.jpg",
    alt: "elite",
    subtitle: 'Меню "Премиум"',
    descr:
      "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    cost: "Цена:",
    total: "550",
    currency: "грн/день",
  },
  {
    img: "img/tabs/post.jpg",
    alt: "post",
    subtitle: 'Меню "Постное"',
    descr:
      "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    cost: "Цена:",
    total: "430",
    currency: "грн/день",
  },
];
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
