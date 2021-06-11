import React from "react";
import ForecastRow from "./ForecastRow";
import { useSelector } from "react-redux";

export default function ForecastTable() {
  const forecast = useSelector((state) => state);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" style={{ width: "25%" }}>
            City
          </th>
          <th scope="col" style={{ width: "25%" }}>
            Temperature (F)
          </th>
          <th scope="col" style={{ width: "25%" }}>
            Pressure (hPa)
          </th>
          <th scope="col" style={{ width: "25%" }}>
            Humidity (%)
          </th>
        </tr>
      </thead>
      <tbody>
        {forecast
          .map((forecastData) => (
            <ForecastRow key={forecastData.id} cityData={forecastData} />
          ))
          .reverse()}
      </tbody>
    </table>
  );
}
