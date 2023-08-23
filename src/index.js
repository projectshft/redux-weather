import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import promise from 'redux-promise';

import Header from './containers/Header';
import SearchBar from './components/SearchBar';
// import reducers from "./reducers";

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <>
    <Header />
    <SearchBar />
  </>,
  document.getElementById('root')
);