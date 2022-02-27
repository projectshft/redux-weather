import { FORECAST_RECEIVED } from '../actions';

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

const findAverage = (array) =>
  array.reduce((acc, temp) => acc + temp, 0) / array.length;

const searchReducer = (state = defaultState, action = {}) => {
  if (action.type === FORECAST_RECEIVED) {
    return {
      city: action.payload.city,
      temperature: {
        avg: findAverage(action.payload.temp),
        dataPoints: action.payload.temp,
      },
      pressure: {
        avg: findAverage(action.payload.pressure),
        dataPoints: action.payload.pressure,
      },
      humidity: {
        avg: findAverage(action.payload.humidity),
        dataPoints: action.payload.humidity,
      },
    };
  }

  return state;
};

export default searchReducer;
