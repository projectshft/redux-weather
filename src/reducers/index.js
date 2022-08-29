import { combineReducers } from 'redux';
import { WeatherReducer, LocationReducer } from './reducer-weather';

const rootReducer = combineReducers({
  forecasts: WeatherReducer,
  location: LocationReducer,
});

export default rootReducer;
