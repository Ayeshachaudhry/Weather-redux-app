// src/redux/weatherSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch weather data
export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=20e16eabf0fe350667beaf56a5ecdc3b`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  return data;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
