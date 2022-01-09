import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import Reducer from './Reducer';


ReactDOM.render(
  <Provider store={createStore(Reducer, devToolsEnhancer())}>
    <App />
  </Provider>,
  document.getElementById('root')
);


