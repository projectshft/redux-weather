import { FORECAST_RECEIVED } from '../actions';

const defaultState = [];

const forecastReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case FORECAST_RECEIVED:
      debugger;
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default forecastReducer;
