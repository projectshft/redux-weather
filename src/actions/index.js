import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

export const fetchWeather = async (city) =>
  axios
    .get(
      `${ROOT_URL}${city}&units=imperial&appid=6783e8fc2f1c1f45b18e23afa6f08304`
    )
    .then((response) => ({ type: FETCH_WEATHER, payload: response.data }));
