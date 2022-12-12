import "bootstrap/dist/css/bootstrap.css"
import React from "react";
import ReactDOM from "react-dom";
import { createStore,applyMiddleware } from "redux";
import promise from "redux-promise"
import { Provider } from "react-redux";

import Header from "./components/header.js"
import App from "./App";
import reducers from "./reducers"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Header>
      <App component={App}/>
    </Header>
  </Provider>,
  document.getElementById("root")
);