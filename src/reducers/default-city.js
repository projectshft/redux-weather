import { SET_DEFAULT} from "../actions";


const defaultReducer = function(state = localStorage.getItem("defaultCity"), action) {
  switch (action.type) {

    case SET_DEFAULT:
        return action.payload
    default:
      return state;
  }
}

export default defaultReducer  