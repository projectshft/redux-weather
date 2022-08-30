import axios from "axios";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const APIKey = "c44eb17ad7f8bb0d37f00beae955a5fb";


export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS";
export const TEST = "TEST";


export function getSearchResults(query) {
  const request = axios.get(`${ROOT_URL}${query}&appId=${APIKey}&units=imperial`);

  return {
    type: GET_SEARCH_RESULTS,
    payload: request,
  }
}

export function test(query) {
  return {
    type: TEST,
    payload: query
  }
}
