import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import promise from "redux-promise";
import ForecastsNew from "./components/forecasts-new";
import ForecastsIndex from "./components/forecasts-index";

import './index.css';
import reducers from "./reducers";

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore)

ReactDOM.render(
<Provider store={createStoreWithMiddleWare(reducers)}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={(
        <>
        <ForecastsNew />
        <ForecastsIndex />
        </>
      )} />
    </Routes>
  </BrowserRouter>  
</Provider>,
  document.getElementById('root')
);
