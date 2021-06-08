import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import CityWeatherIndex from "./components";
import App from "./App";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(promise))
);

ReactDOM.render(
  <Provider store={store}>
    {/* how to render initial table */}
    <App>
      <CityWeatherIndex />
    </App>
  </Provider>,
  document.getElementById("root")
);
