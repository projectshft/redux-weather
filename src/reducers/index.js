import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  forecasts: searchReducer,
})

export default rootReducer