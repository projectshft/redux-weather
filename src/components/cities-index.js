import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCities } from "../actions";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import SearchValue from "./search-form.js";

const CitiesIndex = () => {

  const cities = useSelector((state) => state.cities);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCities());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [fetchCities]);

  function renderCities() {
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
  };

  return (
    <div className="col text-center">
      <SearchValue fetchCities={fetchCities} />
      <hr />
      <table className="table table-bordered col-md-10 offset-md-1">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{renderCities()}</tbody>
      </table>
    </div>
  )
}


export default CitiesIndex;

