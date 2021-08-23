const WeatherForecast = () => {
  return (
    <div className="forecast-container">
      <div className="row">
        <div className="col-md-3">
          <h3>City</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h3>Temperature</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h3>Pressure</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h3>Humidity</h3>
        </div>
      </div>
    </div>
  )
}

export default WeatherForecast