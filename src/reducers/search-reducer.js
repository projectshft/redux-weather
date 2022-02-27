import { FORECAST_RECEIVED } from '../actions';

const defaultSearch = {};

const searchReducer = (state = defaultSearch, action = {}) => {
  switch (action.type) {
    case FORECAST_RECEIVED:
      return { ...action.payload };
    default:
      return state;
  }
};

export default searchReducer;
