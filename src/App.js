import { fetchWeather } from "./actions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./App.css";

function App(props) {
  const [currentCity, setCity] = useState("");

  const dispatch = useDispatch();

  const handleSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(currentCity));
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <form onSubmit={(e) => handleSearchTermSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Get a five-day forecast in your favorite cities"
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="container">{props.children}</div>
    </div>
  );
}

export default App;
