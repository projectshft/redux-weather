// import _ from 'lodash';
import { useSelector } from "react-redux";
import {
  Sparklines, SparklinesLine, SparklinesReferenceLine
} from "react-sparklines";

const Weather = () => {
  const cities = useSelector((state) => state.cities)

  const renderCities = () => {
    return cities.order.map((city) => {
      const tempData = city.temps;
      // const pressureData = city.pressure;
      // const humidityData = city.humidity;
      return (
        <tr key={city.cityName}>
          <th scope="row">{city.cityName}</th>
          <td>
            <Sparklines data={tempData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <h2>
              {city.averageTemp}°
            </h2>
          </td>
          {/* <td>
            <Sparklines data={pressureData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines></td>
          <td>
          <Sparklines data={humidityData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
          </td> */}
        </tr>
      );
    });
  };

  return (
    <div className="container text-center">
      <hr/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (F)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {renderCities()}
        </tbody>
      </table>
    </div>
  );
};

export default Weather;
