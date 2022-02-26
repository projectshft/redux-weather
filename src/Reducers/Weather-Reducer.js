import { FETCH_DATA } from "../Actions/Index";

const weatherReducer = function(state=[], action) {
  switch(action.type) {
    case FETCH_DATA: 
      return action.payload.list;
    default:
      return state;
  }
}

export default weatherReducer;