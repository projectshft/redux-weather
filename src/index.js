import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import promise from 'redux-promise';
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promise)(configureStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware({ reducer: reducers })}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
