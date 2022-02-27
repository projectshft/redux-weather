import { FETCH_DATA } from "../Actions/Index";

const weatherReducer = function(state=[], action) {
  switch(action.type) {
    case FETCH_DATA: 
      // return action.payload.data;
      return [{data: action.payload.data.list, name: action.payload.data.city.name}, ...state];
    default:
      return state;
  }
}

export default weatherReducer;