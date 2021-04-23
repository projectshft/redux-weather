import { useSelector } from "react-redux";
import { fetchCities } from "../actions";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import SearchValue from "./search-form.js";
import _ from 'lodash';

const CitiesIndex = () => {
  const cities = useSelector((state) => state.cities);

  function renderCities() {
    if (!_.isEmpty(cities)) {
      return (
        <tr>
          <td>{cities.name}</td>
          <td><Sparklines data={cities.stats.map((city => city.temperature))}>
            <SparklinesLine color="blue" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines></td>
          <td><Sparklines data={cities.stats.map((city => city.pressure))}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines></td>
          <td><Sparklines data={cities.stats.map((city => city.humidity))}>
            <SparklinesLine color="red" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines></td>
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
      <table className="table table-bordered col-md-10 offset-md-1">
        <thead>
          <tr>
            <th style={{ width: '200px' }}>City</th>
            <th style={{ width: '233px' }}>Temperature</th>
            <th style={{ width: '233px' }}>Pressure</th>
            <th style={{ width: '233px' }}>Humidity</th>
          </tr>
        </thead>
        <tbody>{renderCities()}</tbody>
      </table>
    </div>
  )
}


export default CitiesIndex;

