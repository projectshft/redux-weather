// import { createSlice } from "@reduxjs/toolkit";
import {weatherRequest} from "../actions/apiCall";



// const initialState = {
//   temperature: [],
//   pressure: [],
//   humidity: [],
//   loading: false, error: null
// } 

// export const weatherReducer = createSlice({
//   name: "weatherData", initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(weatherRequest.fulfilled, (state, action) => {
//       state.temperature.push(action.payload.main.temp)
//       state.pressure.push(action.payload.main.humidity);
//       state.humidity.push(action.payload.main.humidity);
//     })
//   }
// })


export function weatherReducer(state = {temperature: [], pressure: [], humidity: []}, action) {
  switch (action.type) {
    case "FETCH_WEATHER":
      return {...state, 
      temperature: action.payload.main.temp,
      pressure: action.payload.main.pressure,
      humidity: action.payload.main.humidity}
      default:
        return state;
  }
}



