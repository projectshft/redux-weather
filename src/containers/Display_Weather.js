import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines"
import { useSelector } from "react-redux"


const DisplayWeather = () => {
  const cityWeather = useSelector(state => state.weather);

  const renderCity = () => {
    return cityWeather.map((c, index) => {
      return (
        <tr key={index}>
          <td className="align-middle">{c.city}</td>
          <td className="align-middle">
            <Sparklines data={c.temperature} width={80} height={50} margin={5}>
              <SparklinesLine/>
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            {Math.round(c.temperature.reduce((acc, cur) => acc + cur, 0)/c.temperature.length)} °F
          </td>
          <td className="align-middle">
            <Sparklines data={c.pressure} width={80} height={50} margin={5}>
              <SparklinesLine />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            {Math.round(c.pressure.reduce((acc, cur) => acc + cur, 0)/c.pressure.length)} hPa
          </td>
          <td className="align-middle">
            <Sparklines data={c.humidity} width={80} height={50} margin={5}>
              <SparklinesLine />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            {Math.round(c.humidity.reduce((acc, cur) => acc + cur, 0)/c.humidity.length)} %
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempreture(°F)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>{renderCity()}</tbody>
      </table>
    </div>
  );
};

export default DisplayWeather;