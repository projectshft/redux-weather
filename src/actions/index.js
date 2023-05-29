import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST";

const key = '80692584297b7182870d0100d6625794'
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='
// + query + '&appid=' + key + '&units=imperial';

export function fetchForecast(query) {
  const request = axios.get(`${urlForecast}${query.city}&appid=${key}&units=imperial`)

  return {
    type: FETCH_FORECAST,
    payload: request
  }
}

