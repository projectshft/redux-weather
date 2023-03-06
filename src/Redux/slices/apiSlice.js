import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTemp, getPres, getHum, getHigh, getLow } from "../helperFunctions";

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
        tHi: [],
        tLo: [],
        humidity: [],
        hLo: [],
        hHi: [],
        pressure: [],
        pHi: [],
        pLo: [],
        status: null,
      },
      {
        name: null,
        temperature: [],
        tHi: [],
        tLo: [],
        humidity: [],
        hLo: [],
        hHi: [],
        pressure: [],
        pHi: [],
        pLo: [],
        status: null,
      },
      {
        name: null,
        temperature: [],
        tHi: [],
        tLo: [],
        humidity: [],
        hLo: [],
        hHi: [],
        pressure: [],
        pHi: [],
        pLo: [],
        status: null,
      },
      {
        name: null,
        temperature: [],
        tHi: [],
        tLo: [],
        humidity: [],
        hLo: [],
        hHi: [],
        pressure: [],
        pHi: [],
        pLo: [],
        status: null,
      },
      {
        name: null,
        temperature: [],
        tHi: [],
        tLo: [],
        humidity: [],
        hLo: [],
        hHi: [],
        pressure: [],
        pHi: [],
        pLo: [],
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
        state.locations[i].tHi = getHigh(getTemp(payload))  + '°F';
        state.locations[i].tLo = getLow(getTemp(payload))  + '°F';
        state.locations[i].pressure = getPres(payload);
        state.locations[i].pHi = getHigh(getPres(payload)) + "Pa";
        state.locations[i].pLo = getLow(getPres(payload)) + "Pa";
        state.locations[i].humidity = getHum(payload);
        state.locations[i].hHi = getHigh(getHum(payload)) + "%";
        state.locations[i].hLo = getLow(getHum(payload)) + "%";
        state.locations[i].status = payload.status;
        state.status = "success";

        state.length = state.length + 1;
      } else {
        state.length = 0;
        let i = state.length;
        console.log(payload);
        state.locations[i].name = payload.city.name;
        state.locations[i].temperature = getTemp(payload);
        state.locations[i].tHi = getHigh(getTemp(payload));
        state.locations[i].tLo = getLow(getTemp(payload));
        state.locations[i].pressure = getPres(payload); 
        state.locations[i].pHi = getHigh(getPres(payload));
        state.locations[i].pLo = getLow(getPres(payload));       
        state.locations[i].humidity = getHum(payload);
        state.locations[i].hHi = getHigh(getHum(payload));
        state.locations[i].hLo = getLow(getHum(payload));
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
  export const selectTemperatureHi = (state) =>
  state.weather.locations[0].tHi;
  export const selectTemperatureLo = (state) =>
  state.weather.locations[0].tLo;
export const selectPressure = (state) => state.weather.locations[0].pressure;
export const selectPrssureHi = (state) =>
  state.weather.locations[0].pHi;
  export const selectPressureLo = (state) =>
  state.weather.locations[0].pLo;
export const selectHumidity = (state) => state.weather.locations[0].humidity;
export const selectHumidityHi = (state) =>
  state.weather.locations[0].hHi;
  export const selectHumidityLo = (state) =>
  state.weather.locations[0].hLo;
export const selectNew = (state) =>
  state.weather.locations[0].previous.initialState;

export default weatherSlice.reducer;
