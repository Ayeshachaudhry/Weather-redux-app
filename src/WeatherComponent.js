// src/WeatherComponent.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './redux/weatherSlice';

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      dispatch(fetchWeather(city));
      // Clear the input field only on successful data fetch
      setCity(''); 
    }
  };
  

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>Get Weather</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data.main && (
        <div style={{ marginTop: '20px' }}>
          <h2>{data.name}</h2>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Weather: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
