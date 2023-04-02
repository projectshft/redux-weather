import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchForecast } from "../actions";

// const API_KEY = 'ed82dafb0490d14952ef1d1117c72baf';

const ForecastsNew = () => {
  //hook used to grab city from the user input
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const handleCity = (e) => {
    e.preventDefault();
    setCity(e.target.value)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchForecast(city))
  }

  return (
    <div>
    <form onSubmit={handleFormSubmit}>
      <div id="submit-form" className="form-group">
        <input className="form-control" id="search-query" onChange={handleCity} placeholder="Get a five-day forecast in your favorite cities" />
        <button className="btn btn-secondary">Submit</button>
      </div>
    </form>
    <hr />
    </div>
  )
}

export default ForecastsNew;