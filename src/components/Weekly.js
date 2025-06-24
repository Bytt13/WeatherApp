import React from 'react';

function Weekly({ data }){
    if(!data) return null;

    //api give us hourly data
    const dailyForecasts = data.filter(item => item.dt_txt.includes("12:00:00")); 

    //api funciton to format the date, that is in a numeric way
    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000); //JS uses milliseconds
        return new Intl.DateTimeFormat('en', {weekday : 'long'}).format(date);
    };

    return (
        <div className = "weekly">
            <h3>Next 5 days</h3>
            <div className = "days-container">
                {dailyForecasts.map((day, index) => (
                    <div key = {index} className = "day-card"> 
                    <p className = "week-day">{formatDate(day.dt)}</p>
                    <img src = {`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description}/>
                    <p className = "temp-max-min">
                        {Math.round(day.main.temp_max)}° / {Math.round(day.main.temp_min)}°
                    </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Weekly;