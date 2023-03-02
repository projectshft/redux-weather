import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

const FETCH_WEATHER = "FETCH_WEATHER"

// const fetchWeather = createAsyncThunk(
//   "FETCH_WEATHER",
//   async (city) => {
//     const response = await axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`)
//     return response.data;
//   }
// )

// export default fetchWeather;


export function weatherRequest(city) {
  const weatherData =  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`)
  console.log(weatherData)
  return {
    type: FETCH_WEATHER,
    payload: weatherData
  };
}