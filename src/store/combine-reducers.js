import { combineReducers } from "redux";
import citiesReducer from "./reducers";

const rootReducer = combineReducers({
  weather: citiesReducer,
});

export default rootReducer;
