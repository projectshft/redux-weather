import { forecastReducer } from "./forecastReducer";
import { defaultCityReducer } from "./defaultCityReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  forecast: forecastReducer,
  defaultCity: defaultCityReducer,
});
