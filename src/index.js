import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux"; 
import { composeWithDevTools } from "redux-devtools-extension";
import promise from "redux-promise";

import reducers from "./reducers";
import SearchNew from "./components/search-new";
import CitiesShow from "./components/cities-show";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(promise)));

ReactDOM.render(
  <Provider store={store}>
    <SearchNew />
    <CitiesShow />
  </Provider>,
  document.getElementById('root')
);


