import { combineReducers } from "redux";
import ForecastReducer from "./reducer-forecast";

const rootReducer = combineReducers({
  forecasts: ForecastReducer,
});

export default rootReducer;

