import { useState } from "react";
import { useSelector } from "react-redux";
import { Sparklines } from "react-sparklines";
import store from "../store/store";

const WeatherTableData = () => {
  const cityInfo = useSelector((state) => state.forecasts)

  console.log(cityInfo);

  return (
  <>
    { cityInfo ?
      <tr className="text-center">
        <td>{cityInfo.city}</td>
          <td>Temperature (K)</td>
          <td>Pressure (hPa)</td>
          <td>Humidity (%)</td>
      </tr>
      : <tr></tr>
    }
  </>
  )
}

export default WeatherTableData