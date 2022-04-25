// import { normalize, schema } from 'normalizr';
// import { FETCH_CITY } from "../actions";
// // import _ from 'lodash';

import { FETCH_CITY } from "../actions";

const cityReducer = function(state = [], action) {
  switch (action.type) {
    case FETCH_CITY:
      return [
        {
          "city": 'Denver',
          "temperature": 55,
          "pressure": 1,
          "humidity": 30
        }
      ]
    default: return state;
  }
};

export default cityReducer;