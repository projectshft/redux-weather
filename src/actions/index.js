import axios from "axios";

const API_KEY = '4c414375755226104f1bfab42745ecab'; 

export const FETCH_CITY = "FETCH_CITY";

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export function fetchCity(query) {
  const request = axios.get(`${ROOT_URL}`,{
    params: {
      q: query,
      appid: API_KEY,
      units: 'imperial'
    }
  })
   
  return {
    type: FETCH_CITY,
    payload: request    
  };
}