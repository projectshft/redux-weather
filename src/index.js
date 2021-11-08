import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import promise from "redux-promise";

import Header from "./components/header";
import SearchBar from "./components/search-bar";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <React.StrictMode>
      <Header>
      <SearchBar />
      </Header>
    </React.StrictMode>
   </Provider>,
  document.getElementById('root')
);
