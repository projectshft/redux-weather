/* eslint-disable default-param-last */
import {
  WEATHER_ADD_5DAY,
  WEATHER_ADD_CURRENT,
  ADD_LOCATION,
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
    // case ADD_LOCATION:
    //   debugger;
    //   return { [id]: { ...action.payload.data[0] }, ...state };
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
