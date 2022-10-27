export default class Slider {
  constructor({ btns, current, total, slides, prev, next }) {
    this._btns = btns;
    this._current = current;
    this._total = total;
    this._slides = slides;
    this._next = next;
    this._prev = prev;
    this._count = 1;
  }

  _hideSlides = () => {
    this._slides.forEach((slide) => {
      slide.style.display = "none";
    });
  };

  _showSlide = (evt) => {
    if (evt.target.contains(this._next)) {
      this._hideSlides();
      this._count++;
      if (this._count > 4) {
        this._count = 1;
      }
      this._slides[this._count - 1].style.display = "block";
      this._current.innerHTML = `0${this._count}`;
    }
    if (evt.target.contains(this._prev)) {
      this._hideSlides();
      this._count--;
      if (this._count <= 0) {
        this._count = 4;
      }
      this._slides[this._count - 1].style.display = "block";
      this._current.innerHTML = `0${this._count}`;
    }
  };

  _setEventListeners = () => {
    this._btns.addEventListener("click", this._showSlide);
  };

  render = () => {
    this._hideSlides();
    this._current.innerHTML = `01`;
    this._slides[0].style.display = "block";
    this._setEventListeners();
  };
}
