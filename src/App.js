import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherTable from "./components/WeatherTable";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <WeatherTable />
      <Footer />
    </React.Fragment>
  );
}

export default App;
