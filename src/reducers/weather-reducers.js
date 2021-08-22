import { FETCH_WEATHER } from "../actions";

const weatherReducer = function (state = {}, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data
    default:
      return state
  }
}



export default weatherReducer