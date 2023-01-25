import 'bootstrap/dist/css/bootstrap.css';


const FiveDayForecast = () => {
  return (
    weather.map(() => (
      <tr className="city-weather-data" key={city}>
        <td>city name</td>
        <td>temp graph</td>
        <td>pressure graph</td>
        <td>humidity graph</td>
      </tr>
    ))
  )
}

export default FiveDayForecast