import { combineReducers } from 'redux';
import LocationsReducer from './reducer-locations';

const rootReducer = combineReducers({
  locations: LocationsReducer
});

export default rootReducer;
