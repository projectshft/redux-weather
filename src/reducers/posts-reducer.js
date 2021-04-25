import { FETCH_WEATHER, SET_DEFAULT } from "../actions";

const setDefaultState = () => {
  if (sessionStorage.getItem('default') != null) {
    return {
      weather: [],
      default: [sessionStorage.getItem('default')]
    };
  };
    return {
        weather: [],
        default: []
  };
};

const postsReducer = function(state = setDefaultState(), action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        weather: [...state.weather, action.payload.data],
        default: [...state.default]
      };
    case SET_DEFAULT:
      return {
        weather: [...state.weather],
        default: [sessionStorage.setItem('default', action.payload)]
      };
    default:
      return state;
  };
};

export default postsReducer;