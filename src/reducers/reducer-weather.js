// weather is it's own state
import { FETCH_WEATHER } from "../actions"

const DEFAULT_STATE = {
  temp: [],
  pressure: [],
  humidity: [],
};

const weatherReducer = function (state = DEFAULT_STATE, action) {
  
  switch (action.type) {
    case FETCH_WEATHER:
      return DEFAULT_STATE;
    default: 
      return state;
  }
  
}

export default weatherReducer;