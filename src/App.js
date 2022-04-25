import React from 'react';
import Weather from './components/weather-table';
import Search from './components/search-bar';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  return (
    <div>
      <br/>
      <h1 className='text-center'>Redux Weather</h1>
      <br/>
      <Search />
      <br/>
      <Weather />
    </div>
  )
}

export default App;