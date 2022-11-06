import {
  container,
  tabsContent,
  tabs,
  tabsParent,
  timerSelectors,
  deadline,
  modalSettings,
  sliderUtils,
  calcUnits,
} from "./utils.js";
import Card from "./cards.js";
import Tab from "./tabs.js";
import Timer from "./timer.js";
import Modal from "./modal.js";
import Slider from "./slider.js";
import Calc from "./calc.js";

// cards
const card = new Card(container);
card.render();

// tabs
const tab = new Tab(tabsContent, tabs, tabsParent);
tab.playTabs();

// timer
const { selector, days, hours, minutes, seconds } = timerSelectors;
const timer = new Timer(selector, deadline);
let newTimer;
const checkDate = (num) => {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
};
setInterval(() => {
  newTimer = timer.render();
  days.innerHTML = checkDate(newTimer.days);
  hours.innerHTML = checkDate(newTimer.hours);
  minutes.innerHTML = checkDate(newTimer.minutes);
  seconds.innerHTML = checkDate(newTimer.seconds);
}, 999);

// modal
const { openBtn, closeBtn, popup, forms } = modalSettings;
const modal = new Modal(openBtn, closeBtn, popup, forms);
modal.render();

// slider
const slider = new Slider({ ...sliderUtils });
slider.render();

// calc
const calc = new Calc({ ...calcUnits });
calc.render();
