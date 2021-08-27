import { combineReducers } from 'redux';
import humidityReducer from './humidityReducer';
import pressureReducer from './pressureReducer';
import temperatureReducer from './temperatureReducer';
import cityNameReducer from './cityNameReducer';

// { city: humidity}
// { city: pressure}
// { city: temperature}
// { names: name}
const allReducers = combineReducers({
  humidityReducer,
  pressureReducer,
  temperatureReducer,
  cityNameReducer,
})

export default allReducers;