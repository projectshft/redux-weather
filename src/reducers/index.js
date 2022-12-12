import {combineReducers } from "redux";
import WeatherPostsReducer from "./reducer_weather"

const rootReducer = combineReducers({
  weatherPosts: WeatherPostsReducer,
})

export default rootReducer;