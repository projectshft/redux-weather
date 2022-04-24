// import "bootstrap/dist/css/bootstrap.css";

// import React from "react";
// import ReactDOM from "react-dom";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import promise from "redux-promise";

// import Header from "./components/header";
// // import reducers from "./reducers";
// import ForecastIndex from "./components/forecast-index";

// // const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// ReactDOM.render(
//   <Provider>
//   {/* // <Provider store={createStoreWithMiddleware(reducers)}> */}
//     <BrowserRouter>
//       <Header>
//         <Switch>
//           <Route path="/" component={ForecastIndex} />
//         </Switch>
//       </Header>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );

import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";


import Header from "./components/header";
// import reducers from "./reducers";
import ForecastIndex from './components/forecast-index';

ReactDOM.render(
   <Provider store={createStore}>

      <Header>
        {ForecastIndex}
      </Header>

  </Provider>,
  document.getElementById('root')
);