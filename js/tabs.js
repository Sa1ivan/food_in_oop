export default class Tab {
  constructor(tabsContent, tabs, tabsParent) {
    this._tabsContent = tabsContent;
    this._tabs = tabs;
    this._tabsParent = tabsParent;
  }

  _hideTab = () => {
    this._tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
    this._tabsContent.forEach((item) => {
      item.classList.add("hide");
    });
  };
  _showTab = (i = 0) => {
    this._tabs[i].classList.add("tabheader__item_active");
    this._tabsContent[i].classList.remove("hide");
  };

  _renderTabs = () => {
    this._tabsParent.addEventListener("click", (event) => {
      const target = event.target;
      if (target && target.classList.contains("tabheader__item")) {
        this._tabs.forEach((item, i) => {
          if (target == item) {
            this._hideTab();
            this._showTab(i);
          }
        });
      }
    });
  };
  playTabs = () => {
    this._hideTab();
    this._showTab();
    this._renderTabs();
  };
}
