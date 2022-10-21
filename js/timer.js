export default class Timer {
  constructor(selector, deadline) {
    this._selector = document.querySelector(selector);
    this._deadline = deadline;
  }
  _getDateNow = () => {
    this._newTime = Date.parse(this._deadline) - Date.parse(new Date());
    this._day =
      this._newTime > 0 ? Math.floor(this._newTime / (1000 * 60 * 60 * 24)) : 0;
    this._hour =
      this._newTime > 0
        ? Math.floor((this._newTime / (1000 * 60 * 60)) % 24)
        : 0;
    this._minute =
      this._newTime > 0 ? Math.floor((this._newTime / (1000 * 60)) % 60) : 0;
    this._second =
      this._newTime > 0 ? Math.floor((this._newTime / 1000) % 60) : 0;

    return {
      total: this._newTime,
      days: this._day,
      hours: this._hour,
      minutes: this._minute,
      seconds: this._second,
    };
  };

  _newTimer = () => {
    this._time = this._getDateNow();
    if (this._time.total === 0) {
      clearInterval(this._timer);
    }
    return this._time;
  };

  render = () => {
    return this._newTimer();
  };
}
