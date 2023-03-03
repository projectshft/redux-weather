import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import store from "./configureStore";

export const cityThunk = createAsyncThunk(
  "weather/addWithThunk",
  async (search, { getState }) => {
    // console.log(getState().counter.value);
    return search + getState().weather;
  }
);

// Create Slice combine the actions, initialState, and reducer into 1 function
const citySlice = createSlice({
  name: "WeatherData",
  initialState: {
    value: [],
  },
  reducers: {
    // Action add
    add: (state, action) => {
      console.log(store.getState().Weather);
      state.value.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(cityThunk.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });
  }
});

// Export actions
export const { add } = citySlice.actions;

// Export reducer
export default citySlice.reducer;
