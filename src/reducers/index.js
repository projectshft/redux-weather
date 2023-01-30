import weatherReducer from './weatherReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  weather: weatherReducer,
});

export default allReducers;
