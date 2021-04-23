import { DISPLAY_BUTTON } from "../actions/index"
import { HIDE_BUTTON } from "../actions/index"

const defaultCityReducer = (state=null, action) => {
  switch (action.type) {
    case DISPLAY_BUTTON:
      return true;
    case HIDE_BUTTON:
      return false
    default:
      return state;
  }
}

export default defaultCityReducer;