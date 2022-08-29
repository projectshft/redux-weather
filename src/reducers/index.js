import { combineReducers } from "redux";
import searchReducer from "./normalizdSearchReducer";

const rootReducer = combineReducers({
  forecastState: searchReducer,
})

export default rootReducer