import { combineReducers } from "redux";
import ForecastReducer from "./forecast";

const rootReducer = combineReducers({
  forecasts: ForecastReducer,
});

export default rootReducer;