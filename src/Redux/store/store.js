import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "../reducers/weatherReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  weather: {weatherReducer}
})

export default store;