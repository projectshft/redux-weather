// import { FETCH_WEATHER } from '../actions/index'

// const initialState = {
//   weather: {},
// }

// const reducers = combineReducers({
//   weatherData: function(
//     state ={
//       temperature: [],
//       pressure: [],
//       humidity: [],
//     },
//   action)
// )

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER':
      return {
        ...state,
        weather: action.payload,
      }; 
    default:
      return state;
    }
  }

