import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../actions";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const handleSearchClick = () => {
    dispatch(fetchWeather(searchTerm));
    setSearchTerm('');
  }

  return (
    <div className="row">
      <form className="search-form">
        <div className="col-md-10">
          <input type="text" className="form-control" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}}></input>
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-primary search" onClick={handleSearchClick}>Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar;