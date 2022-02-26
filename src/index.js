import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Search from './Components/Search';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router  } from "react-router-dom";
import './index.css';
import promise from "redux-promise";
import weatherReducer from "./Reducers/Weather-Reducer";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(weatherReducer)}>
    <Router>
      <Header />
      <Search />
    </Router>
  </Provider>,
  document.getElementById("root")
)
