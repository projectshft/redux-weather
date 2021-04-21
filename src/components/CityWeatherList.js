const CityWeatherList = () => {
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Temperature (F)</th>
              <th scope="col">Pressure (hPa)</th>
              <th scope="col">Humidity (%)</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default CityWeatherList;