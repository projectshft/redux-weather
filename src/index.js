import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import promise from 'redux-promise';

import Header from './components/header';
import reducers from './reducers';
import './index.css';

const root = createRoot(document.getElementById('root'));
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </Provider>
);
