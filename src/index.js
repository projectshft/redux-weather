import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import reducers from "./reducers/";

import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

//code to allow redux tool along with the promise/middleware functions
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(promise)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
