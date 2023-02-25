import React from "react";
import { useSelector } from "react-redux";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";
import _ from "lodash";

const Table = () => {
  const cities = useSelector(state => state.weather.cities);
  console.log(cities);

  //TODO: create a function to map through "state array" so we can show a new city object when it is added
  function renderCities() {
    if (cities.length > 0) {
      return cities.map((city) => (
        <tr>
          <th scope="row" className="align-middle">
            {city.name}
          </th>
          <td>
            <Sparklines data={city.temp} width={100} height={60} margin={5}>
              <SparklinesLine color="#ffc61a" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <p className="text-center">{Math.round(_.mean(city.temp))} F</p>
          </td>
          <td>
            <Sparklines
              data={city.pressure}
              width={100}
              height={65}
              margin={5}
            >
              <SparklinesLine color="#00802b" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <p className="text-center">
              {Math.round(_.mean(city.pressure))} hPa
            </p>
          </td>
          <td>
            <Sparklines
              data={city.humidity}
              width={100}
              height={70}
              margin={5}
            >
              <SparklinesLine color="#253e56" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <p className="text-center">
              {Math.round(_.mean(city.humidity))} %
            </p>
          </td>
        </tr>
      ));
    }
    return <div></div>
  }

  //TODO: refactor below to just call the function above
  return (
    <div>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (F)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{renderCities()}</tbody>
      </table>
    </div>
  );
};

/*
function mapStateToProp(state) {
  return {
    cities: {
      name: state.weather.cities.name,
      temp: state.weather.cities.temp,
      pressure: state.weather.cities.pressure,
      humidity: state.weather.cities.humidity
    }
  }
}
*/

export default Table;

//export default connect(mapStateToProp)(Table);
