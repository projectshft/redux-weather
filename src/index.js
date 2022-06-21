import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { Provider }  from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { forecastSlice } from './features/forecast/forecastSlice';



const store = configureStore({
  reducer: forecastSlice.reducer
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

