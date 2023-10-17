import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from './reducer'

export default configureStore({
  reducer: WeatherReducer
})