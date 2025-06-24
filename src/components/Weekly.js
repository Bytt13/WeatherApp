import React from 'react';

function Weekly({ data }){
    if(!data) return null;

    //api give us 8 days (Today + 7), lets skip today
    const nextDays = data.slice(1, 6); //we will pick the next 5 days

    //api funciton to format the date, that is in a numeric way
    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000); //JS uses milliseconds
        return new Intl.DateTimeFormat('en', {weekday : 'long'}).format(date);
    };

    return (
        <div className = "Weekly">
            <h3>Next 5 days</h3>
            <div className = "days-container">
                {nextDays.map((day, index) => (
                    <div key = {index} className = "day-card"> 
                    <p className = "week-day">{formatDate(day.dt)}</p>
                    <img src = {`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description}/>
                    <p className = "temp-max-min">
                        {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°
                    </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Weekly;