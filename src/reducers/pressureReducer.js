const pressureReducer = (state = {}, action) => {
  if (action.type === "add-pressure") {
    const { city, value } = action.payload;
    return {
      ...state,
      [city]: [...(state[city] || []), value]
    }
  }
  return state;
}

export default pressureReducer;