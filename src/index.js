import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import reportWebVitals from './reportWebVitals';
import promise from "redux-promise";
import {createStore, applyMiddleware} from 'redux'


import WeatherIndex from './components/weather-index'
import SearchBar from './components/search_bar.js'
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <SearchBar/>
    <WeatherIndex/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
