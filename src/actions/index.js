import axios from "axios";

export const CREATE_NEW_ROW = "CREATE_NEW_ROW";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_KEY = "9acb5f4800d2541ee3827f9f17a00dfe";

export function createNewRow(data) {
  const request = axios
    .get(`${ROOT_URL}${data.city}&appid=${API_KEY}&units=imperial`) 
    .catch(function (error) {
      alert(`${data.city} is not a city in our database`);
    });

  if (request) {
    return {
      type: CREATE_NEW_ROW,
      payload: request
    }
  } else {
    return;
  }
}

