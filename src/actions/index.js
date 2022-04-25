import axios from 'axios';

export const FETCH_CITIES = 'FETCH_CITIES';
export const ADD_CITY = 'ADD_CITY';

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
const APP_ID = 'b364c7de6690a581f692b6d31053054f';

export function fetchCities() {
  return {
    type: FETCH_CITIES
  }
}

export function addCity(name) {
  const request = axios.get(`${ROOT_URL}${name}&units=imperial&appid=${APP_ID}`).catch(error => {
    alert('City not found');
  });

  return {
    type: ADD_CITY,
    payload: request
  };
}