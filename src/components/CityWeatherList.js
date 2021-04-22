import CityWeatherListItem from './CityWeatherListItem';

const CityWeatherList = () => {
  const renderWeatherList = () => {
    return <CityWeatherListItem />
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
            {renderWeatherList()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CityWeatherList;