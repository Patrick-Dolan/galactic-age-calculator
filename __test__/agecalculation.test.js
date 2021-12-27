import { AgeCalculation } from "./../src/js/agecalculation";

let age;
let ageCalculation;
beforeAll(() => {
  age = 30;
  ageCalculation = new AgeCalculation(age);
});
describe("AgeCalculation", () => {
  test("should declare an ageCalculation object containing an age", () => {
    let age = 30;
    let ageCalculation = new AgeCalculation(age);
    expect(ageCalculation.age).toEqual(30);
  });
  // calculatePlanetAges method tests
  describe("calculatePlanetAges", () => {
    test("should correctly calculate solar age on mercury", () => {
      ageCalculation.calculatePlanetAges();
      expect(ageCalculation.mercury.solarAge).toEqual(125.00);
    });
    test("should correctly calculate solar age on venus", () => {
      ageCalculation.calculatePlanetAges();
      expect(ageCalculation.venus.solarAge).toEqual(48.39);
    });
    test("should correctly calculate solar age on mars", () => {
      ageCalculation.calculatePlanetAges();
      expect(ageCalculation.mars.solarAge).toEqual(15.96);
    });
    test("should correctly calculate solar age on jupiter", () => {
      ageCalculation.calculatePlanetAges();
      expect(ageCalculation.jupiter.solarAge).toEqual(2.53);
    });
  });
  // averageLifeSpans method tests
  describe("averageLifeSpans", () => {
    test("should calculate average life span for mercury", () => {
      ageCalculation.averageLifeSpans();
      expect(ageCalculation.mercury.averageLifeSpan).toEqual(300);
    });
    test("should calculate average life span for venus", () => {
      ageCalculation.averageLifeSpans();
      expect(ageCalculation.venus.averageLifeSpan).toEqual(116.12);
    });
  });
  // calculateLifeExpectancy method tests
  describe("calculateLifeExpectancy", () => {
    test("should correctly calculate life expectancy on earth", () => {
      ageCalculation.calculateLifeExpectancy()
      expect(ageCalculation.earthLifeExpectancy).toEqual(42);
    });
    test("should correctly calculate life expectancy on mercury", () => {
      ageCalculation.calculateLifeExpectancy()
      expect(ageCalculation.mercury.lifeExpectancy).toEqual(175);
    });
    test("should correctly calculate life expectancy on venus", () => {
      ageCalculation.calculateLifeExpectancy()
      expect(ageCalculation.venus.lifeExpectancy).toEqual(67.74);
    });
    test("should correctly calculate life expectancy on mars", () => {
      ageCalculation.calculateLifeExpectancy()
      expect(ageCalculation.mars.lifeExpectancy).toEqual(22.34);
    });
    test("should correctly calculate life expectancy on jupiter", () => {
      ageCalculation.calculateLifeExpectancy()
      expect(ageCalculation.jupiter.lifeExpectancy).toEqual(3.54);
    });
  });
});