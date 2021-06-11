import { FETCH_FORECAST } from "../actions";

export const forecastReducer = function (state = [], action) {
  switch (action.type) {
    case FETCH_FORECAST:
      return [
        ...state,
        {
          id: action.payload.data.city.id,
          cityName: action.payload.data.city.name,
          forecast: action.payload.data.list,
        },
      ];
    default:
      return state;
  }
};
