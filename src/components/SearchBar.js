import "../App.css";
import { fetchWeather, checkLocal } from "../actions";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    dispatch(fetchWeather(cityName));
  };

  const handleLocalSubmit = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        dispatch(checkLocal(lat, lon));
      },
      function () {
        alert("Can't not locate your position");
      }
    );
    // only let the check-local button work once
    buttonRef.current.disabled = true;
  };

  return (
    <div className="input-group mb-8">
      <input
        type="text"
        className="form-control"
        ref={inputRef}
        placeholder="Give a 5-day forcast in your favorate cities"
        onChange={(e) => setCityName(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary btn-check-local"
          type="submit"
          ref={buttonRef}
          onClick={handleLocalSubmit}
        >
          CheckLocal
        </button>
      </div>
      <div className="input-group-append">
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
