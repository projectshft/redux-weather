import axios from 'axios';

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='
const API_KEY = process.env.REACT_APP_API_KEY;

export const ADD_SEARCH = "ADD_SEARCH";

export function addSearch(query) {

  const request = axios.get(`${ROOT_URL}${query}&units=imperial&appid=${API_KEY}`)

  return {
    type: ADD_SEARCH,
    payload: request
  };
}