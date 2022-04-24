import { combineReducers } from "redux";
import CitiesReducer from "./reducer-cities";

const rootReducer = combineReducers({
  cities: CitiesReducer,
});

export default rootReducer;
