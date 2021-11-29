import { combineReducers } from 'redux';
import citiesReducer from './reducer-cities';

const rootReducer = combineReducers({
  cities: citiesReducer,
});

export default rootReducer;
