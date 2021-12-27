export class AgeCalculation {
  constructor(age) {
    this.age = age;
    this.earthAverageLifeSpan = 72;
    this.earthLifeExpectancy = 0;
    this.surpassedLifeExpectancy = undefined;
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
    let planets = Object.keys(this.planets);
    planets.forEach((planet) => {
      this.planets[planet].lifeExpectancy = parseFloat((this.planets[planet].averageLifeSpan - this.planets[planet].solarAge).toFixed(2)); 
    });
  }
  hasSurpassedLifeExpectancy() {
    (this.age > this.earthAverageLifeSpan) ? this.surpassedLifeExpectancy = true : this.surpassedLifeExpectancy = false; 
  }
}