import { combineReducers } from "redux";
import ForecastsReducer from "./reducer-forecasts";

const rootReducer = combineReducers({
  forecasts: ForecastsReducer,
})

export default rootReducer;