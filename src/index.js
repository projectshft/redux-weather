import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import promise from 'redux-promise';
import './index.css';
import ForecastsIndex from './components/forecasts-index';
import Header from './components/header';
import reducers from './reducers';
import reportWebVitals from './reportWebVitals';

export const configureStoreWithMiddleware =
  applyMiddleware(promise)(configureStore);
// export const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store={configureStoreWithMiddleware({ reducer: reducers })}>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" Component={App} /> */}
        <Route path="/" Component={ForecastsIndex} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
