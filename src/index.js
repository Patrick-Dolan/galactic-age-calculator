import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculation } from "./js/agecalculation";

function displayPlanetDetails(ageCalc) {
  let planetList = $("ul#planets");
  let htmlForPlanetList = "";
  Object.keys(ageCalc.planets).forEach((planet) => {
    if (ageCalc.isPastLifeExpectancy) {
      htmlForPlanetList += `<li>Your age on ${planet} would be ${ageCalc.planets[planet].solarAge} where the average life expectancy is ${ageCalc.planets[planet].averageLifeSpan}. That means that you've lived ${ageCalc.planets[planet].surpassedLifeExpectancy} more years than ${planet}'s average life expectancy.</li>`;
    } else {
      htmlForPlanetList += `<li>Your age on ${planet} would be ${ageCalc.planets[planet].solarAge} where the average life expectancy is ${ageCalc.planets[planet].averageLifeSpan}. That means that you shoud live at least ${ageCalc.planets[planet].lifeExpectancy} more years in ${planet} solar years.</li>`;
    }
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
  ageCalc.calculateSurpassedLifeExpectancy();
  displayPlanetDetails(ageCalc);
  console.log(ageCalc);
});