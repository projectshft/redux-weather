import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash"
import { fetchCityWeather } from "../actions";


const SearchBar = () => {
  const weatherPosts = useSelector(state => state.weatherPosts)
  const dispatch = useDispatch();
  
  const [cityState, setCity] = useState("")
  
  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    const filteredCity = _.filter(weatherPosts, (obj) => e.target.value.toUpperCase() === obj.city)
    if(weatherPosts.length === 0){
      dispatch(fetchCityWeather(e.target.value));
    }
    else if(filteredCity.length === 0){
      dispatch(fetchCityWeather(e.target.value));
    }else if(filteredCity.length !== 0){
      return alert("City already listed!");
    }else{
      return alert("Enter a valid city...")
    }
    
  }

  return (
    <div className="input-group">
      <input value={cityState} onChange={(e)=>setCity(e.target.value)} type="search" className="form-control rounded" placeholder="Enter a City" aria-label="Search" aria-describedby="search-addon" />
      <button value={cityState} type="button" className="btn btn-outline-primary" onClick={handleSearchButtonClick}>search</button>
    </div>
  )
}

export default SearchBar