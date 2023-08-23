// import { normalize, schema } from 'normalizr';
// import _ from 'lodash';
import { FETCH_COORDINATES } from "../actions";

const locationsReducer = function (state = [], action) {
  switch (action.type) {
    case FETCH_COORDINATES:
      return [...state, [action.payload.data[0]]]
    default:
      return state;
  }
};

export default locationsReducer;