// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// proprietary api key for api calls
const apiKey = 'e762b32d14efd802e7f067526402633f';

// initialState variable
const initialState = {
  forecasts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

/**
 * @param city
 * @param apiKey
 * @param thunkApi
 * thunk variable to make api call with @city and @apiKey inputs
 * returns a promise with data or error on failed call
 */
export const fetchFiveDayForecast = createAsyncThunk(
  'reducers/fetchFiveDayForecast',
  async (city, thunkApi) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
      );
      return response;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return thunkApi.rejectWithValue({ err: 'Error with forecast query' });
    }
  }
);

//  slice variable with builder function to add cases for processing returned Promise from api call. Fulfilled promise changes state with returned data from Promise
const forecastSlice = createSlice({
  name: 'forecasts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiveDayForecast.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFiveDayForecast.fulfilled, (state, action) => {
        const tempArray = action.payload.data.list.map(
          (item) => item.main.temp
        );
        const pressureArray = action.payload.data.list.map(
          (item) => item.main.pressure
        );
        const humidityArray = action.payload.data.list.map(
          (item) => item.main.humidity
        );
        const searchReturnData = {
          city: action.payload.data.city,
          temp: tempArray,
          pressure: pressureArray,
          humidity: humidityArray,
        };
        state.forecasts = [searchReturnData];
        state.succeeded = true;
        state.error = undefined;
      })
      .addCase(fetchFiveDayForecast.rejected, (state, action) => {
        state.data = undefined;
        state.failed = true;
        state.error = action?.payload;
      });
  },
});

export default forecastSlice.reducer;
