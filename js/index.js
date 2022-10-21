import {
  settings,
  container,
  tabsContent,
  tabs,
  tabsParent,
  timerSelectors,
  deadline,
  modalSettings,
} from "./utils.js";
import Card from "./cards.js";
import Tab from "./tabs.js";
import Timer from "./timer.js";
import Modal from "./modal.js";
//cards

settings.forEach((item) => {
  const card = new Card(container, item);
  card.render();
});

//tabs

const tab = new Tab(tabsContent, tabs, tabsParent);
tab.playTabs();

//timer
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
