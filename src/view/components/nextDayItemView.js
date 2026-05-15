import nextDayItemTemplate from "../templates/nextDayItemTemplate.html";
import nextDaysListTemplate from "../templates/nextDaysListTemplate.html";
import { getConditionsIcon } from "./conditionsIconsUtils.js";
import { format } from "date-fns";

function createNextDayItem(nextDayData){
    let html = nextDayItemTemplate
    .replace('{{datetime}}', format(nextDayData.datetime, 'eee d MMM'))
    .replace('{{tempmax}}', nextDayData.tempmax)
    .replace('{{tempmin}}', nextDayData.tempmin)
    // .replace('{{conditions}}', nextDayData.conditions)
    .replace('{{precipprob}}', nextDayData.precipprob)

    const div = document.createElement('div');
    div.innerHTML = html;
    const nextDayItemElement = div.firstElementChild;

    getConditionsIcon(nextDayData.conditions)
        .then((icon) => {
            let iconContainer = nextDayItemElement.querySelector('.condition-icon');
            iconContainer.innerHTML = icon.default;
        });

    return nextDayItemElement;
}

function createNextDaysList(nextDaysData){
    let html = nextDaysListTemplate;
    const div = document.createElement('div');
    div.innerHTML = html;
    const nextDaysListElement = div.firstElementChild;

    nextDaysData.forEach(nextDayData => {
        nextDaysListElement.appendChild(createNextDayItem(nextDayData));
    });

    return nextDaysListElement;
}

export function renderNextDaysList(nextDaysData){
    const nextDaysContainer = document.querySelector('.next-days-container');
    nextDaysContainer.innerHTML = '';
    nextDaysContainer.appendChild(createNextDaysList(nextDaysData));
}

export function deleteNextDaysList(){
    const nextDaysContainer = document.querySelector('.next-days-container');
    nextDaysContainer.innerHTML = '';
}