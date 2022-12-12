import {FETCH_CITYWEATHER} from "../actions";



const weatherPostsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CITYWEATHER:
      console.log(action.payload);
      return [action.payload];
    default:
      return state;
  }
}

export default weatherPostsReducer