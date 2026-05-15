import { deleteNextDaysList, renderNextDaysList } from '../view/components/nextDayItemView.js';
import { deleteCurrentConditionsCard, renderCurrentConditionsCard } from '../view/components/currentConditionsView.js';
import { fetchData } from '../services/weatherService.js';
import { getWeatherObj } from '../models/Weather.js';
import { deleteNotFound, renderNotFound } from '../view/components/notFoundView.js';


export async function getWeather(location, metric) {
    deleteContents();
    displayLoading();
    try{
        let data = await fetchData(location, metric);
        const weatherData = getWeatherObj(data);
        renderNextDaysList(weatherData.nextDays);
        renderCurrentConditionsCard(weatherData.currentConditions, weatherData.location, getUnitRadioValue());
    } catch(error) {
        console.error(error);
        renderNotFound();
    }
    hideLoading();
}

let searchBtn = document.querySelector('.search-btn');
let queryInput = document.querySelector('#query-input');
let unitRadios = document.querySelectorAll('input[name="unit"]');
let loaderContainer = document.querySelector('.loading-container');

export function getQueryInputValue() {
    let queryInput = document.querySelector('#query-input');
    return queryInput.value;
}

export function getUnitRadioValue() {
    for (let radio of unitRadios){
        if (radio.checked) {
            return radio.value;
        }
    }
}

unitRadios.forEach(radio => radio.addEventListener('change', (event) => {
    searchBtn.click();    
}))

queryInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        searchBtn.click();
    }
});

searchBtn.addEventListener('click', () => {
    (async () => {
        let searchQuery = queryInput.value; 
        try {
            getWeather(searchQuery, getUnitRadioValue());
        } catch (error) {
           console.error(error);
        }
    })();
});


function displayLoading() {
    console.log('aparezco');
    loaderContainer.style.display = 'block';
}

function hideLoading() {
    console.log('desaparezco');
    loaderContainer.style.display = 'none';
}

function deleteContents() {
    deleteNotFound();
    deleteCurrentConditionsCard();
    deleteNextDaysList();
}