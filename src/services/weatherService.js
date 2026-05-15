export async function fetchData(location, unit){

    let response;
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=JETTU8NS2HHZS3UAL678ZFWR9&unitGroup=${unit}`;
    // Verificar si hay errores con el llamado del API
    try {
        response = await fetch(url);
    } catch (error) {
        throw new Error('Error en el llamado a la API');
    }

    // Verificar si se encontró una localidad
    if (response.status === 200) {
        let locData = await response.json();
        return locData;
    } else {
        throw new Error('No se encontró la localidad');
    }
}