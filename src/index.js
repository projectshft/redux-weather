import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import Reducer from './Reducer';


ReactDOM.render(
  <Provider store={createStore(Reducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);


