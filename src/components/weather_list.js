import { useSelector } from "react-redux"
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const WeatherList = () => {
  const city = useSelector((state) => state)

  const dataAverage = function (data) {
    const total = data.reduce((acc, c) => acc + c, 0);
    return Math.round(total / data.length);
  }

  function renderCity() {
    if () {
      return 
    }
    return (
      <tr>
        <td>{city.weather.city}</td>
        <td>
          <Sparklines data={city.weather.temp}>
            <SparklinesLine />
            <SparklinesReferenceLine type="avg" />
          </Sparklines> 
          {dataAverage(city.weather.temp)}
        </td>
        <td>
          <Sparklines data={city.weather.pressure}>
            <SparklinesLine />
            <SparklinesReferenceLine type="avg" />
          </Sparklines> 
          {dataAverage(city.weather.pressure)}
        </td>
        <td>
          <Sparklines data={city.weather.humidity}>
            <SparklinesLine />
            <SparklinesReferenceLine type="avg" />
          </Sparklines> 
          {dataAverage(city.weather.humidity)}
        </td>
      </tr>
    )
  }
  return (
    <div className='row'>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{renderCity()}</tbody>
      </table>
    </div>
    
  )
}

export default WeatherList