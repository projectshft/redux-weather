import React from "react";
import ForecastCurrent from "./forecasts-current";
import CityForecastsList from "./forecasts-list";

const App = () => {
  return (
    <div>
      <ForecastCurrent />
      <CityForecastsList />
    </div>
  )
};

export default App;