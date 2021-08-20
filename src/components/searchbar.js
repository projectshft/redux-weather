import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../actions";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const handleSearchClick = () => {
    if (!searchTerm) {
      alert('Please enter a city!')
      return
    }
    dispatch(fetchWeather(searchTerm));
    setSearchTerm('');
  }

  const checkIfEnter = function (event) {
    if (event.keyCode === 13) {
      handleSearchClick();
    }
  }

  return (
    <div className="row">
      <div className="input-group">
        <div className="col-md-10">
          <input type="text" className="form-control" placeholder="Enter City Here" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} onKeyUp={checkIfEnter}></input>
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-primary search" onClick={handleSearchClick}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;