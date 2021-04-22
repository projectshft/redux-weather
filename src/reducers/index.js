import { combineReducers } from 'redux';
import citiesReducer from "./cities-reducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
});

export default rootReducer;