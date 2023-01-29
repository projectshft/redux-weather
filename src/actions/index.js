export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ADD_CITY = 'ADD_CITY';

export function fetchWeather(data) {
  return {
    type: FETCH_WEATHER,
    payload: data,
  };
}

export function addCity(city) {
  return {
    type: ADD_CITY,
    payload: city,
  };
}