import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const DELETE_WEATHER = 'DELETE_WEATHER';

const API_KEY = 'd42fcd703f061a26191fb5165ab48e75';
const ROOT_URL = 'http://api.openweathermap.org/';

export const fetchWeather = (searchQuery = 'austin') => {
  const request = axios
    .get(
      `${ROOT_URL}data/2.5/forecast?q=${searchQuery}&units=imperial&appid=${API_KEY}`
    )
    .catch((error) => {
      if (error.response) {
        alert('Invalid search. Use valid city name or zip code only.');
      }
    });

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};

export const deleteWeather = (id) => ({
  type: DELETE_WEATHER,
  payload: id,
});
