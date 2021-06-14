import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

import CityWeatherData from "./components";
import App from "./App";
import reducers from "./reducers";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(promise))
);

ReactDOM.render(
  <Provider store={store}>
    <App>
      <CityWeatherData />
    </App>
  </Provider>,
  document.getElementById("root")
);
