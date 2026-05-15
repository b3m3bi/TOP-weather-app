import currentConditionsTemplate from "../templates/currentConditionsTemplate.html";
import { getConditionsIcon } from "./conditionsIconsUtils.js";
import { format } from "date-fns";

function createCurrentConditionsCard(currentConditionsData, location, unit){

    let degreesUnit = unit === 'metric' ? '°C' : '°F';
    let speedUnit = unit === 'metric' ? 'kmh' : 'mph';

    let html = currentConditionsTemplate
    .replace("{{location}}", location)
    .replace("{{datetime}}", format(new Date(), 'eee d MMM, H:m') )
    .replace("{{temperature}}", currentConditionsData.temp + degreesUnit)
    .replace("{{conditions}}", currentConditionsData.conditions)
    .replace("{{precipprob}}", currentConditionsData.precipprob)
    .replace("{{windspeed}}", currentConditionsData.windspeed + speedUnit);

    const div = document.createElement('div');
    div.innerHTML = html;

    const currentConditionsElement = div.firstElementChild;

    getConditionsIcon(currentConditionsData.conditions)
    .then((icon) => {
        let iconContainer = currentConditionsElement.querySelector('.condition-icon');
        iconContainer.innerHTML = icon.default;
    });

    return currentConditionsElement;
}

export function renderCurrentConditionsCard(currentConditionsData, location, metric){
    const currentConditionsContainer = document.querySelector('.current-conditions-container');
    currentConditionsContainer.innerHTML = '';
    currentConditionsContainer.appendChild(createCurrentConditionsCard(currentConditionsData, location, metric));
}

export function deleteCurrentConditionsCard(){
    const currentConditionsContainer = document.querySelector('.current-conditions-container');
    currentConditionsContainer.innerHTML = '';
}