import { ADD_LOCATION } from '../actions';

const createId = () => Math.random() * 100000;

// eslint-disable-next-line default-param-last
const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      debugger;
      return action.payload.data;
    default:
      return state;
  }
};

export default locationReducer;
