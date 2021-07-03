import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from "redux";
import Header from "./components/header"
import Forecast from "./components/forecast";
import reducers from "./reducers"
import promise from "redux-promise"

// 5-day weather api + key:
// "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=67dd541f698260dd8fa2d7b872c650a3",

// function createStoreWithMiddleware to dispatch the action FETCH_FORECAST when the promise completes
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// put the loop here as a seperate component

ReactDOM.render(
  <Header>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Forecast />
    </Provider>
  </Header>,
  document.getElementById("root")
);


