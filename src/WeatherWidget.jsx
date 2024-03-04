import React from "react";
import './WeatherWidget.css';

const WeatherWidget = ({cityName}) => {
    return (
        <div class="col-md-4">
        <div class="card">
            <span class="icon"><img class="img-fluid" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png"/></span>
            <div class="title"><p>{cityName}</p></div>
            <div class="temp">+20<sup>&deg;</sup></div>
                <div class="row">
                    <div class="col-4">
                        <div class="header">General</div>
                        <div class="value">Sunny</div>
                    </div>
                    <div class="col-4">
                        <div class="header">Air pollution</div>
                        <div class="value">47</div>
                    </div>
                    <div class="col-4">
                        <div class="header">Fire</div>
                        <div class="value">No</div>
                    </div>
                </div>
                
        </div>
    </div>
    )
}

export default WeatherWidget;