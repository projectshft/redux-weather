import { combineReducers } from "redux";
import WeatherReducer from "./reducer-weather"

const rootReducer = combineReducers({
// all the reducers
  weather: WeatherReducer,
});

export default rootReducer;
