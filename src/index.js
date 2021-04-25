import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import MainPage from './components/MainPage';
import reducers from './reducers';
import TemperatureComparisonPage from "./components/TemperatureComparisonPage";
import {fetchForecast} from './actions/index';
import {changeDefaultCity} from './actions/index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//Checks to see if there is any default city and fetches the weather forecast for that city if so
const loadDefaultCityInfo = () => {
  if(localStorage.getItem('defaultCity')) {
    store.dispatch(fetchForecast(localStorage.getItem('defaultCity')))
    store.dispatch(changeDefaultCity(localStorage.getItem('defaultCity')))
  }
}

const store = createStoreWithMiddleware(reducers);
loadDefaultCityInfo();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/temperature" component={TemperatureComparisonPage} />
          <Route path="/" component={MainPage}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

