import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "../reducers/weatherReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";


const enhancers = (applyMiddleware(thunk))

const reducer = enhancers(combineReducers({
  weather: weatherReducer,
}))


const store = configureStore({
  reducer,
})

export default store;