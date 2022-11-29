import { FETCH_WEATHER } from "./fetch-weather";

const DEFAULT_STATE = {}

export function weatherReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {...state, payload: action.payload };
    default:
      return state;
  }
};
