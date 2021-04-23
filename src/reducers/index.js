import { combineReducers } from "redux";
import TableReducer from "./table-reducer";
import DefaultReducer from './default-reducer';

const rootReducer = combineReducers({
  table: TableReducer,
  default: DefaultReducer
});

export default rootReducer;
