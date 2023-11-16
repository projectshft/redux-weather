// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const FETCH_FIVE_DAY_FORECAST = 'FETCH_FIVE_DAY_FORECAST';
// weather api key
const apiKey = 'e762b32d14efd802e7f067526402633f';

export function fetchFiveDayForecast(city) {
  const fiveDayForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

  const request = axios
    .get(`${fiveDayForecastURL}`)
    .catch((error) => console.log(error));
  return {
    type: FETCH_FIVE_DAY_FORECAST,
    payload: request,
  };
}
