import React from 'react';

function CurrWeather({ data }){
    if(!data) return null;

    //icon of the api
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    return (
        <div className = "curr-weather">
            <h2>{data.name}</h2>
            <div className = "weather-info">
                <img src = {icon} alt = {data.weather[0].description}/>  
                <div className = "temperature">{Math.round(data.main.temp)}°C</div>       
                <div className = "details">
                    <p className = "description">{data.weather[0].description}</p>
                    <p>Feels Like: {Math.round(data.main.feels_like)}°C</p>
                    <p>Humidity: {data.main.humidity}%</p>
                </div>      
            </div>
        </div>
    ); //returning the page
}

export default CurrWeather;