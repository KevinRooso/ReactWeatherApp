import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SearchFilter from './SearchFilter';
import WeatherWidget from './WeatherWidget';
import { fetchWeatherData } from './api-utils'; 

function App() {

  const [weatherWidgets, setWeatherWidgets] = useState([]);
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});

  const handleSearch = async (city) =>{
    console.log("Searching for", city);
    setLocation(city);
    try {
      const weatherData = await fetchWeatherData(city);
      setWeatherData(weatherData);

      const newWidget = <WeatherWidget cityName={city} weatherData={weatherData} />;
      setWeatherWidgets([...weatherWidgets, newWidget]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Weather app</a>
      </nav>
      <div class="m-3">
        <SearchFilter onSearch={handleSearch} />
      </div>
      {/* <div>
        {location && <p> Searching weather for: {location}</p>}
      </div> */}
      <div class="row">
        {weatherWidgets}
      </div>
    </div>
  );
}

export default App;
