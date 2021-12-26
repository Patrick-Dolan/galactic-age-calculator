import { AgeCalculation } from "./../src/js/agecalculation";

describe("AgeCalculation", () => {
  test("should declare an ageCalculation object containing an age", () => {
    let age = 30;
    let ageCalculation = new AgeCalculation(age);
    expect(ageCalculation.age).toEqual(30);
  });
});