import { FETCH_CITY } from '../actions';

export default function reducer (state =[], action){
  switch (action.type){
    case FETCH_CITY:
      return state.concat(action.payload.data)
    default:
      return state
  }; 
}