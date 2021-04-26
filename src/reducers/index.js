import { combineReducers } from "redux"
import {reducer as formReducer} from "redux-form"
import { Reducer } from './reducers'

// combining reducers
const CombinedReducers = combineReducers({
  reducer: Reducer,
  form: formReducer
});

export default CombinedReducers