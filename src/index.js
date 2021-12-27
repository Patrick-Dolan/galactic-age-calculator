import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculation } from "./js/agecalculation";

function displayPlanetDetails(ageCalc) {
  let planetList = $("ul#planets");
  let htmlForPlanetList = "";
  if (ageCalc.age > ageCalc.earthAverageLifeSpan) {
    htmlForPlanetList += `<li>Your age on Earth is ${ageCalc.age} where the average life expectancy is ${ageCalc.earthAverageLifeSpan}. That means that you've lived ${ageCalc.surpassedLifeExpectancy} more years than Earths average life expectancy.</li>`;
  } else {
    htmlForPlanetList += `<li>Your age on Earth is ${ageCalc.age} where the average life expectancy is ${ageCalc.earthAverageLifeSpan}. That means that you should live at least ${ageCalc.surpassedLifeExpectancy} more years in Earths solar years.</li>`;
  }
  Object.keys(ageCalc.planets).forEach((planet) => {
    let planetName = planet.charAt(0).toUpperCase() + planet.slice(1);
    if (ageCalc.isPastLifeExpectancy) {
      htmlForPlanetList += `<li>Your age on ${planetName} would be ${ageCalc.planets[planet].solarAge} where the average life expectancy is ${ageCalc.planets[planet].averageLifeSpan}. That means that you've lived ${ageCalc.planets[planet].surpassedLifeExpectancy} more years than ${planetName}'s average life expectancy.</li>`;
    } else {
      htmlForPlanetList += `<li>Your age on ${planetName} would be ${ageCalc.planets[planet].solarAge} where the average life expectancy is ${ageCalc.planets[planet].averageLifeSpan}. That means that you shoud live at least ${ageCalc.planets[planet].lifeExpectancy} more years in ${planetName} solar years.</li>`;
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
});