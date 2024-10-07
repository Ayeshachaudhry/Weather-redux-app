// SearchBox.js
import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city/town..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
