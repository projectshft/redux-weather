import axios from "axios";

const API_KEY = process.env.API_KEY;

export const FETCH_CITY = "FETCH_CITY";
export const CREATE_CITY = "CREATE_CITY";

const ROOT_URL = `api.openweathermap.org/data/2.5/forecast&appid=${API_KEY}`;
//deleted ?q= and hoping axios supplies those below

export function fetchCity(query) {
  const request = axios.get(`${ROOT_URL}`,{
    params: {
      q: query
    }
  });

  return {
    type: FETCH_CITY,
    payload: request
  };
}

export function createCity(values) {
  const city = Object.assign({}, values);

  return {
    type: CREATE_CITY,
    payload: city,
  };
}