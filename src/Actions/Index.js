import axios from "axios"

export const FETCH_DATA = 'FETCH_DATA'

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='

const API = '&appid=959d275eae1f10794b2be3475af21fdf'

export function getData(data) {
  const request = axios.post(`${ROOT_URL}${data}${API}`);
  console.log(request);

  return {
    type: FETCH_DATA,
    payload: request
  }
}