import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  // locations: locationReducer,
  weather: weatherReducer,
});

export default rootReducer;
