import { configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from '../Features/city/currentWeatherSlice';
import fiveDayWeatherReducer from '../Features/city/fiveDayWeatherSlice';
import currentCityReducer from '../Features/city/currentCity';
import geoLocationReducer from '../Features/city/geoLocationSlice';

export default configureStore({
  reducer: {
    currentCity: currentCityReducer,
    currentWeather: currentWeatherReducer,
    fiveDayWeather: fiveDayWeatherReducer,
    geoLocation: geoLocationReducer,
  },
});
