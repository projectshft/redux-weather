import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import promise from 'redux-promise';
import rootReducer from './reducers';
import App from './components/app';

const store = configureStore ({
  reducer: rootReducer,
  middleware: [promise],
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);