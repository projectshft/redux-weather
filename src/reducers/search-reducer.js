import { FORECAST_RECEIVED } from '../actions';

const defaultState = {
  city: '',
  country: '',
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
  if (action.type === FORECAST_RECEIVED) {
    debugger;
    return {
      city: '',
      country: '',
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
  }

  return state;
};

export default searchReducer;
