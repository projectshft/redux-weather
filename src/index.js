import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk'

import App from './App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
