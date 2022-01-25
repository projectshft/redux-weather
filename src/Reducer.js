const initialState = {
  stateList: [],
  searchTerm: ''
}


const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCHTERM_CLICK':
      return {
        ...state,
        searchTerm: action.payload
      }
    case 'FETCH_POSTS':
      return state;
    default:
      return state;
  }
}

export default Reducer


