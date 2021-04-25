import axios from "axios";
export const FETCH_FORECAST = "FETCH_FORECAST";
export const UPDATE_DEFAULT_CITY = "UPDATE_DEFAULT_CITY";

// Sends a get request to openweather API for a city name
export const fetchForecast = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  const request = axios.get(url)

  return {
    type: FETCH_FORECAST,
    payload: request
  }
}

// Sends a get request to openweather API for a set of latitude and longitude coordinates
export const fetchForecastByLatLongCoordinates = (position) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  const request = axios.get(url);

  return {
    type: FETCH_FORECAST,
    payload: request
  }
}

// Creates an action to update the default city
export const changeDefaultCity = (newDefaultCityID) => {
  return {
    type: UPDATE_DEFAULT_CITY,
    payload: newDefaultCityID
  }
}