import { ADD_LOCATION } from '../actions';

// eslint-disable-next-line default-param-last
const locationReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LOCATION:
      debugger;
      return state;
    default:
      return state;
  }
};

export default locationReducer;
