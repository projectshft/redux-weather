const initialState = {
  currentWeatherList: [],
}


const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return state;
    default:
      return state;
  }
}

export default Reducer


