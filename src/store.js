import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import forecastSlice from './reducers/forecastSlice';

// default middleware with serializableCheck set to false
const nonSerializedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

// configured Store variable to handle state of store for App
export const store = configureStore({
  reducer: { forecasts: forecastSlice },
  initialState: [
    { city: '', forecastData: { temp: [], pressure: [], humidity: [] } },
  ],
  middleware: nonSerializedMiddleware,
});
