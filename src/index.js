import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import './index.css';
import CitiesIndex from './components/cities-index';
import 'bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <CitiesIndex />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
