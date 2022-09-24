/* eslint-disable default-param-last */

const weatherReducer = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_WEATHER':
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default weatherReducer;
