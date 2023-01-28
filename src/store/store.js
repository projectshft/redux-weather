import { configureStore } from "@reduxjs/toolkit";

import forecastReducer from "../features/forecastSlice";

const store = configureStore({
  reducer: forecastReducer
});

export default store;