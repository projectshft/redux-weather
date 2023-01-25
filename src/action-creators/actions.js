import axios from "axios";

export const FETCH_CITY = 'FETCH_CITY';
export const FETCH_CITIES = 'FETCH_CITIES';



export function fetchCity (city) {
  const query = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=651b4326c31add8e66f753623aae609d`)
  return {
    type: FETCH_CITY,
    payload: query
  };
}

export function fetchCities () {
  return {
    type: FETCH_CITIES
  };
}