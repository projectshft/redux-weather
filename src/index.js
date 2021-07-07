import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from "redux";
import Forecast from "./components/forecast";
import NewCity from './components/newCity';
import reducers from "./reducers";
import promise from "redux-promise";

// 5-day weather api + key:
// "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=67dd541f698260dd8fa2d7b872c650a3",

// function createStoreWithMiddleware to dispatch the action FETCH_FORECAST when the promise completes
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// put the loop here as a seperate component

ReactDOM.render(
  <div>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
        <div className="jumbotron text-center">
          <div className="container">
            <br />
            <h1 className="jumbotron-heading">Redux Weather App</h1>
          </div>
        </div>
        <br />

          <NewCity />

        <div className="container">
          <div className="row">
            <div className="col-sm" align="center">
              <strong>City</strong>
            </div>
            <div className="col-sm" align="center">
              <strong>Temperature</strong>
            </div>
            <div className="col-sm" align="center">
              <strong>Pressure</strong>
            </div>
            <div className="col-sm" align="center">
              <strong>Humidity</strong>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <Forecast />
    </Provider>
  </div>
 ,
  document.getElementById("root")
);


