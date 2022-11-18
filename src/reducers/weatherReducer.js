/* eslint-disable default-param-last */
import { WEATHER_ADD_LOCATION } from '../actions';

const DEFAULT_STATE = {
  temp: 82,
  location: 'location',
  condition: 'clouds',
};

const weatherReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case WEATHER_ADD_LOCATION:
      debugger;
      return state;
    default:
      return state;
  }
};

export default weatherReducer;
