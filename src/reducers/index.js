import { combineReducers } from "redux";
import TableReducer from "./table-reducer";
import LocationReducer from './location-reducer';

const rootReducer = combineReducers({
  table: TableReducer,
  location: LocationReducer
});

export default rootReducer;
