import axios from "axios";

const API_KEY = '4c414375755226104f1bfab42745ecab';

export const FETCH_CITY = "FETCH_CITY";

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export function fetchCity(query) {
  const request = axios.get(`${ROOT_URL}`,{
    params: {
      q: query,
      appid: API_KEY,
      units: 'imperial'
    }
  })
   
  return {
    type: FETCH_CITY,
    payload: request
    
  };
}




//fetch city needs to query the API then call a function that adds that info as an object to the state. Where to define that function? here?

//the second function needs to load the data for each city. Just a fetch_posts action that returns the state?