import { getWeatherDayObj } from './WeatherDay.js';

export function getWeatherObj(data){
    const location = data.resolvedAddress;
    const currentConditions = getWeatherDayObj(data.currentConditions);
    const nextDays = data.days.slice(2).map(dayData => getWeatherDayObj(dayData));

    return {
        location,
        currentConditions,
        nextDays
    }
}