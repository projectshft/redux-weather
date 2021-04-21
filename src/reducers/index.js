import { combineReducers } from "redux";
import CitiesReducer from "./reducers-cities";

const rootReducer = combineReducers({
  cities: CitiesReducer,
});

export default rootReducer;