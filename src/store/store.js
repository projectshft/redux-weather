import { configureStore } from "@reduxjs/toolkit";

import fiveDayForecastSlice from "../features/forecastSlice";

const store = configureStore({
  reducer: fiveDayForecastSlice
});

export default store;