import "bootstrap/dist/css/bootstrap.css";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
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
   <Header/>
 </Provider>,
  document.getElementById('root')
);

