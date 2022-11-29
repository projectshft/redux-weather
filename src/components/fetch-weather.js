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

  const weatherArray = request.data.list;
  console.log(weatherArray);

  const temp = [];
  const pressure = [];
  const humidity = [];

  weatherArray.forEach(data => {
    temp.push(data.main.temp);
    pressure.push(data.main.pressure);
    humidity.push(data.main.humidity);
  });

  console.log(temp);

  addWeather({ city, temp, pressure, humidity });

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};