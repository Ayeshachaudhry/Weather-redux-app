import React from 'react';

const WeatherDisplay = ({ weather }) => {
  // Check if weather data exists before rendering
  if (!weather || !weather.main) return null;

  return (
    <div className="weather-info">
      <p>{weather.name}</p>
      <p>{weather.main.temp} °C</p>
      <p>{weather.weather[0].main}</p>
      <p>({weather.weather[0].description})</p>
    </div>
  );
};

export default WeatherDisplay;
