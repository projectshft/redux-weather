// weather is it's own state
import { FETCH_WEATHER } from "../actions"

const DEFAULT_STATE = {
  temp: [],
  pressure: [],
  humidity: [],
};

const weatherReducer = function (state = DEFAULT_STATE, action) {

  // remove debugger and console.log
  //debugger;
  console.log(action.payload);

  //manipulate data here and return the correct data into state
  
  switch (action.type) {    
    case FETCH_WEATHER:
      return {
        temp: [50, 70, 73, 64, 74],
        pressure: [90, 87, 69, 93, 85],
        humidity: [80, 70, 74, 72, 83]
      };
    default: 
      return state;
  }

}

export default weatherReducer;