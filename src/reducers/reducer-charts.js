import { CREATE_CHART } from "../actions";

const chartsReducer = function(state= [], action) {
  
  switch(action.type) {
    
    case CREATE_CHART:
      console.log(action.payload);
      return state;

    default:
      return state;
    };
};

export default chartsReducer;