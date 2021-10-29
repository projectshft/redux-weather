import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import Header from "./components/header";
import CitiesIndex from "./components/cities-index";
import CitiesTable from "./components/cities-table";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Header>
        <Switch>
          <Route path="/" component={CitiesIndex} />
        </Switch>
      </Header>
      <CitiesTable></CitiesTable>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


