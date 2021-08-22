//  code this just like temperatureSlice
import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
import {createSlice} from '@reduxjs/toolkit';

export const humiditySlice = createSlice({
  name: 'humidity',
  initialState: {
    humid: 'humidity'
  },
  reducers: {
    addHumidity: (state, action) => {
      //  could possibly be action.payload below
      state.humid = action.humidity;
    }
  } 
});

//  addTemperature is the action you will use.  Need to dispatch the action
export const {addHumidity} = humiditySlice.actions;
export default humiditySlice.reducer;