import axios from "axios";

export const FETCH_FORECAST = "FETCH_FORECAST";
var api_token = 'd8962aecd5213db8fadda59d04d64a81';


export function fetchForecast(city) { 
  
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${api_token}`;
  const request = axios.get(`${url}`)
  return {
    type: FETCH_FORECAST,
    payload: request
  };
}

