import React from "react";
import './WeatherWidget.css';

const WeatherWidget = ({cityName, weatherData}) => {

    return (
        <div class="col-md-4">
        <div class="card">
            <span class="icon me-1"><img class="img-fluid" src={weatherData && weatherData.current && weatherData.current.condition && weatherData.current.condition.icon}/></span>
            <div class="title"><p>{cityName}</p></div>
            <div class="temp">{weatherData && weatherData.current && weatherData.current.temp_c}<sup>&deg;</sup></div>
                <div class="row">
                    <div class="col-4">
                        <div class="header">General</div>
                        <div class="value">{weatherData && weatherData.current && weatherData.current.condition && weatherData.current.condition.text}</div>
                    </div>
                    <div class="col-4">
                        <div class="header">Humidity</div>
                        <div class="value">{weatherData && weatherData.current && weatherData.current.humidity}</div>
                    </div>
                    <div class="col-4">
                        <div class="header">Feels Like</div>
                        <div class="value">{weatherData && weatherData.current && weatherData.current.feelslike_c}</div>
                    </div>
                </div>
                
        </div>
    </div>
    )
}

export default WeatherWidget;