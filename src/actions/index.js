import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const DELETE_WEATHER = 'DELETE_WEATHER';

const API_KEY = 'd42fcd703f061a26191fb5165ab48e75';
const ROOT_URL = 'http://api.openweathermap.org/';

export const fetchWeather = (searchQuery = 'austin') => {
  const request = axios.get(
    `${ROOT_URL}data/2.5/forecast?q=${searchQuery}&units=imperial&appid=${API_KEY}`
  );

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};

export const deleteWeather = (id, callback) => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}`);

  request.then(() => callback());

  return {
    type: DELETE_WEATHER,
    payload: id,
  };
};
