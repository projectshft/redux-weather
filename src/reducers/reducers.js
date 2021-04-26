import {FETCH_CITY, CITY_NAME} from '../actions'

// store state
const INITIAL_STATE = {
  entries: [],
  cityName: [] 
}

// reducer
export  const Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type){

    case FETCH_CITY: 
    return {
      ...state,  
      entries: {...action.payload.list }
    }

    case CITY_NAME:
      return{
          ...state, cityName: action.payload
      }

    default: 
    return state
  }
}


