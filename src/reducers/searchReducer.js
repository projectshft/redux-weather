import { DELETE_FIVE_DAY, FETCH_FIVE_DAY, FETCH_LOCATION, FETCH_ONE_DAY } from "../actions"

const DEFAULT_STATE = {
  
  oneDayForecast: 
    {
      temp: "00",
      description: "room",
      icon: "",
      id: 0
    },

  fiveDayForecast: 
    {
      id: 0,
      forecastArray: []
    }
}

const searchReducer = function(state = DEFAULT_STATE, action){
  const generateId = () => Math.round(Math.random() * 100000000);
  // debugger
  switch (action.type) {
    case FETCH_LOCATION:
      return state;
      //
    case FETCH_ONE_DAY:
      console.log(state)
      const oneDayData = action.payload.data
      console.log(oneDayData)
      if (oneDayData !== undefined){
        return {
          oneDayForecast: {
          temp: oneDayData.main.temp,
          description: oneDayData.weather[0].description,
          icon: oneDayData.weather[0].icon,
          id: generateId
        }}
        

      } else {
        return {
          oneDayForecast: {
          temp: "00",
          description: "room",
          icon: "",
          id: 0
        }
      }
      }
        // return action.payload.data

      ;
    case FETCH_FIVE_DAY:
      console.log(`five day fetch: ${state.fiveDayForecast}`)
      const fiveDayData = action.payload.data
      const id = generateId()
      console.log(fiveDayData)
      return {
        id: id,
        forecastArray: action.payload.data
      };
    case DELETE_FIVE_DAY:
      return state;
      default:
        return state
      }
}
// const initialState = {
//   weatherForecast: [{}]
// }


export default searchReducer
