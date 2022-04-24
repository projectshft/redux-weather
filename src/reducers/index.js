import { combineReducers } from "redux";
import citiesReducer from "./reducer-cities";

//not really necessary to combine reducers for this project but good to have for hypothetical case where other slices of state may eventually be added
const rootReducer = combineReducers({
    cities: citiesReducer
});

export default rootReducer;