import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from './app/store'
import App from './App';

// import reducers from "./reducers";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
     </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

