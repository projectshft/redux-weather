const initialState = {
  weatherData: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    default:
      return { ...state };
  }
};

export default weatherReducer;
