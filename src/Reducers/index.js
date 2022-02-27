import { combineReducers } from "redux";
import weatherData from "./Weather-Data";

const rootReducer = combineReducers({
  data: weatherData,
})

export default rootReducer;