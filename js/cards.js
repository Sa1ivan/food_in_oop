export default class Card {
  constructor(selector) {
    this._selector = selector;
  }

  _getData = async (url) => {
    this._res = await fetch(url);
    if (!this._res.ok) {
      throw new Error("Error!");
    }

    return await this._res.json();
  };

  render = () => {
     this._getData("http://localhost:3000/menu").then((data) =>
      data.forEach((obj) => {
        this._selector.innerHTML += `
      <div class="menu__item">
            <img src="${obj.img}" alt=${obj.altimg}>
            <h3 class="menu__item-subtitle">${obj.title}</h3>
            <div class="menu__item-descr">${obj.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена</div>
                <div class="menu__item-total"><span>${obj.price * 27}</span> грн/день</div>
            </div>
        </div>
        `;
      })
    );
  };
}
