import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import reducers from './reducers'


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

