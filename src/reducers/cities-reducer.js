const defaultState = [];

const citiesReducer = (state=defaultState, action) => {
  switch (action.type) {
    case "FETCH_FORECAST":
      return state;
  
    default:
      return state;
  }
}

export default citiesReducer;