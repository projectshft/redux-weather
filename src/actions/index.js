import axios from "axios";
export const FETCH_FORECAST = "FETCH_FORECAST";
export const UPDATE_DEFAULT_CITY = "UPDATE_DEFAULT_CITY";

export const fetchForecast = (location, locationType) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  const request = axios.get(url)

  return {
    type: FETCH_FORECAST,
    payload: request
  }
}

export const fetchForecastByLatLongCoordinates = (position) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  const request = axios.get(url);

  return {
    type: FETCH_FORECAST,
    payload: request
  }
}

export const changeDefaultCity = (newDefaultCityID) => {
  return {
    type: UPDATE_DEFAULT_CITY,
    payload: newDefaultCityID
  }
}