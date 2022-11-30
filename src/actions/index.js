import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?appid=6dfa5fa1e6c3d2353bb1a165e2634ef1&units=imperial";

export async function fetchCity(data) {

    const request = await axios.get(`${ROOT_URL}&q=${data.city}`).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        alert('error, please try again');
      }
    });

    return {
      type: FETCH_CITY,
      payload: request
    }
}