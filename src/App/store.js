import { configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from '../Features/city/currentWeatherSlice';
import fiveDayWeatherReducer from '../Features/city/fiveDayWeatherSlice';
import currentCityReducer from '../Features/city/currentCity';

export default configureStore({
  reducer: {
    currentCity: currentCityReducer,
    currentWeather: currentWeatherReducer,
    fiveDayWeather: fiveDayWeatherReducer,
  },
});
