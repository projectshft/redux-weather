import "bootstrap/dist/css/bootstrap.css"
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Header from "./components/header.js"
import App from "./App";
import reducers from "./reducers"


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Header>
      <App component={App}/>
    </Header>
  </Provider>,
  document.getElementById("root")
);