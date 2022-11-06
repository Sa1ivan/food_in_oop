export default class Calc {
  constructor({
    female,
    male,
    age,
    height,
    weight,
    params,
    result,
    inputs,
    genders,
  }) {
    this._female = female;
    this._male = male;
    this._age = age;
    this._height = height;
    this._weight = weight;
    this._params = params;
    this._result = result;
    this._inputs = inputs;
    this._genders = genders;
    this._param = 1.375;
  }

  _getCalc = () => {
    if (!this._age.value || !this._height.value || !this._weight.value) {
      this._result.textContent = "0";
      return;
    }

    if (this._female.classList.contains("calculating__choose-item_active")) {
      this._result.textContent = `${+Math.round(
        (10 * this._weight.value +
          6.25 * this._height.value -
          5 * this._age.value -
          161) *
          this._param
      )}`;
    } else {
      this._result.textContent = `${+Math.round(
        (10 * this._weight.value +
          6.25 * this._height.value -
          5 * this._age.value +
          5) *
          this._param
      )}`;
    }
  };

  _getParamsCalc = (evt) => {
    this._target = evt.target;
    switch (this._target.id) {
      case "low": {
        this._param = 1.2;
        break;
      }
      case "small": {
        this._param = 1.375;
        break;
      }
      case "medium": {
        this._param = 1.55;
        break;
      }
      case "high": {
        this._param = 1.7;
        break;
      }
    }
    this._params.forEach((param) => {
      if (param.id === this._target.id) {
        this._target.classList.add("calculating__choose-item_active");
        this._getCalc();
      } else {
        param.classList.remove("calculating__choose-item_active");
      }
    });
  };

  _getGender = (evt) => {
    this._target = evt.target;
    switch (this._target.classList) {
      case "female": {
        this._target.classList.add("calculating__choose-item_active");
        break;
      }
      case "male": {
        this._target.classList.add("calculating__choose-item_active");
        break;
      }
    }
    this._genders.forEach((gender) => {
      if (gender.classList === this._target.classList) {
        this._target.classList.add("calculating__choose-item_active");
        this._getCalc();
      } else {
        gender.classList.remove("calculating__choose-item_active");
      }
    });
  };

  render = () => {
    this._getCalc();

    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.value.match(/\D/gi)) {
          input.style.border = "1px solid red";
          return;
        } else {
          input.style.border = "none";
          this._getCalc();
        }
      });
    });

    this._params.forEach((param) => {
      param.addEventListener("click", this._getParamsCalc);
    });

    this._genders.forEach((gender) => {
      gender.addEventListener("click", this._getGender);
    });
  };
}
