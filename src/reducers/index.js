import { combineReducers } from "redux";
import CityWeatherReducer from "./city-weather-reducer";

const rootReducer = combineReducers({
  cityWeather: CityWeatherReducer,
});

export default rootReducer;
