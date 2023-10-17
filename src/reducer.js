import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: [],
  reducers: {
    addCity: (state, action) => {
      state = [action.payload, ...state]
    }
  }
});

// Action creators are generated for each case reducer function
export const { addCity } = weatherSlice.actions;

export default weatherSlice.reducer;
