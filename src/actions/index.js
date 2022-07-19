import axios from "axios";
import { useCallback } from "react";
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;


export const ADD_CITY = "ADD_CITY";

const ROOT_URL = "http://api.openweathermap.org";

export function addCity({city}) {
  
    const params = {
      q: city,
      appid: API_KEY,
      units: 'imperial'
    };
  
    const request = axios.get(`${ROOT_URL}/data/2.5/forecast?`, { params: params });

    // request.then(response => console.log(response));
    request.catch(error => console.error(error));

  return {
    type: ADD_CITY,
    payload: request,
  };
}