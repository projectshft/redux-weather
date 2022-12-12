import { combineReducers } from "redux";
import { weatherReducer } from "./reducers";

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;