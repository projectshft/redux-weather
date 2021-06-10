import { FETCH_WEATHER, GET_LOCATION } from "../actions";
import { v4 as uuidv4 } from "uuid";

const DEFAULT_STATE = {
  cities: [],
  cityFoundDisplay: { display: "none" },
  mapURL: null,
};

const URL = "https://www.google.com/maps/embed/v1/place?key=";
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const CityWeatherReducer = function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      if (!action.payload.data) {
        return {
          cities: [...state.cities],
          cityFoundDisplay: { display: "inline" },
          mapURL: state.mapURL,
        };
      }
      return {
        cities: [
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
        cityFoundDisplay: { display: "none" },
        mapURL: `${URL}${API_KEY}&q=${action.payload.data.city.name}`,
      };
    case GET_LOCATION:
      if (!action.payload.data) {
        return {
          cities: [...state.cities],
          cityFoundDisplay: { display: "inline" },
          mapURL: state.mapURL,
        };
      }
      return {
        cities: [
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
        cityFoundDisplay: { display: "none" },
        mapURL: `${URL}${API_KEY}&q=${action.payload.data.city.name}`,
      };
    default:
      return state;
  }
};

export default CityWeatherReducer;
