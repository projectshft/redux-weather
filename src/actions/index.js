import axios from "axios";
export const FETCH_FORECAST = "FETCH_FORECAST";
export const UPDATE_DEFAULT_CITY = "UPDATE_DEFAULT_CITY";

const sampleData = {
  name: "Durham",
  temperatures: [5, 10, 5, 20, 2, 20, 15, 10],
  pressures: [5, 10, 5, 20, 2, 20, 15, 10],
  humidityPoints: [5, 10, 5, 20, 2, 20, 15, 10]
}

export const fetchForecast = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
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