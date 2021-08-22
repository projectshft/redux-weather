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


export const FETCH_SEARCHES = "FETCH_SEARCHES";
export const ADD_SEARCH = "ADD_SEARCH";

export function fetchSearches() {
  return {
    type: FETCH_SEARCHES,
  };
}

export function addSearch(values) {
  // const search = Object.assign({}, values);        //payload = search
  return {
    type: ADD_SEARCH,
    payload: values
  };
}