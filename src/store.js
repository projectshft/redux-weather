import React from 'react'
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import forecastSlice from './features/forecastSlice'
import querySlice from './features/querySlice'



const middleware = applyMiddleware(thunk);

const store = configureStore({
  reducer: {
    query: querySlice,
    forecast: forecastSlice,
  },
});

export default store
