import React from 'react';
import Weather from './components/weather-table';
import Search from './components/search-bar';

const App = () => {
  return (
    <div>
      <Search />
      <Weather />
    </div>
  )
}

export default App;