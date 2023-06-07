import { FETCH_CITY } from "./../actions/actions-index"

const cityReducer = function (state=null, action){
  switch(action.type){
    case FETCH_CITY:
      return action.payload
    default:
      return state
  }
}

// action.payload.call.data.list[0].main

export default cityReducer