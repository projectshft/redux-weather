// We will import each of the reducer functions here
// We will also import thunk
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import citySearchReducer from "./city";

// We are importing out redux folder into this index.js file. We will combine with combineReducers and place them in store. Then, we will default store to be used in our main App.js component.

const rootReducer = combineReducers({
  citySearchReducer: citySearchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
// store.subscribe(() => console.log(store.getState()));
export default store;
