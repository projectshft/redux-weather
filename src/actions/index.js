import axios from "axios";
export const FETCH_FORECAST = "FETCH_FORECAST";
export const DISPLAY_BUTTON = "DISPLAY_BUTTON";
export const HIDE_BUTTON = "HIDE_BUTTON";

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

export const changeDefaultCity = (display) => {
  const type = display ? DISPLAY_BUTTON : HIDE_BUTTON;
  return {
    type 
  }
}