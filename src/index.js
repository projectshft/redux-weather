import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

//need a store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
