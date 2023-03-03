// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getTemp, getPres, getHum } from "../helperFunctions";


// export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city) => {
//   return city && fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`).then((res) => res.json().then((data) => data))
// })

// export const weatherSlice = createSlice({
//   name: "weather",
//   initialState: {
//     temperature: [],
//     pressure: [],
//     humidity: [],
//     status: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [fetchWeather.pending]: (state, action) => {
//       state.status = "loading"
//     },
//     [fetchWeather.fulfilled]: (state, {payload}) => {
//       state.status = "success"
//       state.city = payload.city.name
//       state.temperature = getTemp(payload)
//       state.pressure = getPres(payload)
//       state.humidity = getHum(payload)
//   },
//   [fetchWeather.rejected]: (state, action) => {
//     state.status = "failed"
//   }
// }
// })


// export const selectCity = state => state.weather.city
// export const selectTemperature = state => state.weather.temperature
// export const selectPressure = state => state.weather.pressure;
// export const selectHumidity = state => state.weather.humidity;
// export const selectNew = state => state.previous.initialState;

// export default weatherSlice.reducer
