export class AgeCalculation {
  constructor(age) {
    this.age = age;
    this.mercury = {
      solarAge: 0
    }
  }
  calculatePlanetAges(){
    this.mercury.solarAge = parseInt((this.age / 0.24).toFixed(2));
  }
}