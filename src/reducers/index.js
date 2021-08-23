import { combineReducers } from "redux";
import weatherReducer from "./weather-reducers"; 

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer