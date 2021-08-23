import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchWeather } from "../actions";

const SearchBar = () => {
  const [searchLocation, setSearchLocation] = useState('')
  const dispatch = useDispatch();

  const handleSearchButton = () => {
    dispatch(fetchWeather(searchLocation));
    
    setSearchLocation();
  }
    <div className="row">
      <div className="col-md-10">
        <form className="search-form">
          <input 
          type="text" 
          className="form-control" 
          placeholder="Enter City Name"
          value={searchLocation}
          onChange={(e) => {setSearchLocation(e.target.value)}}></input>
        </form>
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-primary search" onClick={handleSearchButton}>Search</button>
      </div>
    </div>
  
};

export default SearchBar;