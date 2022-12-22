import { combineReducers } from "redux";
import WeatherReducer from "./weather-reducer";

const rootReducer = combineReducers({
  weathers: WeatherReducer,
});

export default rootReducer;
