import { config } from './config';

const apiKey = config.weather_api_key;

const fetchWeatherData = async (city) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}`);
    return response.json();
  };

export {fetchWeatherData};