import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import WeatherStore from './Store';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducer/weather-reducer';




ReactDOM.render(
  <Provider store={WeatherStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// const createStoreWithMiddleware = applyMiddleware(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(rootReducer)}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

