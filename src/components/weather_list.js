import { useSelector } from "react-redux"
import DetailCity from "./detail_city";

const WeatherList = () => {
  const city = useSelector((state) => state.weather)

  const renderDetailCity = function (data) {
    return data.map((city) => <DetailCity key={city.id} city={city} />)
  }

  function renderCity() {
    console.log(city)
    if (city.length === 0) {
      return (
        <tr>
          <td>Search a city!</td>
          <td>Search a city!</td>
          <td>Search a city!</td>
          <td>Search a city!</td>
        </tr>
      )
    }
    {renderDetailCity(city)}
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