import axios from 'axios';

export const GET_CITY = 'GET_CITY';

const apiKey = '536b99823dd5364f3a29be3867644595';

export function getCityWeather(value) {
  const data = axios.get(
    `https:/api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${apiKey}&units=imperial`
  );

  return {
    type: GET_CITY,
    payload: data,
  };
}
