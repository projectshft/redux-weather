import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import defaultCityReducer from "./defaultCityReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  default: defaultCityReducer,
});

export default rootReducer;
