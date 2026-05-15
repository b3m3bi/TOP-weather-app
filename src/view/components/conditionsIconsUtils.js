let conditionsIconDict = {
     'Partially cloudy': 'cloud-sun-solid-full', 
     'Rain, Partially cloudy': 'cloud-sun-rain-solid-full',
     'Snow, Rain, Ice, Partially cloudy': 'cloud-sun-rain-solid-full',
     'Snow, Rain, Partially cloudy': 'cloud-sun-rain-solid-full',
     'Rain, Ice, Partially cloudy': 'cloud-sun-rain-solid-full',
     'Ice, Partially cloudy': 'cloud-sun-rain-solid-full',
     'Clear' : 'sun-solid-full',
     'Overcast': 'cloud-solid-full',
     'Rain, Overcast': 'cloud-showers-heavy-solid-full',
     'Rain': 'cloud-showers-heavy-solid-full',
}

export async function getConditionsIcon(conditions){
    let iconFile = conditionsIconDict[conditions];
    try{
        let iconSVG = await import(`../../assets/icons/${iconFile}.svg`);
        return iconSVG;
    } catch(error){
        console.error(`Error loading icons: ${conditions}`);
        return await import(`../../assets/icons/question-solid-full.svg`);
    }
}
