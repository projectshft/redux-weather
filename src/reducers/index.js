import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  forecast: weatherReducer,
});

export default rootReducer;