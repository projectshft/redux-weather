import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import promise from "redux-promise";

import './index.css';
// import ForecastsIndex from "./components/forecasts-index";
// import ForecastsNew from "./components/forecasts-new";
import reducers from "./reducers";
import App from "./components/app";
import rootReducer from "./reducers";

// const createStoreWithMiddleWare = applyMiddleware(promise)(createStore)
const store = configureStore({
  reducer: rootReducer,
  middleware: [promise],
})

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={App} />
      {/* <Route path="/" element={(
        <>
        <ForecastsNew />
        <ForecastsIndex />
        </>
      )} /> */}
    </Routes>
  </BrowserRouter>  
</Provider>,
  document.getElementById('root')
);
