import React from "react";
import "./WeatherTable.css";
import WeatherRow from "./WeatherRow";

function WeatherTable(props) {
  return (
    <div className="container">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th className="table-heading" scope="col">
              City
            </th>
            <th className="table-heading" scope="col">
              Temperature (F)
            </th>
            <th className="table-heading" scope="col">
              Pressure (hPa)
            </th>
            <th className="table-heading" scope="col">
              Humidity (%)
            </th>
          </tr>
        </thead>
        <WeatherRow />
      </table>
      <small className="average-line-statement">
        Dashed lines represent averages
      </small>
    </div>
  );
}

export default WeatherTable;
