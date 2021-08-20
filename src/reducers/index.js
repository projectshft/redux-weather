import { FETCH_CITY, CREATE_CITY } from "../actions"

const weatherReducer = (state = 0, action) => {
  switch(action.type) {
    case 'FETCH_CITY':
      return action.payload.data
    case 'CREATE_CITY':
      return [action.payload, ...state];
    default:
      return state
  }
}

export default weatherReducer;

//do I need to combine reducers with only one? 

//Refactor to have two reducers -- one to fetch and one to store new city data