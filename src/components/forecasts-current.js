import { useState } from "react";
import { fetchForecast } from "../actions";
import { useDispatch } from "react-redux";

const ForecastCurrent = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const handleCity = (e) => {
    e.preventDefault()
    setCity(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchForecast(city))
  }

  return (
    <div className="row">
      <form onSubmit={handleFormSubmit} className="col-md-9 col-md-offset-3">
        <div id="submit-form" className="input-group">
          <input 
            id="search-query" 
            type="text"
            className="form-control" 
            onChange={handleCity}
            placeholder="Get a five-day forecast in your favorite cities"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </div>
      </form>
    </div>
  )
};

export default ForecastCurrent;