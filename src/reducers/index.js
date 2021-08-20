import { combineReducers } from "redux";
import resultsReducer from "./result-reducer";
import defaultResultReducer from "./default-result-reducer";

const rootReducer = combineReducers({
  results: resultsReducer,
  defaultResult: defaultResultReducer
});

export default rootReducer;