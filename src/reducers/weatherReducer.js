/* eslint-disable default-param-last */
import {
  WEATHER_ADD_5DAY,
  WEATHER_ADD_CURRENT,
  WEATHER_ADD_ALL,
} from '../actions';

const DEFAULT_STATE = {
  734535: {
    current: { temp: 82, condition: 'clouds' },
    forecast: [
      { temp: 82, condition: 'clouds' },
      { temp: 82, condition: 'clouds' },
      { temp: 82, condition: 'clouds' },
      { temp: 82, condition: 'clouds' },
      { temp: 82, condition: 'clouds' },
    ],
    location: {
      lat: 54,
      lon: -34,
      state: 'California',
      name: 'Santa Cruz',
    },
  },
};

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case WEATHER_ADD_ALL:
      return {
        [action.id]: {
          current: action.payload.current.data,
          forecast: action.payload.forecast.data,
          location: action.payload.location,
        },
        ...state,
      };
    case WEATHER_ADD_5DAY:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          forecast: action.payload.data.list,
          location: action.payload.data.city,
        },
      };
    case WEATHER_ADD_CURRENT:
      return {
        ...state,
        [action.id]: {
          current: action.payload.data,
        },
      };
    default:
      return state;
  }
};

export default weatherReducer;
