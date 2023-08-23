import axios from 'axios';

export const FETCH_COORDINATES = "FETCH_COORDINATES";

const apiKey = '94b98533e038ecd1e982b96426143136';
const ROOT_URL = 'https://api.openweathermap.org';

export function fetchCoordinates(query) {
  const response = axios.get(`${ROOT_URL}/geo/1.0/direct?q=${query}&appid=${apiKey}`);

  return {
    type: FETCH_COORDINATES,
    payload: response
  };
}