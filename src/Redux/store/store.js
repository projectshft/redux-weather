import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "../reducers/weatherSlice";

const store = configureStore({
  weather: weatherSlice
})

export default store