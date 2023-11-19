import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const apiKey = process.env.REACT_APP_REDUX_WEATHER_KEY;

// Calculate the average of the array
const calcAverage = (array) => {
  if (array.length === 0) return 0;
  const sum = array.reduce((acc, value) => acc + value, 0);
  const average = sum / array.length
  return Math.round(average)
}

// Fetch weather data from API
export const fetchWeatherData = createAsyncThunk(
  'weather/fetchData',
  async (city, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`);
      return data
    } catch (error) {
      if (!error?.response) {
        throw error
      }
      return thunkAPI.rejectWithValue({ error: 'An error occured' })
    }
  });

// Declaring initial state for weather slice 
// Using a searches array to store the history of user searches
const initialState = {
  loading: false,
  searches: [],
  error: undefined,
};

// Created slice of the Redux store for weather data
// Tells the store what to do with the data when its returned 
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {

        // Extracting the needed values from API and assigning variables
        const tempData = action.payload.list.map(item => item.main.temp);
        const pressureData = action.payload.list.map(item => item.main.pressure);
        const humidityData = action.payload.list.map(item => item.main.humidity);
        // Creating a new object based on search with needed values and creating the average
        const newSearch = {
          city: action.payload.city,
          temperature: tempData,
          pressure: pressureData,
          humidity: humidityData,
          avgTemp: calcAverage(tempData),
          avgPressure: calcAverage(pressureData),
          avgHumidity: calcAverage(humidityData),
        };
        state.searches = [...state.searches, newSearch]
        state.loading = false;
        state.error = undefined;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.data = undefined;
        state.error = action?.payload;
      })
  }
});

export default weatherSlice.reducer;


