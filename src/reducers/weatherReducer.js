/* eslint-disable default-param-last */
import { WEATHER_ADD } from '../actions';

const DEFAULT_STATE = {
  temp: 82,
  location: 'location',
  condition: 'clouds',
};

const weatherReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case WEATHER_ADD:
      debugger;
      return state;
    default:
      return state;
  }
};

export default weatherReducer;
