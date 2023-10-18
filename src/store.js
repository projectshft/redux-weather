import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./reducer/weatherSlice";

const store = configureStore({
  reducer: weatherSlice,
})

export default store;