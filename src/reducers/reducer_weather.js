import {FETCH_CITYWEATHER} from "../actions";



const weatherPostsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CITYWEATHER:
      return action.payload.data;
    default:
      return state;
  }
}

export default weatherPostsReducer