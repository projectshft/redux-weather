import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import promise from "redux-promise";

const store = configureStore({
  reducer: {rootReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(promise),
})

export default store;
