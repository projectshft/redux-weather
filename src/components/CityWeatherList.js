import { useSelector } from 'react-redux';
import CityWeatherListItem from './CityWeatherListItem';

const CityWeatherList = () => {
  const cities = useSelector(({cities}) => cities)
  const renderWeatherList = (citiesData) => {
    return citiesData.map((city, index) => <CityWeatherListItem key={index} city={city}/>)
  }
  
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <table className="table table-striped table-hover text-center">
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temperature (F)</th>
              <th scope="col">Pressure (hPa)</th>
              <th scope="col">Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {renderWeatherList(cities)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CityWeatherList;