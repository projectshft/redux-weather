import {FETCH_CITYWEATHER} from "../actions";


//list of reducers which return an array of objects that contain the 5 day weather for a city.
const weatherPostsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CITYWEATHER:
      if(action.payload === undefined){
        return state;
      }
      else{
        return [action.payload,...state];
      }
    default:
      return state;
  }
}

export default weatherPostsReducer