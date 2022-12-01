import React, { useState } from 'react';

const SearchBar = () => {

const [search, setSearch] = useState('');

const handleChange = (event) => {
  setSearch(event.target.value);
}

const handleSearch = () => {
  console.log('clicked')
}


    return (
<div className="input-group mb-3 w-50 container-fluid search">
  <input type="text" className="form-control search" placeholder="Enter a city" onChange={handleChange} value={search} />
  <div className="input-group-append search">
    <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
  </div>
</div>
    )
}

export default SearchBar;