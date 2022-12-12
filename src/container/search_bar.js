import React, { useState } from "react"
import { /* useSelector, */ useDispatch } from "react-redux";

import { fetchCityWeather } from "../actions";


const SearchBar = () => {
  //const weatherPosts = useSelector(state => state.weatherPosts);
  const dispatch = useDispatch();
  
  const [city, setCity] = useState("")
  
  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    
    dispatch(fetchCityWeather(e.target.value));
    
  }

  return (
    <div className="input-group">
      <input value={city} onChange={(e)=>setCity(e.target.value)} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
      <button value={city} type="button" className="btn btn-outline-primary" onClick={handleSearchButtonClick}>search</button>
    </div>
  )
}

export default SearchBar