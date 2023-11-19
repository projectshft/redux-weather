import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from '../Slices/weatherSlices'

// Configuring the Redux store with weather reducer and assigning 
// weather reducer to "weather" slice of store
const store = configureStore({
  reducer: {
    weather: weatherReducer,
  }
});

export default store;