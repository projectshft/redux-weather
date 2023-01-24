import {combineReducers } from "redux";
import WeatherPostsReducer from "./reducer_weather"

//combines all our reducers to have a redux state available when using hook useSelector and change state by useDispatch
const rootReducer = combineReducers({
  weatherPosts: WeatherPostsReducer,
})

export default rootReducer;