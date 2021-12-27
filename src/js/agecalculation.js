export class AgeCalculation {
  //TODO add earth average life span and use it to calc other planets then refactor methods
  constructor(age) {
    this.age = age;
    this.earthAverageLifeSpan = 72;
    this.earthLifeExpectancy = 0;
    this.mercury = {
      mercuryEarthYear: 0.24,
      solarAge: 0,
      lifeExpectancy: 0,
      averageLifeSpan: 0
    }
    this.venus = {
      venusEarthYear: 0.62,
      solarAge: 0,
      lifeExpectancy: 0,
      averageLifeSpan: 0
    }
    this.mars = {
      marsEarthYear: 1.88,
      solarAge: 0,
      lifeExpectancy: 0,
      averageLifeSpan: 0
    }
    this.jupiter = {
      jupiterEarthYear: 11.86,
      solarAge: 0,
      lifeExpectancy: 0,
      averageLifeSpan: 0
    }
  }
  calculatePlanetAges() {
    this.mercury.solarAge = parseFloat((this.age / 0.24).toFixed(2));
    this.venus.solarAge = parseFloat((this.age / 0.62).toFixed(2));
    this.mars.solarAge = parseFloat((this.age / 1.88).toFixed(2));
    this.jupiter.solarAge = parseFloat((this.age / 11.86).toFixed(2));
  }
  averageLifeSpans() {
    this.mercury.averageLifeSpan = parseFloat((this.earthAverageLifeSpan / this.mercury.mercuryEarthYear).toFixed(2));
    this.venus.averageLifeSpan = parseFloat((this.earthAverageLifeSpan / this.venus.venusEarthYear).toFixed(2));
    this.mars.averageLifeSpan = parseFloat((this.earthAverageLifeSpan / this.mars.marsEarthYear).toFixed(2));
    this.jupiter.averageLifeSpan = parseFloat((this.earthAverageLifeSpan / this.jupiter.jupiterEarthYear).toFixed(2));
  }
  calculateLifeExpectancy() {
    this.earthLifeExpectancy = 72 - this.age;
    this.mercury.lifeExpectancy = parseFloat(((72 / 0.24) - this.mercury.solarAge).toFixed(2));
    this.venus.lifeExpectancy = parseFloat(((72 / 0.62) - this.venus.solarAge).toFixed(2));
    this.mars.lifeExpectancy = parseFloat(((72 / 1.88) - this.mars.solarAge).toFixed(2));
    this.jupiter.lifeExpectancy = parseFloat(((72 / 11.86) - this.jupiter.solarAge).toFixed(2));
  }
}