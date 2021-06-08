import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../actions";
import _ from "lodash";

const CityWeatherIndex = () => {
  const cities = useSelector((state) => state.cities);
  console.log("cities", cities);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const cityData = props.match.params;
  //   dispatch(fetchWeather(cityData));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [fetchWeather]);

  // console.log(weather);

  function renderWeatherData() {
    if (!_.isEmpty(cities)) {
      return cities.order.map((cityId) => (
        <tr key={cityId}>
          <td>City Name</td>
          <td>Image / Avg</td>
          <td>Image / Avg</td>
          <td>Image / Avg</td>
        </tr>
      ));
    }
    return (
      <tr>
        <td>No weather to show</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (F)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{renderWeatherData()}</tbody>
      </table>
    </div>
  );
};

export default CityWeatherIndex;
