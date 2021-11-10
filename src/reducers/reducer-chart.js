import { CREATE_NEW_ROW } from "../actions";

const chartReducer = function (state= [], action) {
  switch(action.type) {
    
    case CREATE_NEW_ROW:
      if (action.payload){
        return [action.payload, ...state];
      } else {
        return state;
      }

    default:
      return state;
    };
};

export default chartReducer;