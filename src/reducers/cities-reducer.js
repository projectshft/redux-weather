import { FETCH_FORECAST } from "../actions/index";

const defaultState = [];

const citiesReducer = (state=defaultState, action) => {
  //Checks to see the fetch request failed and returns the current state if so
  if(action.error) {
    alert('Could not find results for search')
    return state;
  }
  // (temperature in Kelvin − 273.15) × 9/5 + 32 = temperature in Fahrenheit
  const convertKelvinToFahrenheit = (temperatureArr) => temperatureArr.map((t) => Math.round((t - 273.15) * (9/5) + 32)); 

  // Grabs the specified weather data type froom the openweather API results
  const getWeatherDataFromFetch = (openWeatherData, type) => {
    return openWeatherData.data.list.map((forecastPoint) => forecastPoint.main[type])
  };

  //Grabs the times of the forecast points
  const getTimesOfForecastPoints = (openWeatherData) => {
    return openWeatherData.data.list.map((forecastPoint) => forecastPoint.dt_txt)
  }
  
  switch (action.type) {
    case FETCH_FORECAST:
      const newCity = {
        name: action.payload.data.city.name,
        id: action.payload.data.city.id,
        temperatures: convertKelvinToFahrenheit(getWeatherDataFromFetch(action.payload, "temp")),
        pressures: getWeatherDataFromFetch(action.payload, "pressure"),
        humidityPoints: getWeatherDataFromFetch(action.payload, "humidity"),
        times: getTimesOfForecastPoints(action.payload),
      };
      //Checks to see if weather information for the new city is already in the cities store and filters out the old information if so.
      const stateWithoutRepeatedCity = state.filter((city) => city.name !== newCity.name);

      return [newCity, ...stateWithoutRepeatedCity];
  
    default:
      return state;
  }
}

export default citiesReducer;