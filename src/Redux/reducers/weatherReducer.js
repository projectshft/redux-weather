import { createSlice } from "@reduxjs/toolkit";
// import { FETCH_WEATHER } from "../actions/apiCall";

export const weatherReducer = createSlice({
  name: "weather",
  initialState: {
    temperature: [],
    // pressure: {},
    // humidity: {},
  },
  reducers: {
    temperature: (state) => {
      state.temperature = state.action.payload.data.main[0];
    }
  }
})

// export function weatherReducer(state = {temperature: []}, action) {
//   switch (action.type) {
//     case "FETCH_WEATHER":
//       return {...state, temperature: action.payload}
//       default:
//         return state;
//   }
// }



