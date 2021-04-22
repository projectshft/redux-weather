import { combineReducers } from "redux";
import TableReducer from "./table-reducer";

const rootReducer = combineReducers({
  table: TableReducer,
});

export default rootReducer;
