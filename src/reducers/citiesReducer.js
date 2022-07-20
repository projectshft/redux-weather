import { ADD_CITY, DEFAULT_CITY } from "../actions";

const DEFAULT_STATE = [];

const citiesReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_CITY:
      const isDuplicate = state?.find(city => city?.id === action.payload.data.city.id)
      if (isDuplicate) return state

      return [
        {
          name: action.payload.data.city.name,
          id: action.payload.data.city.id,
          temp: action.payload.data.list.reduce((start, item) => {
            return [...start, item.main.temp];
          }, []),
          pressure: action.payload.data.list.reduce((start, item) => {
            return [...start, item.main.pressure];
          }, []),
          humidity: action.payload.data.list.reduce((start, item) => {
            return [...start, item.main.humidity];
          }, []),
          default: false,
        },
        ...state,
      ];
    case DEFAULT_CITY:
      return state.map((city) => {
        if (city.name !== action.payload) {
          return city
        }

        return {
          ...city,
          default: !city.default,
        }
      });
    default:
      return state;
  }
};

export default citiesReducer;
