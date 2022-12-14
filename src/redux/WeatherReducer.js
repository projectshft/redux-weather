import { GET_WEATHER } from '../actions/index'

const WeatherReducer = (state = [], action) => {
  switch(action.type){
    case GET_WEATHER:
      return [action.payload.data, ...state]
    default: 
      return state;
  }
}

export default WeatherReducer
