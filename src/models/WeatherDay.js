
export function getWeatherDayObj(dayData){
    return {
        datetime: new Date(dayData.datetime),
        temp: dayData.temp,
        tempmax: Math.round(dayData.tempmax),
        tempmin: Math.round(dayData.tempmin),
        precipprob: dayData.precipprob,
        conditions: dayData.conditions,
        windspeed: dayData.windspeed
    }
}