import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers'

const store = createStore(allReducers);


ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();









// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import temperatureReducer from './reducers/temperatureSlice';
// import pressureReducer from './reducers/pressureSlice';
// import humidityReducer from './reducers/humiditySlice';
// const store = configureStore({
//   reducer: {
//     temperature: temperatureReducer,
//     pressure: pressureReducer,
//     humidity: humidityReducer
//   }
// })


// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Header>
//         <Switch>
//           <Route path="/posts/new" component={PostsNew} />
//           <Route path="/posts/:id" component={PostsShow} />
//           <Route path="/" component={PostsIndex} />
//         </Switch>
//       </Header>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );



