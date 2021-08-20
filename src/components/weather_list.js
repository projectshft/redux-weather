import ListBody from "./list_body";

const WeatherList = () => {
  
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
        <ListBody />
      </table>
    </div>
    
  )
}

export default WeatherList