import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise';

import App from './App';
import { weatherReducer } from './components/reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(weatherReducer)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);