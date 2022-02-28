import { combineReducers } from 'redux';
import forecastReducer from './forecast-reducer';
import searchReducer from './search-reducer';

const rootReducer = combineReducers({
  currentSearch: searchReducer,
  forecasts: forecastReducer,
});

export default rootReducer;
