import rootReducer from './reducers/index.js';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import promise from 'redux-promise';
import { Provider } from "react-redux";
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);