import './App.css';
import React from 'react';
//import FetchWeather from './FetchWeather'; 
import { Provider } from 'react-redux';
import Weather from './components/Weather';
import WeatherStore from './redux/Store'; 


const App = () => {
  return (
    <Provider store={WeatherStore}>
      <div>
        <Weather />
      </div>
    </Provider>
  )
}

export default App; 