import { addTemperature } from "./temperatureSlice"

const initialState = {
  temperature: [],

}



export const reducer = (state = initialState, action) => {
  // line 11 to 18 for pressure and humidity.  Add the other actions
  //  have the keys of your cities as the initialState 
  if (action.type === 'TEMPERATURE/ADD_TEMPERATURE') {
    const finalState = {
      ...state,
      temperature: action.temperature,
      //  optional
      // [action.city]: { temperature, humidity, pressure }
      // otherwise add in a humidity and pressure key below, just like above
    } 
    return finalState;
  }
  else {
    return state;
  }
}

