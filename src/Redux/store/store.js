import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../slices/apiSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  }
})

export default store;