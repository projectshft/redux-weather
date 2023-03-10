import axios from 'axios';

export const FETCH_5DAY = 'FETCH_5DAY';

const API_KEY = '5d89bf6d2f056d85b22481ebf063597b';

export function fetch5Day(city) {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
  );

  console.log(request);

  return {
    type: FETCH_5DAY,
    payload: request,
  };
}
