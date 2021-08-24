const weatherReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_CITY':
      return [action.payload.data, ...state]
    default:
      return state
  }
}

export default weatherReducer;

//do I need to combine reducers with only one? 
