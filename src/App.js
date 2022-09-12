import React from 'react'
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header>
        <SearchBar />
        <WeatherDisplay />
      </Header>
    </div>
  );
};

export default App;