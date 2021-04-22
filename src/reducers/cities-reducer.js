import { FETCH_FORECAST } from "../actions/index";

const defaultState = [];

const citiesReducer = (state=defaultState, action) => {
  switch (action.type) {
    case FETCH_FORECAST:
      const getWeatherDataFromFetch = (openWeatherData, type) => {
        return openWeatherData.data.list.map((forecastPoint) => forecastPoint.main[type])
      }
      const newCity = {
        name: action.payload.data.city.name,
        id: action.payload.data.city.id,
        temperatures: getWeatherDataFromFetch(action.payload, "temp"),
        pressures: getWeatherDataFromFetch(action.payload, "pressure"),
        humidityPoints: getWeatherDataFromFetch(action.payload, "humidity"),
      }
      return [...state, newCity];
  
    default:
      return state;
  }
}

export default citiesReducer;