import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import temperatureReducer from './reducers/temperatureSlice';
const store = configureStore({
  reducer: {
    temperature: temperatureReducer,
    //  need to create these two files
    pressure: pressureReducer,
    humidity: humidityReducer
  }
})




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </Header>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);



