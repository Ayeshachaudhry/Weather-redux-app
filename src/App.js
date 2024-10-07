// src/App.js

import React, { Suspense } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { fetchWeather } from './redux/weatherSlice';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBox from './components/SearchBox';
import DarkModeToggle from './components/DarkModeToggle';
import store from './redux/store'; // Ensure this is correctly imported

function App() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.data);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchBox onSearch={(city) => dispatch(fetchWeather(city))} />
        <DarkModeToggle />
        <Suspense fallback={<p>Loading...</p>}>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {weather.main && <WeatherDisplay weather={weather} />}
        </Suspense>
      </header>
    </div>
  );
}

// Wrap the app with Provider for the Redux store
const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
