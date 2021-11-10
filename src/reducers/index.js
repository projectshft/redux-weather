import { combineReducers } from "redux";
import chartReducer from "./reducer-chart";

const rootReducer = combineReducers({
  chart: chartReducer,
});

export default rootReducer;
