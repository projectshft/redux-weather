import { combineReducers } from "redux";
import forecastReducer from "./reducer-forecast";
import defaultReducer from "./reducer-default-city";

// will most likely create another reducer for default and also maybe current location

const rootReducer = combineReducers({
  forecast: forecastReducer,
  default_city: defaultReducer
});

export default rootReducer;
