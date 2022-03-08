import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from '../features/forecast/forecastSlice';

export const store = configureStore({
  reducer: {
    weather: forecastReducer,
  },
});