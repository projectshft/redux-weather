import React from "react";
import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";


const CityData = () => {
  const searches = useSelector((state) => state.weather.searches)

  return (
    <div className="container-fluid">
      {searches.map((search, index) => (
        <div key={index} className="weather-list">
          {renderCityData(search)}
        </div>
      ))}
    </div>
  );
};

const renderCityData = (search) => {
  if (!search) {
    return (
      <div className="row">
        <div className="col-md text-center">
          <h3>No Data Found</h3>
        </div>
      </div>
    );
  }

  const city = search.city.name || '';
  const temperature = search.temperature || [];
  const pressure = search?.pressure || [];
  const humidity = search?.humidity || [];
  const avgTemp = search?.avgTemp || [];
  const avgPressure = search?.avgPressure || [];
  const avgHumidity = search?.avgHumidity || [];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 offset-md-1 text-center">
          <div className="page-header">
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h5>City</h5>
              </div>
              <div className="col-md-3">
                <h5>Temperature (F)</h5>
              </div>
              <div className="col-md-3">
                <h5>Pressure (hPa)</h5>
              </div>
              <div className="col-md-3">
                <h5>Humidity (%)</h5>
              </div>
            </div>
          </div>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <h3>{city}</h3>
            </div>
            <div className="col-md-3">
              <Sparklines data={temperature}>
                <SparklinesLine color="blue" />
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              <h6>{avgTemp}&deg;F</h6>
            </div>
            <div className="col-md-3">
              <Sparklines data={pressure}>
                <SparklinesLine color="purple" />
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              <h6>{avgPressure}hPa</h6>
            </div>
            <div className="col-md-3">
              <Sparklines data={humidity}>
                <SparklinesLine color="red" />
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              <h6>{avgHumidity}%</h6>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default CityData;