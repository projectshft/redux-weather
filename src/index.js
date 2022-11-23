import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import promise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
console.log(reducers)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

