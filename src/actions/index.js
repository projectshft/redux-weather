import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?';

export function fetchWeather(city) {
  const request = axios.get(
    `${ROOT_URL}q=${city}&units=imperial&appid=6783e8fc2f1c1f45b18e23afa6f08304`
  );

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
