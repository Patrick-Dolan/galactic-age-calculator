import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculation } from "./js/agecalculation";

$("form#ageCalcForm").submit((event) => {
  event.preventDefault();
  const age = parseInt($("input#userAge").val());
  let ageCalc = new AgeCalculation(age);
  ageCalc.calculatePlanetAges();
  ageCalc.averageLifeSpans();
  ageCalc.calculateLifeExpectancy();
  ageCalc.hasSurpassedLifeExpectancy();
  console.log(ageCalc);
});