import { combineReducers } from "redux";
import ForecastReducer from "./reducer-forecast";

// added to make expanding this app easier, not exactly necessary for this simple app
const rootReducer = combineReducers({
  forecasts: ForecastReducer,
});

export default rootReducer;

