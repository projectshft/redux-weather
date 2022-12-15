import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash"
import { fetchCityWeather } from "../actions";

//funciton component that renders the searchbar
const SearchBar = () => {
  //useSelector function hook allows component to extract data from Redux store state
  const weatherPosts = useSelector(state => state.weatherPosts)

  //usedispatch function hook returns dispatch function from redux store. Used to dispatch actions.
  const dispatch = useDispatch();

  const [cityState, setCity] = useState("")

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    setCity('');
    //variable which searches for input value inside of an array of objects. Returns in an arraay matched objects that contain value to component state.
    const filteredCity = _.filter(weatherPosts, (obj) => cityState.toUpperCase() === obj.city)
    //checking for input matches to redux state
     weatherPosts.length === 0 ? dispatch(fetchCityWeather(cityState))
    :filteredCity.length === 0 ? dispatch(fetchCityWeather(cityState))
    :alert("City already listed!");
  }

  return (
    <div className="input-group">
      <input value={cityState} onChange={(e)=>setCity(e.target.value)} type="search" className="form-control rounded" placeholder="Enter a City" aria-label="Search" aria-describedby="search-addon" />
      <button value={cityState} type="button" className="btn btn-outline-primary" onClick={handleSearchButtonClick}>search</button>
    </div>
  )
}

export default SearchBar