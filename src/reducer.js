const initialState = {
  forecasts: [],
  testArray: [],
};

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case "GET_SEARCH_RESULTS": {
      const list = [...action.payload.data.list];

      const check = state.forecasts.find((city => city.id === action.payload.data.city.id));
      if (check) {
        return state;
      }

      return {
        ...state,
        forecasts: [
          ...state.forecasts, 
          {
            id: action.payload.data.city.id,
            name: action.payload.data.city.name,
            temp: list.map(timeWindow => timeWindow.main.temp),
            pressure: list.map(timeWindow => timeWindow.main.pressure),
            humidity: list.map(timeWindow => timeWindow.main.humidity),
          }
        ],
      }
    }
    case "TEST": {
      return {
        ...state,
        testArray: [...state.testArray, action.payload],
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
