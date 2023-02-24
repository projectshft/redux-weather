import { combineReducers } from "redux";
import WeatherReducer from "./reducer-weather"

const rootReducer = combineReducers({
// all the reducers
  weather: WeatherReducer,
});

export default rootReducer;

/*
const rootReducer = combineReducers({
  posts: PostsReducer,
});

// weather should be a slice of state:
temp, humidity, and pressure should all be combined
*/