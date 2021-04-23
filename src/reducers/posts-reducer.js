import { FETCH_WEATHER} from "../actions";

const DEFAULT_STATE = {
  weather: [],
};

const postsReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        weather: [...state.weather, action.payload.data]
      }
    default:
      return state;
  }
};

export default postsReducer;