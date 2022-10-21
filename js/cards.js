export default class Card {
  constructor(
    selector,
    { img, alt, subtitle, descr, cost, total, currency } = item
  ) {
    this._selector = selector;
    this._img = img;
    this._alt = alt;
    this._subtitle = subtitle;
    this._descr = descr;
    this._cost = cost;
    this._total = total;
    this._currency = currency;
  }

  render() {
    this._selector.innerHTML += `
      <div class="menu__item">
            <img src="${this._img}" alt=${this._alt}>
            <h3 class="menu__item-subtitle">${this._subtitle}</h3>
            <div class="menu__item-descr">${this._descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">${this._cost}</div>
                <div class="menu__item-total"><span>${this._total}</span> ${this._currency}</div>
            </div>
        </div>
        `;
  }
}
