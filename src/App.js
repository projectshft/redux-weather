import React from 'react';
import SearchBar from './components/search-bar.js';
import ForecastDisplay from './components/forecast-display.js';

const App = () => {
  const wait = null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md" />
        <div className="col-md-10">
          <SearchBar />
          <ForecastDisplay />
        </div>
        <div className="col-md" />
      </div>
    </div>
  );
};

export default App;
