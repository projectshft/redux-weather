import { combineReducers } from "redux";
import ForecastReducer from "./forecast-reducer";


const rootReducer = combineReducers({
  forecast: ForecastReducer,
});

export default rootReducer;