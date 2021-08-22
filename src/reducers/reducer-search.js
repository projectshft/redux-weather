import {ADD_SEARCH, FETCH_SEARCHES} from "../actions/actions"

const defaultState = [
  {
    city: 'Durham',
    temp: [85,54,66,21,50],
    pressure: [32,23,4,51,10],
    humidity: [28,14,51,59,11]
  },
  {
    city: 'Raleigh',
    temp: [16,19,25,55,21],
    pressure: [4,6,1,6,7],
    humidity: [15,22,33,18,44]
  },
  { 
    city: 'Chapel Hill',
    temp: [1,3,15,2,7],
    pressure: [69,2,1,55,44],
    humidity: [23,62,73,23,44]
  }
];

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SEARCHES:
      // return action.payload.data;
      return state;
    case ADD_SEARCH:
      console.log(action.payload);
      console.log(state);
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default searchReducer;