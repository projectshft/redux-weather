import { combineReducers } from "redux";
import citiesReducer from "./reducers";

const rootReducer = combineReducers({
  cities: citiesReducer,
});

export default rootReducer;
