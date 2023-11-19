import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './Components/App'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root')
);
