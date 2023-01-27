import { configureStore } from "@reduxjs/toolkit";
import cityNameSlice from "../features/cityNameSlice";

const store = configureStore({
  reducer: {
    cityName: cityNameSlice,
  }
});

export default store