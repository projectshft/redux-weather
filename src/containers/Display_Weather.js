import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines"
import { useSelector } from "react-redux"


const DisplayWeather = () => {
  const cityWeather = useSelector(state => state.weather);

  const renderCity = () => {
    return cityWeather.map((c, index) => {
      return (
        <tr scope="row" key={index}>
          <td className="align-middle"><strong>{c.city}</strong></td>
          <td className="align-middle">
            <Sparklines data={c.temperature} width={80} height={50} margin={5}>
              <SparklinesLine style={{ stroke: '#D11313', strokeWidth: ".5", fill: '#95A8B0', fillOpacity: '.25'}}/>
              <SparklinesReferenceLine type="avg" style= {{stroke: 'red', strokeWidth: ".5", strokeDasharray: '4, 2'}}/>
            </Sparklines>
            {Math.round(c.temperature.reduce((acc, cur) => acc + cur, 0)/c.temperature.length)} °F
          </td>
          <td className="align-middle">
            <Sparklines data={c.pressure} width={80} height={50} margin={5}>
              <SparklinesLine style={{ stroke: '#3BF1F1', strokeWidth: ".5", fill: '#95A8B0', fillOpacity: '.25'}} />
              <SparklinesReferenceLine type="avg" style= {{stroke: 'red', strokeWidth: ".5", strokeDasharray: '4, 2'}}/>
            </Sparklines>
            {Math.round(c.pressure.reduce((acc, cur) => acc + cur, 0)/c.pressure.length)} hPa
          </td>
          <td className="align-middle">
            <Sparklines data={c.humidity} width={80} height={50} margin={5}>
              <SparklinesLine style={{ stroke: '#23EA87', strokeWidth: ".5", fill: '#95A8B0', fillOpacity: '.25'}} />
              <SparklinesReferenceLine type="avg" style= {{stroke: 'red', strokeWidth: ".5", strokeDasharray: '4, 2'}}/>
            </Sparklines>
            {Math.round(c.humidity.reduce((acc, cur) => acc + cur, 0)/c.humidity.length)} %
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature(°F)</th>
            <th scope="col">Pressure(hPa)</th>
            <th scope="col">Humidity(%)</th>
          </tr>
        </thead>
        <tbody>{renderCity()}</tbody>
      </table>
    </div>
  );
};

export default DisplayWeather;