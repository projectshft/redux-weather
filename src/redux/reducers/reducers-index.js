import { combineReducers } from "redux";
import citySearchReducer from "./citySearchReducer.js";

const allReducers = combineReducers({
  city: citySearchReducer
});

export default allReducers;