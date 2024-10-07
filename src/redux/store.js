import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import darkModeReducer from './darkModeSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    darkMode: darkModeReducer,
  },
});

export default store;
