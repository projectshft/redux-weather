import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import weatherReducer from "../slices/apiSlice";
import weatherReducer from "../slices/testSlice";

const reducer = combineReducers({
  weather: weatherReducer,
})

const store = configureStore({
  reducer: reducer
})

export default store
// const store = configureStore({
//   reducer: {
//     weather: weatherReducer,
//   }
// })

// export default store;