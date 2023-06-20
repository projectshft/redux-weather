import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import promise from 'redux-promise';
import { configureStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'; // Import your root reducer

const createStoreWithMiddleware = applyMiddleware(promise)(configureStore);
const store = createStoreWithMiddleware(rootReducer); // Create the Redux store with the root reducer

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();