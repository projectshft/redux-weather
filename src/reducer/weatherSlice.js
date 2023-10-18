import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

// defining initial state. This will be used in the Slice below
const initialState = {
  currentCity: null,
  cities: [],
  weather: [],
  error: ''
}

  // API call using coordinates stored in state.cities, referenced from the city name stored in state.currentCity
export const fetchForecast = createAsyncThunk('forecast/fetchForecast', async (_, { getState }) => {
    const state = getState();
    const currentCity = state.currentCity;
    const activeCity = state.cities.find((city) => city.name === currentCity);
    const lat = activeCity.lat;
    const lon = activeCity.lon;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
    
    try {
      const response = await axios.get(url)
      // return the array of weather items from the api response
      return(response.data.list)
    }
    catch (err) {
      return err.message;
    }})
  
    // API call to find the coordinates based on the city name that the user inputs. The city is stored in currentCity, but after the call, currentCity will be replaced with the city name that the API returns, because it will have correct capitalization and spelling.
export const fetchCoordinates = createAsyncThunk('coordinates/fetchCoordinates', async (_, { getState }) => {
  const state = getState();
  const city = state.currentCity;
  try {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    const data = await axios.get(url)
    const lat = data.data[0].lat;
    const lon = data.data[0].lon;
    const name = data.data[0].name;
    return ({name: name, lat: lat, lon: lon})
  }
  catch (err) {
    console.log(err);
  }
})

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addCity : (state, action) => {state.cities.push(action.payload)}, 
    setCurrentCity: (state, action) => {state.currentCity = action.payload},
    addWeather: (state, action) => {state.weather.push(action.payload)},
    addErrorMessage: (state, action) => {state.error = action.payload}

  }
})

export const { addCity, setCurrentCity, addWeather, addErrorMessage } = weatherSlice.actions

export default weatherSlice.reducer