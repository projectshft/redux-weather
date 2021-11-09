import axios from "axios";

// export const UPDATE_CHART = "UPDATE_CHART";
export const CREATE_NEW_ROW = "CREATE_NEW_ROW";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_KEY = "9acb5f4800d2541ee3827f9f17a00dfe";

// export function updateChart () {
//   return {
//     type:UPDATE_CHART
//   };
// }

export function createNewRow(data) {
  const request = axios.get(`${ROOT_URL}${data.city}&appid=${API_KEY}&units=imperial`);

  return {
    type: CREATE_NEW_ROW,
    payload: request
  }

}

