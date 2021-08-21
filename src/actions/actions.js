// import axios from "axios";
// import API_KEY from "env.development.local";

// export const FETCH_CITY = "FETCH_CITY";

// const ROOT_URL = 'api.openweathermap.org/data/2.5/forecast?q='
// const KEY = API_KEY

// export function fetchCity(city) {
//   const request = axios.get(`${ROOT_URL}${city}&appid=${KEY}`);

//   return {
//     type: FETCH_CITY,
//     payload: request
//   }
// }


export const CREATE_SEARCH = "CREATE_SEARCH";

export function createSearch(values) {
  const search = Object.assign({}, values);
  return {
    type: CREATE_SEARCH,
    payload: search
  };
}