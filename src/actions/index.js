import axios from 'axios';

export const FETCH_5DAY = 'FETCH_5DAY';

const API_KEY = '5d89bf6d2f056d85b22481ebf063597b';

const CITY_NAME = '';

export function fetch5Day() {
  const request = axios.get(
    `api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}`
  );

  return {
    type: FETCH_5DAY,
    payload: request,
  };
}
