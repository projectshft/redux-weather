import axios from "axios";
import { useCallback } from "react";
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const ADD_CITY = "ADD_CITY";
export const DEFAULT_CITY = "DEFAULT_CITY";


const ROOT_URL = "http://api.openweathermap.org";

export async function addCity({ city, isDefault=false }) {
    const params = {
      q: city,
      appid: API_KEY,
      units: 'imperial'
    };
  
    const request = await axios
      .get(`${ROOT_URL}/data/2.5/forecast?`, { params: params })
      .catch(error => alert(`${city} did not return any results.`));

  return {
    type: ADD_CITY,
    payload: {...request, isDefault},
  };
}

export function makeDefaultCity(city) {
  return {
    type: DEFAULT_CITY,
    payload: city,
  };
}