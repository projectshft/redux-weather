/* eslint-disable default-param-last */
import {
  WEATHER_ADD_5DAY,
  WEATHER_ADD_CURRENT,
  ADD_LOCATION,
} from '../actions';

const DEFAULT_STATE = {
  734535: {
    current: { temp: 82, condition: 'clouds' },
    forecast: {
      1: { temp: 82, condition: 'clouds' },
      2: { temp: 82, condition: 'clouds' },
      3: { temp: 82, condition: 'clouds' },
      4: { temp: 82, condition: 'clouds' },
      5: { temp: 82, condition: 'clouds' },
    },
    location: {
      lat: 54,
      lon: -34,
      state: 'California',
      name: 'Santa Cruz',
    },
  },
};

const weatherReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    // case ADD_LOCATION:
    //   debugger;
    //   return { [id]: { ...action.payload.data[0] }, ...state };
    case WEATHER_ADD_5DAY:
      debugger;
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          forecast: action.payload.data.list,
          location: action.payload.data.city,
        },
      };
    case WEATHER_ADD_CURRENT:
      debugger;
      return {
        ...state,
        [action.id]: {
          current: action.payload.data.weather[0],
        },
      };
    default:
      return state;
  }
};

export default weatherReducer;
