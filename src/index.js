import "bootstrap/dist/css/bootstrap.css"
import React from "react";
import ReactDOM from "react-dom";
import { createStore,applyMiddleware } from "redux";
import promise from "redux-promise"
//provider gives application access to redux store
import { Provider } from "react-redux";

import Header from "./components/header.js"
import App from "./App";
import reducers from "./reducers"

//making sure actions wait for promise to be fulfulled before we pass the data to the reducer
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Header>
      <App component={App}/>
    </Header>
  </Provider>,
  document.getElementById("root")
);