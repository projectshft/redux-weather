import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

//TODO: import reducers from reducers folder

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(/* pass in reducers*/)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

