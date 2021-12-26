export class AgeCalculation {
  constructor(age) {
    this.age = age;
    this.mercury = {
      solarAge: 0
    }
    this.venus = {
      solarAge: 0
    }
  }
  calculatePlanetAges(){
    this.mercury.solarAge = parseFloat((this.age / 0.24).toFixed(2));
    this.venus.solarAge = parseFloat((this.age / 0.62).toFixed(2));
  }
}