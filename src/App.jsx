import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SearchFilter from './SearchFilter';

function App() {

  const [widgets, setWidget] = useState([]);
  const [location, setLocation] = useState('');

  const handleSearch = (city) =>{
    console.log("Searching for", city);
    setLocation(city);
  }

  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Weather app</a>
      </nav>
      <div class="m-3">
        <SearchFilter onSearch={handleSearch} />
      </div>
      <div>
        {location && <p> Searching weather for: {location}</p>}
      </div>
    </div>
  );
}

export default App;
