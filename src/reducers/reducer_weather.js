import {FETCH_WEATHER} from '../actions';

const weatherReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return state;
    default:
      return state;
  }
}

export default weatherReducer