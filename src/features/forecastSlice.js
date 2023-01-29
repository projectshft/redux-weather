import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
//action
export const fetchForecastAction = createAsyncThunk(
  "forecast/fetch",
  async(payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${payload}&appid=${API_KEY}&units=imperial`);

      const cityFiveDayData = {
        city: data.city.name,
        temperature: data.list.map(e => {
          return e.main.temp;
        }),
        pressure: data.list.map(e => {
          return e.main.pressure;
        }),
        humidity: data.list.map(e => {
          return e.main.humidity;
        })
      }
      return cityFiveDayData;
    } catch (error){
      if(!error?.response){
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
  }
);



const fiveDayForecastSlice = createSlice({
  name: "forecasts",
  initialState: {},
  reducers: {
    // addForecast: {
    //   reducer: (state, action) => {
    //     state.push(action.payload)
    //   }
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchForecastAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchForecastAction.fulfilled, (state, action) => {
      state.forecasts = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchForecastAction.rejected, (state, action) => {
      state.loading = false;
      state.forecasts = undefined;
      state.error = action?.payload;
    })
  },
});




export default fiveDayForecastSlice.reducer