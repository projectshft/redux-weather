import React from "react";
import "./WeatherTable.css";
import WeatherRow from "./WeatherRow";

function WeatherTable(props) {
  return (
    <React.Fragment>
      <div className="container weather-table-container">
        <table className="table table-borderless">
          <thead className="thead-light">
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
              <th className="table-heading" scope="col"></th>
            </tr>
          </thead>
          <WeatherRow />
        </table>
        <small className="average-line-statement">
          Dashed lines represent averages
        </small>
      </div>
    </React.Fragment>
  );
}

export default WeatherTable;
