import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddCity from './components/AddCity';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import index from './reducers/index';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(index)}>
      <AddCity />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

