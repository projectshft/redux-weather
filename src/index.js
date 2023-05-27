import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import SearchBar from './components/search-bar';
import ForecastList from './components/forecast-list';


const App = () => {
  return (
    <div className="container">
      This is the App component. Will we even need this? No I don't think we will.
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Header>
      <SearchBar />
      <ForecastList />
      
      <App />
    </Header>
  </React.StrictMode>,
  document.getElementById('root')
);
