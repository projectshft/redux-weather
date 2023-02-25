// weather is it's own state
import { FETCH_WEATHER } from "../actions"

const DEFAULT_STATE = {
  temp: [],
  pressure: [],
  humidity: [],
};

const weatherReducer = function (state = DEFAULT_STATE, action) {

  // remove debugger and console.log
  debugger;
  console.log(action.payload);

  //manipulate data here and return the correct data into state
  
  switch (action.type) {    
    case FETCH_WEATHER:
      return DEFAULT_STATE;
    default: 
      return state;
  }
  
}

export default weatherReducer;