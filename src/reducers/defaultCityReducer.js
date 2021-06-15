import { MAKE_DEFAULT } from "../actions/makeDefaultAction";

const initialState = {
  defaultCity: "",
};

const defaultCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_DEFAULT:
      return {
        ...state,
        defaultCity: action.payload,
      };
    default:
      return state;
  }
};

export default defaultCityReducer;
