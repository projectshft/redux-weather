import { FETCH_DATA } from "../Actions/Index";

const weatherReducer = function(state=[], action) {
  switch(action.type) {
    case FETCH_DATA: 
      // return action.payload.data;
      // return [{data: action.payload.data.list, name: action.payload.data}, ...state];
      return [{data: {conditions: action.payload.data.list, city: action.payload.data.city.name}}, ...state] //data: {{object 1}, {object2}} data is equal two the two objects ineed
    default:
      return state;
  }
}

export default weatherReducer;