import { FETCH_5DAY } from '../actions';

const initialState = {
  data: [],
};

// eslint-disable-next-line default-param-last
export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_5DAY:
      return {
        ...state,
        data: action.payload.data.list,
      };
    default:
      return state;
  }
}
