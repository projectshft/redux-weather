import { FORECAST_RECEIVED } from '../actions';
import { addAverages } from './forecast-reducer.js';

const defaultState = {
  city: '',
  temperature: {
    avg: '',
    dataPoints: [],
  },
  pressure: {
    avg: '',
    dataPoints: [],
  },
  humidity: {
    avg: '',
    dataPoints: [],
  },
};

const searchReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case FORECAST_RECEIVED:
      return addAverages(action.payload);
    default:
      return state;
  }
};

export default searchReducer;
