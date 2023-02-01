import { combineReducers } from "redux";
import searchCityReducer from "./SearchCityReducer.js";

// This is the state object / store
const allReducers = combineReducers({
  data: searchCityReducer
});

export default allReducers;