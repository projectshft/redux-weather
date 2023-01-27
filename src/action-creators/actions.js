import axios from "axios";

export const FETCH_TEMP = 'FETCH_TEMP';
export const FETCH_PRESSURE = 'FETCH_PRESSURE';
export const FETCH_HUMIDITY = 'FETCH_HUMIDITY';



export function fetchTemp () {
  const query = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=gilbert&appid=651b4326c31add8e66f753623aae609d`)

  return {
    type: FETCH_TEMP,
    payload: query
  };
}

export function fetchPressure () {
  const query = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=gilbert&appid=651b4326c31add8e66f753623aae609d`)

  return {
    type: FETCH_PRESSURE,
    payload: query
  };
}

export function fetchHumidity () {
  const query = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=gilbert&appid=651b4326c31add8e66f753623aae609d`)

  return {
    type: FETCH_HUMIDITY,
    payload: query
  };
}

//fETCH ALL COMING SOON