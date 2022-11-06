export default class Modal {
  constructor(openBtn, closeBtn, popup, forms) {
    this._openBtn = openBtn;
    this._closeBtn = closeBtn;
    this._popup = popup;
    this._forms = forms;
  }

  _closePopup = () => {
    if (
      this._popup.contains(this._closeBtn) ||
      this._closeBtn.hasAttribute("[data-btn]")
    ) {
      this._popup.style.display = "none";
      document.body.style.overflow = "auto";
      this._closeBtn.removeEventListener("click", this._closePopup);
    }
  };

  _openPopup = () => {
    this._closeBtn.addEventListener("click", this._closePopup);
    this._popup.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  _postData = async (url) => {
    this._res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: this._json
    });

    return await this._res.json();
  }

  _sendMessage = (form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formDate = new FormData(form);
      this._json = JSON.stringify(Object.fromEntries(this._formDate.entries()));
        this._postData('http://localhost:3000/requests')
        .then(() => {
          this._closePopup();
        })
        .catch(() => {
          this._closePopup();
        })
        .finally(() => {
          form.reset();
        });
    });
  };

  render = () => {
    this._forms.forEach((form) => {
      this._sendMessage(form);
    });
    this._openBtn.forEach((btn) => {
      btn.addEventListener("click", this._openPopup);
    });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target && evt.target === this._popup) {
        this._closePopup();
      }
    });
    document.addEventListener("keydown", (evt) => {
      if (
        evt.key &&
        evt.key === "Escape" &&
        this._popup.style.display === "block"
      ) {
        this._closePopup();
      }
    });
  };
}
