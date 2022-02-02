


const Reducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default Reducer


