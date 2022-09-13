import { combineReducers } from "redux";
import ForecastReducer from "./forecast-reducer";


const rootReducer = combineReducers({
  forecasts: ForecastReducer,
});

export default rootReducer;