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
              <SparklinesReferenceLine type="median" />
            </Sparklines>}
          </td>
          <td>
            {<Sparklines data={details.pressure}>
              <SparklinesLine color="#CD7733" />
              <SparklinesReferenceLine type="median" />
            </Sparklines>}
          </td>
          <td>
            {<Sparklines data={details.humidity}>
              <SparklinesLine color="#44FF88" />
              <SparklinesReferenceLine type="median" />
            </Sparklines>}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default WeatherDetails;