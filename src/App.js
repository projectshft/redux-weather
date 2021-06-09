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
      <h1 className="text-muted display-1">Weather Forecast</h1>
      <form onSubmit={(e) => handleSearchTermSubmit(e)}>
        <div className="input row g-3 align-items-center">
          <div className="form-group col-7">
            <input
              className="form-control"
              placeholder="Get a five-day forecast in your favorite cities"
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-primary col-auto" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="container">{props.children}</div>
    </div>
  );
}

export default App;
