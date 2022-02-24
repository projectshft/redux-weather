import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherTable from "./components/WeatherTable";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <WeatherTable />
    </React.Fragment>
  );
}

export default App;
