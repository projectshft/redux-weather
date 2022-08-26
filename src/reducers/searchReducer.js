import { DELETE_FIVE_DAY, FETCH_FIVE_DAY, FETCH_LOCATION } from "../actions"
import generateId from '../components/generateId'

const DEFAULT_STATE = {
  id: generateId(),
  forecastObj: {
    name: "",
    temp: "",
    humidity: "",
    pressure: ""
  }
}

const searchReducer = function(state = DEFAULT_STATE, action){
  
  // debugger
  switch (action.type) {
    case FETCH_LOCATION:
      return state;
      
    case FETCH_FIVE_DAY:
      console.log(`five day fetch: ${state}`)
      const fiveDayData = action.payload.data
      const id = generateId()
      const tempObj = []
      const humidObj = []
      const pressureObj = []
      fiveDayData.list.forEach(element => {
        tempObj.push(element.main.temp)
        humidObj.push(element.main.humidity)
        pressureObj.push(element.main.pressure)
      });
      
      const newObj = {
        id:id,
        forecastObj: {
          name: fiveDayData.city.name,
          temp: tempObj,
          humidity: humidObj,
          pressure: pressureObj
      }}
      console.log(newObj)
      return {...state, ...newObj};
    case DELETE_FIVE_DAY:
      return state;
      default:
        return state
      }
}


export default searchReducer
