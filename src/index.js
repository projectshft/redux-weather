import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import { Provider } from "react-redux";
// import { legacy_createStore as createStore, applyMiddleware } from "redux"; 
// import promise from "redux-promise";
// import reducers from "./reducers";
import SearchNew from "./components/search-new";

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
    <SearchNew />,

  // </Provider>,
 
   
 
  document.getElementById('root')
);

