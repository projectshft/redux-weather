import { FETCH_WEATHER } from "./fetch-weather";

const DEFAULT_STATE = {}

export function weatherReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {...state, payload: action.payload };
    default:
      return state;
  }
}

// need a reducer that returns the desired values from the weather API (temp, pressure, humidity)
// see 1. Intro to Redux - 8. React with Redux


// will need to use combineReducers