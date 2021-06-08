import { combineReducers } from "redux";
import CityWeatherReducer from "./city-weather-reducer";

const rootReducer = combineReducers({
  weather: CityWeatherReducer,
});

export default rootReducer;
