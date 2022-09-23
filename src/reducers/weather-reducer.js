const weatherReducer = function(state = '', action) {
  switch (action.type) {
    case "DISPLAY_WEATHER":

      return [
        ...state, ...action.payload,
      ]

    default:
      return state;
  }
};

export default weatherReducer;