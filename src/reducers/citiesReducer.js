import { ADD_CITY } from "../actions";

const DEFAULT_STATE = [];

const citiesReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_CITY:
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
        },
        ...state,
      ];
    default:
      return state;
  }
};

export default citiesReducer;
