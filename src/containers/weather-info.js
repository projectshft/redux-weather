import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// formats the weather data from each payload into Sparklines charts
const WeatherInfo = () => {
  const weather = useSelector((state) => state.weather)

  const renderInfo = () => {
    return weather.map((weather, id) => {

      // finds the average of a given array 
      const findAverage = (array) => {
        const total = array.reduce((acc, c) => acc + c, 0) / array.length;
        return Math.round(total);
      };
      
      const avgTemp = findAverage(weather.temp);
      const avgPressure = findAverage(weather.pressure);
      const avgHumidity = findAverage(weather.humidity);

      return (
        <tr key={id}>
          <th>
            <div><h4>{weather.city}</h4></div>
            <div><h6>Currently: {weather.currentTemp}&#176;F, {weather.currentConditions}</h6></div>
            </th>
          <td><Sparklines data={weather.temp} height={120}>
            <SparklinesLine color="#FF7F50" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>{avgTemp}&#176;F</td>
          <td><Sparklines data={weather.pressure} height={120}>
            <SparklinesLine color="#228B22" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>{avgPressure} hPa</td>
          <td><Sparklines data={weather.humidity} height={120}>
            <SparklinesLine color="#2F4F4F" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>{avgHumidity}%</td>
        </tr>
      )
    })
  }

  return (
    renderInfo()
  )
}

export default WeatherInfo;