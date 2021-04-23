import { combineReducers } from "redux";
import TableReducer from "./table-reducer";
import LocationReducer from './location-reducer';
import DefaultReducer from './default-reducer';

const rootReducer = combineReducers({
  table: TableReducer,
  location: LocationReducer,
  default: DefaultReducer
});

export default rootReducer;
