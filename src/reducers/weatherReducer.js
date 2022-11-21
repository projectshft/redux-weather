/* eslint-disable default-param-last */
import { WEATHER_ADD_ALL } from '../actions';

const DEFAULT_STATE = localStorage.defaultWeather
  ? JSON.parse(localStorage.getItem('defaultWeather'))
  : {};

const weatherReducer = (state = DEFAULT_STATE, action) => {
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
    default:
      return state;
  }
};

export default weatherReducer;
