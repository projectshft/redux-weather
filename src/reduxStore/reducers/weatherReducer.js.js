/* eslint-disable default-param-last */
import { FETCH_WEATHER } from '../actions';

export const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload];
    default:
      return state;
  }
};
