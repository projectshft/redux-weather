const humidityReducer = (state = {}, action) => {
  if (action.type === "add-humidity") {
    const { city, value } = action.payload;
    return {
      ...state,
      [city]: [...(state[city] || []), value]
    }
  }
  return state;
}

export default humidityReducer;