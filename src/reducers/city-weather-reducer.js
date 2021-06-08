import { FETCH_WEATHER } from "../actions";
import { v4 as uuidv4 } from "uuid";

const DEFAULT_STATE = {
  cities: [],
};

const CityWeatherReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        cities: [
          ...state.cities,
          {
            id: uuidv4(),
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

export default CityWeatherReducer;
