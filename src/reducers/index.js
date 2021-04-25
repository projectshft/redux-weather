import { combineReducers } from 'redux';
import citiesReducer from "./cities-reducer";
import defaultCityReducer from './default-city-reducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  defaultCity: defaultCityReducer
});

export default rootReducer;