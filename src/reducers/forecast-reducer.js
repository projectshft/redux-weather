import _ from 'lodash';
import { FORECAST_RECEIVED } from '../actions';

const defaultState = {
  entries: {},
  order: [],
};

export const findAverage = (array) =>
  Math.round(array.reduce((acc, temp) => acc + temp, 0) / array.length);

export const addAverages = (object) => {
  const transformArray = (arr) => ({ avg: findAverage(arr), dataPoints: arr });
  return {
    city: object.city,
    temperature: transformArray(object.temperature),
    pressure: transformArray(object.pressure),
    humidity: transformArray(object.humidity),
  };
};

const forecastReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case FORECAST_RECEIVED:
      if (!_.has(state.entries, action.payload.city)) {
        return {
          entries: {
            [action.payload.city]: addAverages(action.payload),
            ...state.entries,
          },
          order: [action.payload.city, ...state.order],
        };
      }
      return state;

    default:
      return state;
  }
};

export default forecastReducer;
