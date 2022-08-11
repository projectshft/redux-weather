import { combineReducers } from "redux";
import forecastReducer from "./forecast";
import defaultReducer from "./default-city";


const rootReducer = combineReducers({
  forecast: forecastReducer,
  default_city: defaultReducer
});

export default rootReducer;