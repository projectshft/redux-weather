import { FETCH_DATA } from "../Actions/Index";

const weatherReducer = function(state=[], action) {
  switch(action.type) {
    case FETCH_DATA: 
      return [{data: {conditions: action.payload.data.list, city: action.payload.data.city.name}}, ...state] 
    default:
      return state;
  }
}

export default weatherReducer;