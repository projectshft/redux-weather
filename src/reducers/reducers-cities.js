import { FETCH_CITY } from "../actions";

const cityReducer = function (state = [], action) {
  debugger
  switch (action.type) {
    case FETCH_CITY:
      return action.payload.data.list.map(function (c) {
        debugger;
        return {
          temperature: c.main.temp || '',
          pressure: c.main.pressure || '',
          humidity: c.main.humidity || ''
        }
      }
      );
    default:
      return state;
  }

}

export default cityReducer;
