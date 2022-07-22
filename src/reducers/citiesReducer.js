import { ADD_CITY, DEFAULT_CITY } from "../actions";

const DEFAULT_STATE = [];

const citiesReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_CITY:
      const data = action.payload.data;

      const isDuplicate = state?.find(city => city?.id === data.city.id)
      if (isDuplicate) return state

      return [
        {
          name: data.city.name,
          id: data.city.id,
          temp: data.list.reduce((start, item) => [...start, item.main.temp], []),
          pressure: data.list.reduce((start, item) => [...start, item.main.pressure], []),
          humidity: data.list.reduce((start, item) => [...start, item.main.humidity], []),
          isDefault: action.payload.isDefault
        },
        ...state,
      ];
    case DEFAULT_CITY:
      return state.map((city) => {
        if (city.name !== action.payload) {
          return {
            ...city,
            isDefault: false,
          }
        }

        return {
          ...city,
          isDefault: !city.isDefault,
        }
      });
    default:
      return state;
  }
};

export default citiesReducer;
