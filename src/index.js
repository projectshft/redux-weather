import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ReduxPromise from 'redux-promise';
import './index.css';
import App from './components/app';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = configureStore({ 
  reducer: reducers, 
  middleware: [ReduxPromise, thunk],
});

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root')
);