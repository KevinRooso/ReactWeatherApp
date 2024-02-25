import React, { useState } from 'react';
import './App.css';

const SearchFilter = ({onSearch}) => {
  const [city, setCity] = useState('');

  const handleChange = (e) =>{
    setCity(e.target.value);
  };

  const handleSubmit = () =>{
    onSearch(city);
  };

  return (
    <div class="row">
      <div class="col-md-3 form-group">
        <label class="mb-2 font-size-14">Type City Name</label>
        <input type="text" class="form-control" value={city} onChange={handleChange} />
      </div>
      <div className="col-md-3 form-group mt-4">
        <button class="btn btn-primary mt-2" onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

export default SearchFilter;
