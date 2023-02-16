import thunk from "thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from '../reducer/weatherReducer';

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

export default store;