import { FETCH_WEATHER } from '../actions'; 

// weather reducer that action creator goes through to change state on dispatch call
export const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
    // if payload is returned add it to array with current state and if nothing is returned just return the current state  
    if (action.payload) {
        return [action.payload.data, ...state];
      } else {
        return state;
      }
    default:
      return state;
  }
}