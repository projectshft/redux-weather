import { FETCH_FORECAST } from "../actions";

export const forecastReducer = function (state = [], action) {
  switch (action.type) {
    case FETCH_FORECAST:
      console.log(action.payload.data);
      if (
        action.payload.data &&
        !state.some((forecast) => forecast.id === action.payload.data.city.id)
      ) {
        return [
          ...state,
          {
            id: action.payload.data.city.id,
            cityName: action.payload.data.city.name,
            forecast: action.payload.data.list,
          },
        ];
      } else {
        return state;
      }
    default:
      return state;
  }
};
