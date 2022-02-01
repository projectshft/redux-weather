const initialState = {
  weatherData: []
}


const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        weatherData: action.payload
      };
    default:
      return state;
  }
}

export default Reducer


