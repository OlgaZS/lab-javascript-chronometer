class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(function() {
      this.currentTime += 1;
    }, 1000);
  } // siguen en rojo 2 ultimos pintos de esta funcion en Jasmine...

  getMinutes() {
    let timeMinutes = Math.floor(this.currentTime / 60);
    return timeMinutes;
  }

  getSeconds() {
    let timeSeconds = 0;
    timeSeconds = this.currentTime % 60;
    return timeSeconds;
  }

  twoDigitsNumber(value) {
    let resultString = value.toString();

    if (resultString.length === 1) {
      return "0" + resultString;
    } else {
      return resultString;
    }
  }
  stopClick() {
    this.intervalId = clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
