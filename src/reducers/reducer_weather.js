import {FETCH_CITYWEATHER} from "../actions";



const weatherPostsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CITYWEATHER:
      console.log([action.payload.data,...state])
      debugger;
      return [action.payload.data,...state];
    default:
      return state;
  }
}

export default weatherPostsReducer