import { combineReducers } from "redux";
import chartsReducer from "./reducer-charts";

const rootReducer = combineReducers({
  charts: chartsReducer,
});

export default rootReducer;
