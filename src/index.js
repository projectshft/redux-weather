import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import ChartsIndex from "./components/posts-index";
import Header from "./components/header";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Header>
        <Switch>
          <Route path='/' component={ChartsIndex} />
        </Switch>
      </Header>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);