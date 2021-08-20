const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RESULT':
      return [action.payload.data, ...state];

    default:
      return state;
  }
}

export default resultsReducer;