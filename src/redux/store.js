import React from 'react'
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from './reducers';

const middlewares = [thunk];

const store = configureStore({
  middleware: [ applyMiddleware(thunk) ],  
  reducer: {
    weather: weatherReducer,   
  },
});

export default store
