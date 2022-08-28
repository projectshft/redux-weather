import { FETCH_FIVE_DAY, FETCH_FORECASTS } from "../actions"
import generateId from '../components/generateId'
import { normalize, schema } from 'normalizr'
import _ from 'lodash'

const forecastSchema = new schema.Entity('forecasts', undefined, {
  idAttribute: id => id
})

const DEFAULT_STATE = {
  entries: [],
  order: []
}

const searchReducer = function(state = DEFAULT_STATE, action){

  switch (action.type) {
    case FETCH_FORECASTS:
      return state
    case FETCH_FIVE_DAY:
      if(action.payload.data !== undefined ){

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
            name: fiveDayData.city.name,
            temp: tempObj,
            humidity: humidObj,
            pressure: pressureObj
          }
          // console.log(newObj)
          return {
            entries: {...state.entries, [newObj.id]:newObj},
            order: _.union([...state.order], [newObj.id])
          }
        } else {
          return state
        }

      default:
        return state
      }
}


export default searchReducer
