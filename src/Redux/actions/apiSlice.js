// import axios from "axios"
// import { createAsyncThunk } from "@reduxjs/toolkit";

// const FETCH_WEATHER = "FETCH_WEATHER"

// const fetchWeather = createAsyncThunk(
//   "FETCH_WEATHER",
//   async (city) => {
//     const response = await axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`)
//     return response.data;
//   }
// )

// export default fetchWeather;


// export function weatherRequest(city) {
//   const weatherData =  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`)
//   console.log(weatherData)
//   return {
//     type: FETCH_WEATHER,
//     payload: weatherData
//   };
// }

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// // const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d"
// export const api = createApi({
//   baseQuery: fetchBaseQuery({
//     url: "https://api.openweathermap.org/data/2.5",
//     prepareHeaders: (headers) => {
//       headers.set("Authorization", `Bearer ${1098d6d3f6137503dc9534bfc05cb19d}`);
//       return headers;
//     }
//   }),
//   endpoints: (builder) => ({
//     weather: builder.query({
//       query: (city) => `/weather?q=${city},us&limit=5&lang=en&units=imperial`,
//     })
//   })
// })

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   status: "uninitialized",
//   temperature: [],
//   error: null
// }

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city) => {
  const day = [3, 11]
  return fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`).then((res) => res.json().then((data) => data.list))
  // return response
})

console.log(fetchWeather)

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    temperature: [],
    pressure: [],
    humidity: [],
    status: null,
  },
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
      state.status = "loading"
    },
    [fetchWeather.fulfilled]: (state, {payload}) => {
      state.status = "success"
      state.temperature = payload.slice(0, 27).map((data) => data.main.temp)
      state.pressure = payload
      state.humidity = payload
  },
  [fetchWeather.rejected]: (state, action) => {
    state.status = "failed"
  }
}
})

console.log(weatherSlice)
export default weatherSlice.reducer