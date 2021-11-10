import { combineReducers } from "redux";
import weatherReducer from "./weather-reducer";

const rootReducer = combineReducers({
  // will access the data from weatherReducer by the name 'results'
  results: weatherReducer,
});

export default rootReducer;
