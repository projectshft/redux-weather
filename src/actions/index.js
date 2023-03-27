import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST";
const API_KEY = 'ed82dafb0490d14952ef1d1117c72baf';
const ROOT_URL = 'api.openweathermap.org/data/2.5/forecast?q='

export function fetchForecast(value) {
  const request = axios.get(`${ROOT_URL}${value}&appid=
  ${API_KEY}&units=imperial`).then(response => {console.log(response);})
  .catch(err => console.log(err))

  return {
    type: FETCH_FORECAST,
    payload: request
  };
}