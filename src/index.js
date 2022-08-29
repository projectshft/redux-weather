import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
// import { store } from './app/store'
import promise from 'redux-promise'
import App from './App';

import reducers from "./reducers";
import rootReducer from './reducers';

// const store = configureStore({
//   middleware: {promise,},
//   reducer: rootReducer,
// })
const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App />
     </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

