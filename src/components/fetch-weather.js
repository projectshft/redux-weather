import axios from "axios";

// TO DO: move the API KEY to an .env file
export const API_KEY = "c60d7d92799f3cf527b48cf6335c9cc5";

export const FETCH_WEATHER = "FETCH_WEATHER";

// TO DO: Add an error message if the city data is not found
export async function fetchWeather(e, city, {addWeather}) {
  e.preventDefault();

  const request = await axios({
    url: (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`)
  })
  console.log(request.data.list)

  // Next, need to get all data of each type from the forecast list and add the data to the variables below
  const temp = '';
  const pressure = '';
  const humidity = '';

  addWeather({ city, temp, pressure, humidity });

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};