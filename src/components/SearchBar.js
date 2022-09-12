import React from 'react'
import "../App.css";


import { fetchWeather } from "../actions";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    inputRef.current.value = "";
    dispatch(fetchWeather(city));
  };

  return (
    <div className="input-group mb-8">
      <input
        type="text"
        className="form-control"
        ref={inputRef}
        placeholder="Enter a City"
        onChange={(event) => setCity(event.target.value)}
      />
      
      <div className="input-group-append">
        
        <br />

        <button
          className="btn btn-outline-secondary"
          type="submit"
          onClick={handleSearchSubmit}
        >
          Submit
        </button>

      </div>
    </div>
  );
};

export default SearchBar;