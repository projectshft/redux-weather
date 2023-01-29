import weatherReducer from './weather-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;