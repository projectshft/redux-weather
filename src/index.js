import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css';
import promise from 'redux-promise'


import App from './App';
import Reducer from './Reducer';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducer, composeWithDevTools())}>
    <App />
  </Provider>,
  document.getElementById('root')
);


