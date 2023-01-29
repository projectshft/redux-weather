import { useState } from "react";
import { useDispatch } from "react-redux";
import  { fetchWeather } from "../actions";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  // function to capture input value in state
  const handleInputChange = (e) => {
    setCity(e.target.value);
  }

  // function to submit form after action creator is dispatched
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
    setCity('');
  }

  return (
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
        <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Get a 5-day forecast in your favorite cities"
              value={city}
              onChange={handleInputChange}
              required
              />
            <button 
              className="btn btn-outline-primary" 
              type="submit"
            >Submit</button>
          </div>
        </form>
    </div>
  );
}
 
export default SearchBar;