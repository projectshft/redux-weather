import { GET_CITY } from '../actions/actions-index';

const initialState = [];

// eslint-disable-next-line default-param-last
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY:
      return [...state, action.payload.data];
    default:
      return state;
  }
};

export default cityReducer;
