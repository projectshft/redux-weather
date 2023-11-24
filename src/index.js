import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import promise from 'redux-promise';
import { store } from './store';
// eslint-disable-next-line import/no-extraneous-dependencies
import forecastSlice from './reducers/forecastSlice';
// import thunk from 'redux-thunk';
import './index.css';
import ForecastsIndex from './components/forecasts-index';
import Header from './components/header';
// import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';

// export const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// export const store = configureStore({
//   reducer: rootReducer,
//   initialState: [{ city: '', temp: [], pressure: [], humidity: [] }],
//   middleware: [promise],
// });

// export const store = configureStore({
//   middleware: [applyMiddleware(promise)],
//   reducer: rootReducers,
// });

// export const store = configureStore({
//   reducer: forecastSlice,
//   initialState: [
//     { city: '', forecastData: { temp: [], pressure: [], humidity: [] } },
//   ],
//   middleware: [promise],
// });

ReactDOM.render(
  //  <Provider store={createStoreWithMiddleware(rootReducers)}>

  // <Provider store={configureStoreWithMiddleware({ reducer: rootReducer })}>
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
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
