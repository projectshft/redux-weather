import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import reducers from "./reducers/";

import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const store = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <App />
  </Provider>,

  document.getElementById("root")
);
