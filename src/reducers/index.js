import { combineReducers } from 'redux';
import ReducerMain from './ReducerMain';

const rootReducer = combineReducers({
  weather: ReducerMain,
});

export default rootReducer;
