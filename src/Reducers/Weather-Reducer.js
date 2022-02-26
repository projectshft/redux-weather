import { FETCH_DATA } from "../Actions/Index";

const weatherReducer = function(state=[], action) {
  switch(action.type) {
    case FETCH_DATA: 
    debugger;
      return action.payload.data;
      // return action.payload.data.map((l) => {
      //   return {
      //     list: l.list
      //   }
      // });
    default:
      return state;
  }
}

export default weatherReducer;