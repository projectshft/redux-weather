import axios from 'axios';

export const ADD_CITY = 'ADD_CITY';

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
const API_URL = '&appid=ba4fcb43b4e6c7724e8c8d168e46fa49';

export function fetchCity(query) {
  // const request = axios.get(ROOT_URL + query + API_URL);
  // request.then(response =>
  //   {return {
  //     type: ADD_CITY,
  //     payload: response,
  //   };}.catch((err) => {
  //   alert(`Please try searching again\n${err}`);
  //   return {
  //     type: null,
  //     payload: null,
  //   };
  // });

  return axios
    .get(ROOT_URL + query + API_URL)
    .then((response) => ({
      type: ADD_CITY,
      payload: response,
    }))
    .catch((err) => {
      alert(`Please try searching again\n${err}`);
      return {
        type: null,
        payload: null,
      };
    });
}
