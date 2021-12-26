export class AgeCalculation {
  constructor(age) {
    this.age = age;
    this.earthLifeExpectancy = 0;
    this.mercury = {
      solarAge: 0,
      lifeExpectancy: 0 
    }
    this.venus = {
      solarAge: 0,
      lifeExpectancy: 0
    }
    this.mars = {
      solarAge: 0,
      lifeExpectancy: 0
    }
    this.jupiter = {
      solarAge: 0,
      lifeExpectancy: 0
    }
  }
  calculatePlanetAges() {
    this.mercury.solarAge = parseFloat((this.age / 0.24).toFixed(2));
    this.venus.solarAge = parseFloat((this.age / 0.62).toFixed(2));
    this.mars.solarAge = parseFloat((this.age / 1.88).toFixed(2));
    this.jupiter.solarAge = parseFloat((this.age / 11.86).toFixed(2));
  }
  calculateLifeExpectancy() {
    this.earthLifeExpectancy = 72 - this.age;
    this.mercury.lifeExpectancy = parseFloat(((72 / 0.24) - this.mercury.solarAge).toFixed(2));
    this.venus.lifeExpectancy = parseFloat(((72 / 0.62) - this.venus.solarAge).toFixed(2));
    this.mars.lifeExpectancy = parseFloat(((72 / 1.88) - this.mars.solarAge).toFixed(2));
  }
}