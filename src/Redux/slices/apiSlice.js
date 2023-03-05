import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTemp, getPres, getHum } from "../helperFunctions";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    return (
      city &&
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&limit=5&lang=en&units=imperial&appid=1098d6d3f6137503dc9534bfc05cb19d`
      ).then((res) => res.json().then((data) => data))
    );
  }
);
console.log(fetchWeather);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    locations: [
      {
        name: null,
        temperature: [],
        humidity: [],
        pressure: [],
        status: null,
      },
      {
        name: null,
        temperature: [],
        humidity: [],
        pressure: [],
        status: null,
      },
      {
        name: null,
        temperature: [],
        humidity: [],
        pressure: [],
        status: null,
      },
      {
        name: null,
        temperature: [],
        humidity: [],
        pressure: [],
        status: null,
      },
      {
        name: null,
        temperature: [],
        humidity: [],
        pressure: [],
        status: null,
      },
    ],
    length: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchWeather.fulfilled]: (state, { payload }) => {
      state.status = "success";

      if (state.length <= 4) {
        let i = state.length;
        console.log(payload);
        state.locations[i].name = payload.city.name;
        state.locations[i].temperature = getTemp(payload);
        state.locations[i].pressure = getPres(payload);
        state.locations[i].humidity = getHum(payload);
        state.locations[i].status = payload.status;
        state.status = "success";

        state.length = state.length + 1;
      } else {
        state.length = 0;
        let i = state.length;
        console.log(payload);
        state.locations[i].name = payload.city.name;
        state.locations[i].temperature = getTemp(payload);
        state.locations[i].pressure = getPres(payload);
        state.locations[i].humidity = getHum(payload);
        state.locations[i].status = payload.status;
        state.status = "success";
      }
    },
    [fetchWeather.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectCity = (state) => state.weather.locations[0].name;
export const selectTemperature = (state) =>
  state.weather.locations[0].temperature;
export const selectPressure = (state) => state.weather.locations[0].pressure;
export const selectHumidity = (state) => state.weather.locations[0].humidity;
export const selectNew = (state) =>
  state.weather.locations[0].previous.initialState;

export default weatherSlice.reducer;
