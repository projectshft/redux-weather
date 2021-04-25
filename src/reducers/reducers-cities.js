import { FETCH_CITY } from "../actions";

const cityReducer = function (state = [], action) {

  switch (action.type) {
    case FETCH_CITY:
      return {
        name: action.payload.data.city.name,
        stats: action.payload.data.list.map(function (c) {
          return {
            temperature: c.main.temp || '',
            pressure: c.main.pressure || '',
            humidity: c.main.humidity || ''
          }
        })
      }
    default:
      return state;
  }
}

export default cityReducer;

