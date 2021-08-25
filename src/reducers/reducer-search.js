import { ADD_SEARCH } from '../actions/actions';

const searchReducer = (state = [], action) => {

if (action && action.payload && action.payload.data) {

  switch (action.type) {
    case ADD_SEARCH:
      return [action.payload, ...state];
    default:
      return state;
  }
} 

return state;

};

export default searchReducer;