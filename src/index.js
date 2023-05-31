import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import promise from "redux-promise";
import { configureStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';


const createStoreWithMiddleware = applyMiddleware(promise)(configureStore);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default rootReducer;