import './styles.css';
import { getWeather, getQueryInputValue, getUnitRadioValue } from './controller/AppController.js';


let queryInput = document.querySelector('#query-input');
queryInput.value = 'Mexico city';

getWeather(getQueryInputValue(), getUnitRadioValue());
