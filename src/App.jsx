import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SearchFilter from './SearchFilter';
import WeatherWidget from './WeatherWidget';

function App() {

  const [weatherWidgets, setWeatherWidgets] = useState([]);
  const [location, setLocation] = useState('');

  const handleSearch = (city) =>{
    console.log("Searching for", city);
    setLocation(city);

    const newWidget = <WeatherWidget cityName={city} />;
    setWeatherWidgets([...weatherWidgets,newWidget]);
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
