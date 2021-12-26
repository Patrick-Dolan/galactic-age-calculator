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
      expect(ageCalculation.mercury.age).toEqual(125.00);
    });
  })
});