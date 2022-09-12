import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension'; 
import rootReducer from "./reducers";

//setting up store with middleware and redux dev tools viewers
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(promise),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);