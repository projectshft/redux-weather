// eslint-disable-next-line import/no-extraneous-dependencies
// import { combineReducers } from 'redux';
import forecastsReducer from './reducer-forecasts';

const rootReducer = {
  forecasts: forecastsReducer,
};

export default rootReducer;

// const reducer = combineReducers({
//   forecasts: forecastsReducer,
// });
