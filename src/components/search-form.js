import React, { useState } from 'react';
import { fetchCities } from '../actions';
import { useDispatch } from "react-redux";

const SearchValue = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="col text-center">
      <div className="text-xs search col-sm-12">
        <input
          value={value}
          onChange={event => {
            setValue(event.target.value)
          }}
          type="text center" id="search-query" className="text-center input-group input-group-sm mb-3" placeholder="Type in city name"></input>
        <br />
        <button
          className="btn btn-outline-info"
          onClick={() => {
            dispatch(fetchCities(value))
          }}>Search</button>
      </div>
    </div>
  )
}

export default SearchValue;