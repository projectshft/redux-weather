import React from "react";
import ForecastRow from "./ForecastRow";

export default function ForecastTable() {
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
        <ForecastRow />
      </tbody>
    </table>
  );
}
