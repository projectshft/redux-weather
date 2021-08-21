import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';


// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  // <Provider store={createStore(cityReducer)}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </Provider>
  document.getElementById('root')
);