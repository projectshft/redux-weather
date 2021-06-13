import axios from "axios";

//variables
export const FETCH_WEATHER = "FETCH_WEATHER";

//action creators
export const loadWeatherData = (query) => {
  const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";

  const request = axios.get(
    `${ROOT_URL}${query}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_API}`
  );

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};
