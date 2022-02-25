import { combineReducers } from "redux";
import ChartsReducer from "./reducer-charts";

const rootReducer = combineReducers({
  charts: ChartsReducer,
});

export default rootReducer;