import axios from "axios";

// TO DO: move the API KEY to an .env file
export const API_KEY = "c60d7d92799f3cf527b48cf6335c9cc5";

export const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?";
export const FETCH_WEATHER = "FETCH_WEATHER";

export async function fetchWeather(e, city) {
  e.preventDefault();

  const request = await axios({
    url: (`${ROOT_URL}q=${city}&appid=${API_KEY}`)
  })
  console.log(request.data)

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};