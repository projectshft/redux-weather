import { combineReducers } from "redux";
import testReducer from "./test-reducer.js"

const allReducers = combineReducers({
  testData: testReducer,
});

export default allReducers;