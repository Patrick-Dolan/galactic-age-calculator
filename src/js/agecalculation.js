export class AgeCalculation {
  constructor(age) {
    this.age = age;
    this.earthAverageLifeSpan = 72;
    this.earthLifeExpectancy = 0;
    this.planets = {
      mercury: {
        earthYear: 0.24,
        solarAge: 0,
        lifeExpectancy: 0,
        averageLifeSpan: 0
      },
      venus: {
        earthYear: 0.62,
        solarAge: 0,
        lifeExpectancy: 0,
        averageLifeSpan: 0
      },
      mars: {
        earthYear: 1.88,
        solarAge: 0,
        lifeExpectancy: 0,
        averageLifeSpan: 0
      },
      jupiter: {
        earthYear: 11.86,
        solarAge: 0,
        lifeExpectancy: 0,
        averageLifeSpan: 0
      }
    }
  }
  calculatePlanetAges() {
    let planets = Object.keys(this.planets);
    planets.forEach((planet) => {
      this.planets[planet].solarAge = parseFloat((this.age / this.planets[planet].earthYear).toFixed(2)); 
    });
  }
  averageLifeSpans() {
    let planets = Object.keys(this.planets);
    planets.forEach((planet) => {
      this.planets[planet].averageLifeSpan = parseFloat((this.earthAverageLifeSpan / this.planets[planet].earthYear).toFixed(2)); 
    });
  }
  calculateLifeExpectancy() {
    this.earthLifeExpectancy = this.earthAverageLifeSpan - this.age;
    this.mercury.lifeExpectancy = parseFloat((this.mercury.averageLifeSpan - this.mercury.solarAge).toFixed(2));
    this.venus.lifeExpectancy = parseFloat((this.venus.averageLifeSpan - this.venus.solarAge).toFixed(2));
    this.mars.lifeExpectancy = parseFloat((this.mars.averageLifeSpan - this.mars.solarAge).toFixed(2));
    this.jupiter.lifeExpectancy = parseFloat((this.jupiter.averageLifeSpan - this.jupiter.solarAge).toFixed(2));
  }
}