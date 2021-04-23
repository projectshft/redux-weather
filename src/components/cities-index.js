import { useSelector } from "react-redux";
import { fetchCities } from "../actions";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import SearchValue from "./search-form.js";
import _ from 'lodash';


const CitiesIndex = () => {
  const cities = useSelector((state) => state.cities);

  function renderCities() {
    if (!_.isEmpty(cities)) {
      let resultTemp = cities.stats.map(t => t.temperature);
      let resultPressure = cities.stats.map(t => t.pressure);
      let resultHumidity = cities.stats.map(t => t.humidity);

      return (
        <tr >
          <td style={{ height: '100px' }} className="align-middle"><strong>{cities.name}</strong></td>
          <td><Sparklines data={cities.stats.map((city => city.temperature))} svgHeight={75}>
            <SparklinesLine color="blue" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines><p>{Math.round(_.mean(resultTemp))} F</p></td>
          <td><Sparklines data={cities.stats.map((city => city.pressure))} svgHeight={75}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines><p>{Math.round(_.mean(resultPressure))} hPa</p></td>
          <td><Sparklines data={cities.stats.map((city => city.humidity))} svgHeight={75}>
            <SparklinesLine color="red" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines><p>{Math.round(_.mean(resultHumidity))} %</p></td>
        </tr>
      )
    }
    return <tr>
      <td>n/a</td>
      <td>n/a</td>
      <td>n/a</td>
      <td>n/a</td>
    </tr>
  }

  return (
    <div className="col text-center">
      <SearchValue fetchCities={fetchCities} />
      <hr />
      <table className="table table-hover col-md-12">
        <thead>
          <tr>
            <th style={{ width: '200px' }}>City</th>
            <th style={{ width: '233px' }}>Temperature (F)</th>
            <th style={{ width: '233px' }}>Pressure (hPa)</th>
            <th style={{ width: '233px' }}>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{renderCities()}</tbody>
      </table>
    </div>
  )
}


export default CitiesIndex;

