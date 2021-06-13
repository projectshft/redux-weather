import { fetchWeather, getLocation } from "./actions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function selectCityFoundDisplay(state) {
  return state.cityWeather.cityFoundDisplay;
}

function App(props) {
  const [currentCity, setCity] = useState("");
  const cityFoundDisplay = useSelector(selectCityFoundDisplay);

  const dispatch = useDispatch();

  const handleSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(currentCity));
    setCity("");
  };

  const findByGeolocation = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;

        dispatch(getLocation(latitude, longitude));
      });
    } else {
      alert("Sorry, your location was not found.");
    }
  };

  return (
    <div>
      <h1 className="text-muted display-1">Weather Forecast</h1>
      <form onSubmit={(e) => handleSearchTermSubmit(e)}>
        <div className="input row g-3 align-items-center">
          <div className="form-group col-7">
            <input
              className="form-control"
              value={currentCity}
              placeholder="Get a five-day forecast in your favorite cities"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            ></input>
          </div>
          <button className="btn btn-primary col-auto" type="submit">
            Submit
          </button>
          <button
            className="btn btn-primary col-auto"
            type="submit"
            onClick={(e) => findByGeolocation(e)}
          >
            Find Me
          </button>
        </div>
        <div className="row justify-content-center">
          <div className="cityFound col-8 text-danger" style={cityFoundDisplay}>
            City Not Found
          </div>
        </div>
      </form>
      <div className="container">{props.children}</div>
    </div>
  );
}

export default App;
