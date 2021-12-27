import { AgeCalculation } from "./../src/js/agecalculation";

let age;
let ageCalculation;
beforeEach(() => {
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
    beforeEach(() => {
      ageCalculation.calculatePlanetAges();
    });
    test("should correctly calculate solar age on mercury", () => {
      expect(ageCalculation.planets["mercury"].solarAge).toEqual(125.00);
    });
    test("should correctly calculate solar age on venus", () => {
      expect(ageCalculation.planets["venus"].solarAge).toEqual(48.39);
    });
    test("should correctly calculate solar age on mars", () => {
      expect(ageCalculation.planets["mars"].solarAge).toEqual(15.96);
    });
    test("should correctly calculate solar age on jupiter", () => {
      expect(ageCalculation.planets["jupiter"].solarAge).toEqual(2.53);
    });
  });
  // averageLifeSpans method tests
  describe("averageLifeSpans", () => {
    beforeEach(() => {
      ageCalculation.averageLifeSpans();
    });
    test("should calculate average life span for mercury", () => {
      expect(ageCalculation.planets["mercury"].averageLifeSpan).toEqual(300);
    });
    test("should calculate average life span for venus", () => {
      expect(ageCalculation.planets["venus"].averageLifeSpan).toEqual(116.13);
    });
    test("should calculate average life span for mars", () => {
      expect(ageCalculation.planets["mars"].averageLifeSpan).toEqual(38.30);
    });
    test("should calculate average life span for jupiter", () => {
      expect(ageCalculation.planets["jupiter"].averageLifeSpan).toEqual(6.07);
    });
  });
  // calculateLifeExpectancy method tests
  describe("calculateLifeExpectancy", () => {
    beforeEach(() => {
      ageCalculation.calculatePlanetAges();
      ageCalculation.averageLifeSpans();
      ageCalculation.calculateLifeExpectancy()
    });
    test("should correctly calculate life expectancy on earth", () => {
      expect(ageCalculation.earthLifeExpectancy).toEqual(42);
    });
    test("should correctly calculate life expectancy on mercury", () => {
      expect(ageCalculation.planets["mercury"].lifeExpectancy).toEqual(175);
    });
    test("should correctly calculate life expectancy on venus", () => {
      expect(ageCalculation.planets["venus"].lifeExpectancy).toEqual(67.74);
    });
    test("should correctly calculate life expectancy on mars", () => {
      expect(ageCalculation.planets["mars"].lifeExpectancy).toEqual(22.34);
    });
    test("should correctly calculate life expectancy on jupiter", () => {
      expect(ageCalculation.planets["jupiter"].lifeExpectancy).toEqual(3.54);
    });
    // lifeLeft
    test("should correctly calculate number of years left on mercury", () => {
      expect(ageCalculation.planets["mercury"].lifeLeft).toEqual(50.00);
    });
    test("should correctly calculate number of years left on venus", () => {
      expect(ageCalculation.planets["venus"].lifeLeft).toEqual(19.35);
    });
    test("should correctly calculate number of years left on mars", () => {
      expect(ageCalculation.planets["mars"].lifeLeft).toEqual(6.38);
    });
    test("should correctly calculate number of years left on jupiter", () => {
      expect(ageCalculation.planets["jupiter"].lifeLeft).toEqual(1.01);
    });
  });
  // hasSurpassedLifeExpectancy method tests
  describe("hasSurpassedLifeExpectancy", () => {
    test("should correctly return false when users age is under lifeExpectancy", () => {
      ageCalculation.hasSurpassedLifeExpectancy();
      expect(ageCalculation.isPastLifeExpectancy).toBeFalsy();
    });
    test("should correctly return true when users age is over lifeExpectancy", () => {
      ageCalculation.age = 95;
      ageCalculation.hasSurpassedLifeExpectancy();
      expect(ageCalculation.isPastLifeExpectancy).toBeTruthy();
    });
  });
  // calculateSurpassedLifeExpectancy method tests
  describe("calculateSurpassedLifeExpectancy", () => {
    beforeEach(() => {
      ageCalculation.age = 95;
      ageCalculation.calculatePlanetAges();
      ageCalculation.averageLifeSpans();
      ageCalculation.calculateLifeExpectancy();
      ageCalculation.calculateSurpassedLifeExpectancy();
    });
    test("should correctly calculate earth surpassed life expectancy as a positive number" , () => {
      expect(ageCalculation.surpassedLifeExpectancy).toEqual(23);
    });
    test("should correctly calculate mercury surpassed life expectancy as a positive number" , () => {
      expect(ageCalculation.planets["mercury"].surpassedLifeExpectancy).toEqual(95.83);
    });
    test("should correctly calculate venus surpassed life expectancy as a positive number" , () => {
      expect(ageCalculation.planets["venus"].surpassedLifeExpectancy).toEqual(37.10);
    });
    test("should correctly calculate mars surpassed life expectancy as a positive number" , () => {
      expect(ageCalculation.planets["mars"].surpassedLifeExpectancy).toEqual(12.23);
    });
    test("should correctly calculate jupiter surpassed life expectancy as a positive number" , () => {
      expect(ageCalculation.planets["jupiter"].surpassedLifeExpectancy).toEqual(1.94);
    });
  });
});