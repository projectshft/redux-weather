import { useSelector } from "react-redux"

const WeatherList = () => {
  const city = useSelector((state) => state)

  const dataAverage = function (data) {
    const total = data.reduce((acc, c) => acc + c, 0);
    return Math.round(total / data.length);
  }

  function renderCity() {
    console.log(city)
    return (
      <tr>
        <td>{city.weather.city}</td>
        <td>{dataAverage(city.weather.temp)}</td>
        <td>{dataAverage(city.weather.pressure)}</td>
        <td>{dataAverage(city.weather.humidity)}</td>
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