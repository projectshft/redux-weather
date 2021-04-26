import "bootstrap/dist/css/bootstrap.css"

import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose} from "redux";
import { Provider } from "react-redux"

import reducers from "./reducers"
import Heading from "./components/heading"
import SearchComponent from "./components/search"
import {CityRow} from "./components/city-row"


// sets up redux dev tools in chrome
const composeEnhancers = compose(
  typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : f => f,
)

// creates the store with redux dev tools in the browser
const store = createStore(reducers, composeEnhancers)

ReactDOM.render (
   <Provider store={store}>
     <Heading/>
     <SearchComponent/>
     <CityRow />
   </Provider>,
   document.getElementById("root")
)
