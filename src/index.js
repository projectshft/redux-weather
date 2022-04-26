import "bootstrap/dist/css/bootstrap.css";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Forecast from './components/forecast';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import  forecastReducer  from './reducers/index'

const store = configureStore({
  reducer: {
    addForecast: forecastReducer
  }
})


ReactDOM.render(
 <Provider store={store}>
   <Forecast/>
 </Provider>,
  document.getElementById('root')
);

