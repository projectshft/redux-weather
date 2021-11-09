import { CREATE_NEW_ROW } from "../actions";

const chartReducer = function (state= [], action) {
  switch(action.type) {
    
    case CREATE_NEW_ROW:
      // console.log(action.payload);
      console.log(state);
      return [action.payload, ...state];

    // case UPDATE_CHART:
    //   return state;

    default:
      return state;
    };
};

export default chartReducer;