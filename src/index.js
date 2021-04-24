import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

//Render with promise middleware and Redux Chrome tools extension

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </ Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
