import React, { useState } from 'react';
import { getWeather } from '../actions/get-weather';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const SearchBar = () => {

//sets the state of the search with the text in the input field
const [search, setSearch] = useState('');

const handleChange = (event) => {
  setSearch(event.target.value);
}


const handleSearch = (event) => {
  event.preventDefault();
  console.log(search); 
  getWeather(search);
  setSearch('');

}


//displays the search bar with search button 
return (
<div className="input-group mb-3 w-50 container-fluid search">
  <input id="input" type="text" className="form-control search" placeholder="Enter a city" onChange={handleChange} value={search} />
  <div className="input-group-append search">
    <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
  </div>
</div>
    )
}

export default SearchBar;