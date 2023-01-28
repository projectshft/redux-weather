import { useSelector } from "react-redux";
import { Sparklines } from "react-sparklines";

const WeatherTableData = () => {


  return (
  <>
    <tr className="text-center">
      <td>City</td>
        <td>Temperature (K)</td>
        <td>Pressure (hPa)</td>
        <td>Humidity (%)</td>
    </tr>
  </>
  )
}

export default WeatherTableData