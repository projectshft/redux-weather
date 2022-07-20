import axios from "axios";
import { useCallback } from "react";
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const ADD_CITY = "ADD_CITY";
export const DEFAULT_CITY = "DEFAULT_CITY";


const ROOT_URL = "http://api.openweathermap.org";

export function addCity({city}) {
  
    const params = {
      q: city,
      appid: API_KEY,
      units: 'imperial'
    };
  
    const request = axios.get(`${ROOT_URL}/data/2.5/forecast?`, { params: params });

    // request.then(response => console.log(response));
    request.catch(error => alert(`${city} did not return any results.`));

  return {
    type: ADD_CITY,
    payload: request,
  };
}

export function makeDefaultCity(city) {
  localStorage.setItem('default_city', city);

  return {
    type: DEFAULT_CITY,
    payload: city,
  };
}