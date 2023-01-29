import { CITY_SEARCH } from "../actions/actions-index";

const citySearchReducer = (state = 'Cincinnati', action) => {
  switch (action.type) {
    case CITY_SEARCH:
      return 'Chicago';
    default:
      return state;
  }
};

export default citySearchReducer;