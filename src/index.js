import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculation } from "./js/agecalculation";

function displayPlanetDetails(ageCalc) {
  let planetList = $("ul#planets");
  let htmlForPlanetList = "";
  Object.keys(ageCalc.planets).forEach((planet) => {
    htmlForPlanetList += `<li>Your age on ${planet} would be ${ageCalc.planets[planet].solarAge} where the average life expectancy is ${ageCalc.planets[planet].lifeExpectancy}.`;
  });
  planetList.html(htmlForPlanetList);
}

$("form#ageCalcForm").submit((event) => {
  event.preventDefault();
  const age = parseInt($("input#userAge").val());
  let ageCalc = new AgeCalculation(age);
  ageCalc.calculatePlanetAges();
  ageCalc.averageLifeSpans();
  ageCalc.calculateLifeExpectancy();
  ageCalc.hasSurpassedLifeExpectancy();
  displayPlanetDetails(ageCalc);
  console.log(ageCalc);
});