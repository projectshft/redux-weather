import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  forecastState: searchReducer,
})

export default rootReducer