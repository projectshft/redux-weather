import { combineReducers } from "redux";
import weatherReducer from "./reducer";

const rootReducer = combineReducers({
    weather: weatherReducer,
});


export default rootReducer;