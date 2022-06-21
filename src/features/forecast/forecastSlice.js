import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  forecasts: [],
  status: 'idle', //'idle | 'loading' | 'succeded' | 'failed'
  error: null
}

export const fetchForecast = createAsyncThunk('forecasts/fetchForecast', async (city, thunkAPI) => {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7458d8be2ead97f146f0eca0e76fec3b`)
    .then((data) => data.json());
    return response;
  } catch (err) {
    return err.message;
  }
})

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    fetchForecast: (state, action) => {
      state.forecasts.push(action.payload)
    }
  },

  extraReducers: {
   
      [fetchForecast.pending]: (state, action) => {
        state.status = 'loading'
      },

      [fetchForecast.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        const cityName = action.payload.city.name;       
          const fiveDayArray = [];
          for (let i = 3; i < action.payload.list.length; i += 8) { return [...fiveDayArray, { temp: action.payload.list[i].main.temp, pressure: action.payload.list[i].main.pressure, humidity: action.payload.list[i].main.humidity } ] 
            };
          state.forecasts = [...state.forecasts, {city: cityName, fiveDayArray}];
          
        },
      
      [fetchForecast.rejected ]:(state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      }
  }
})

export const selectForecasts = (state) => state.forecasts;
const { actions, reducer } = forecastSlice;
