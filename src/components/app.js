import React from "react";
import ForecastCurrent from "./forecasts-current";
import ForecastIndex from "./forecasts-index";

const App = () => {
  return (
    <div>
      <ForecastCurrent />
      <ForecastIndex />
    </div>
  )
};

export default App;