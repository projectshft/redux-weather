import { FETCH_WEATHER } from "../actions";

const DEFAULT_STATE = {
  // currentCity: "",
  // cityData: {
  //   id: null,
  //   city_name: "",
  //   temperature: [],
  //   pressure: [],
  //   humidity: [],
  // },
  cities: [],
};

const weatherReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        cities: [
          ...state.cities,
          {
            id: action.payload.data.city.id,
            city_name: action.payload.data.city.name,
            temperature: action.payload.data.list.map((hour) => {
              return hour.main.temp;
            }),
            pressure: action.payload.data.list.map((hour) => {
              return hour.main.pressure;
            }),
            humidity: action.payload.data.list.map((hour) => {
              return hour.main.humidity;
            }),
          },
        ],
      };
    default:
      return state;
  }
};

export default weatherReducer;
