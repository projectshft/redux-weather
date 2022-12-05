import { combineReducers } from "redux";

import { weatherReducer } from "./reducers";

const reducers = combineReducers({
  weather: weatherReducer
});

export default reducers;