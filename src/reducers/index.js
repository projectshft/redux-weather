import { combineReducers } from "redux";
import { weatherReducer } from "./weather-reducer";

// no real need but good practice combining reducers into one
const rootReducer = combineReducers({
  weatherData: weatherReducer
});

export default rootReducer; 