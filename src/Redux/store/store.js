import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../actions/apiSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  }
})

export default store;