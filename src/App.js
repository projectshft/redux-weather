import React from "react";
//components
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";
//style
import GlobalStyle from "./gloablStyle";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Search />
      <WeatherData />
    </div>
  );
};

export default App;
