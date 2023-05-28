import {  configureStore, combineReducers } from "@reduxjs/toolkit";
import reducer from "../slices/apiSlice";

const rootReducer = combineReducers({weather: reducer})

const store = configureStore({
  reducer: rootReducer
})

export default store;