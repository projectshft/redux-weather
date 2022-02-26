import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherTable from "./components/WeatherTable";
import Footer from "./components/Footer";
import MapPopUp from "./components/MapPopUp";

function App() {
  const [mapPopup, setMapPopup] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <h1 className="text-heading">weather graph</h1>
      <SearchBar />
      <p className="map-text" onClick={() => setMapPopup(true)}>
        Map me!
      </p>
      <MapPopUp trigger={mapPopup} setTrigger={setMapPopup} />
      <WeatherTable />
      <Footer />
    </React.Fragment>
  );
}

export default App;
