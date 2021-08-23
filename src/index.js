import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import promise from 'redux-promise';

import App from './App.js';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware (promise) (createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
     <App>
    </App>
  </Provider>,
  document.getElementById('root')
);


