const temperatureReducer = (state = {}, action) => {
  if (action.type === "add-temperature") {
    const { city, value } = action.payload;
    return {
      ...state,
      [city]: [...(state[city] || []), value] // { "chicago": [75]}
    }
  }
  return state;
}

export default temperatureReducer;