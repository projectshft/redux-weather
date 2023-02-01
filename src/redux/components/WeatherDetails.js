import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

function WeatherDetails() {
  const state = useSelector(state => state);
  return (
    <tbody>
      {Object.entries(state.data.searches).map(([city, details]) => (
        <tr key={city}>
          <td>
            <br/>
            <b>{city}</b>
          </td>
          <td>
            {<Sparklines data={details.temp}>
              <SparklinesLine color="#FF2233" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>}
            {Math.round(Object.values(details.temp).reduce((sum, value) => sum + value, 0) / Object.values(details.temp).length)} °F
          </td>
          <td>
            {<Sparklines data={details.pressure}>
              <SparklinesLine color="#CD7733" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>}
            {Math.round(Object.values(details.pressure).reduce((sum, value) => sum + value, 0) / Object.values(details.pressure).length)} hPa
          </td>
          <td>
            {<Sparklines data={details.humidity}>
              <SparklinesLine color="#44FF88" />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>}
            {Math.round(Object.values(details.humidity).reduce((sum, value) => sum + value, 0) / Object.values(details.humidity).length)} %
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default WeatherDetails;