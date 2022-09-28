import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './weather-reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
