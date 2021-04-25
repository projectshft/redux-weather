import { UPDATE_DEFAULT_CITY } from "../actions/index"

const defaultCityReducer = (state=null, action) => {
  switch (action.type) {
    case UPDATE_DEFAULT_CITY:
      return action.payload;
    default:
      return state;
  }
}

export default defaultCityReducer;