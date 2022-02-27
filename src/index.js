import "bootstrap/dist/css/bootstrap.css";
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import promise from "redux-promise";
import weatherReducer from "./Reducers/Weather-Data";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router  } from "react-router-dom";

import Header from './Components/Header';
import Search from './Components/Search';
import Table from './Components/Table';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(weatherReducer)}>
    <Router>
      <Header />
      <Search />
      <Table />
    </Router>
  </Provider>,
  document.getElementById("root")
)
