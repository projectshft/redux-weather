import { combineReducers } from "redux";
import resultsReducer from "./result-reducer";

const rootReducer = combineReducers({
  results: resultsReducer,
});

export default rootReducer;