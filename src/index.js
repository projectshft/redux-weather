import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import rootReducer from './reducers';

const createStoreWithPromiseMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithPromiseMiddleware(rootReducer)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


