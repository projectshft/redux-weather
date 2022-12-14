import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { fetchCityWeather } from "../actions";


const SearchBar = () => {
  const weatherPosts = useSelector(state => state.weatherPosts)
  const dispatch = useDispatch();
  
  const [city, setCity] = useState("")
  
  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    const cityPresent = weatherPosts.filter(obj => e.target.value===obj.city);
    console.log(e.target.value)
    if(weatherPosts.length === 0){
      dispatch(fetchCityWeather(e.target.value));
    }
    else if(cityPresent.length === 0 ){
      dispatch(fetchCityWeather(e.target.value));
    }else{
      return alert("City already listed!");
    }
    
  }

  return (
    <div className="input-group">
      <input value={city} onChange={(e)=>setCity(e.target.value)} type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
      <button value={city} type="button" className="btn btn-outline-primary" onClick={handleSearchButtonClick}>search</button>
    </div>
  )
}

export default SearchBar