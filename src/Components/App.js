import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../Redux/Slices/weatherSlices";
import CityData from "./CityData";

const App = () => {
// Setting state to manage user inputs and form validation
  const [city, setCity] = useState('');
  const [isValid, setIsvalid] = useState(true);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setCity(e.target.value);
    console.log(e.target.value)
  };
  // Event handler for submission, dispatching action to fetch data and form validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      dispatch(fetchWeatherData(city));
      setCity('')
      setIsvalid(true)
    } else {
      setIsvalid(false)
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <div className="page-header">
            <h1>Redux Weather App</h1>
          </div>
          <form className="search-form" onSubmit={(handleSubmit)}>
            <div className="form-group row">
              <div className="col-md-9">
                <input
                  type="text"
                  id="search-query"
                  className={`form-control ${isValid ? '' : 'is-invalid'}`}
                  placeholder="Search for a five-day forecast"
                  value={city}
                  onChange={handleInputChange}
                />
                {!isValid && <div className="invalid-feedback">This field is required.</div>}
              </div>
              <div className="col-md-3">
                <button type="submit" className="btn btn-primary search">
                  Search
                </button>
              </div>
            </div>
          </form>
          <hr />
          <CityData />
        </div>
      </div>
    </div>



  )
};

export default App;