import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculation } from "./js/agecalculation";

function displayPlanetDetails(ageCalc) {
  let planetList = [$("ul#mercury-planet"), $("ul#venus-planet"), $("ul#mars-planet"), $("ul#jupiter-planet")];
  let htmlForPlanet = "";
  if (ageCalc.age > ageCalc.earthAverageLifeSpan) {
    htmlForPlanet += `<li>Your age on Earth is ${ageCalc.age} years old where the average life expectancy is ${ageCalc.earthAverageLifeSpan}.</li><li>That means that you've lived ${ageCalc.surpassedLifeExpectancy} more years than Earths average life expectancy.</li>`;
  } else {
    htmlForPlanet += `<li>Your age on Earth is ${ageCalc.age} years old where the average life expectancy is ${ageCalc.earthAverageLifeSpan}.</li><li>That means that you should live at least ${ageCalc.surpassedLifeExpectancy} more years in Earths solar years.</li>`;
  }
  $("ul#earth-planet").html(htmlForPlanet);
  let increment = 0;
  Object.keys(ageCalc.planets).forEach((planet) => {
    htmlForPlanet = "";
    let planetName = planet.charAt(0).toUpperCase() + planet.slice(1);
    if (ageCalc.isPastLifeExpectancy) {
      htmlForPlanet += `<li>Your age on ${planetName} is ${ageCalc.planets[planet].solarAge} years old  where the average life expectancy is ${ageCalc.planets[planet].averageLifeSpan}.</li><li>That means that you've lived ${ageCalc.planets[planet].surpassedLifeExpectancy} more years than ${planetName}'s average life expectancy.</li>`;
    } else {
      htmlForPlanet += `<li>Your age on ${planetName} is ${ageCalc.planets[planet].solarAge} years old  where the average life expectancy is ${ageCalc.planets[planet].averageLifeSpan}.</li><li>That means that you shoud live at least ${ageCalc.planets[planet].lifeExpectancy} more years in ${planetName} solar years.</li>`;
    }
    planetList[increment].html(htmlForPlanet);
    increment++;
  });
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
  $("#ageDisplayPlaceholder").hide();
  $("#ageDisplay").slideDown();
  $("input#userAge").val("");
});