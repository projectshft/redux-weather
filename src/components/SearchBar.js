import React from "react";
import { fetchWeather } from "../actions";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "./SearchBar.css";

//  //Supposedly the longest character length of a city is ~30 characters, which is why we set this to 32.
const searchSchema = yup.object().shape({
  search: yup.string().required().min(5).max(32),
});

function SearchBar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(searchSchema),
  });

  const dispatch = useDispatch();

  const handleSearchSubmit = (data, e) => {
    console.log(data.search);
    dispatch(fetchWeather(data.search));
    e.target.reset();
  };

  const handleGeoClick = () => {
    console.log("clicked");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        axios
          .get(
            `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=5de1b63f3ad7c2600e3f33f10036d1ec`
          )
          .then(function (response) {
            dispatch(fetchWeather(response.data[0].name));
          })
          .catch(function (err) {
            console.log(err);
          });
      });
    }
  };

  return (
    <div className="container search-bar-container">
      <form onSubmit={handleSubmit(handleSearchSubmit)}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="search"
            {...register("search")}
            placeholder="Search a city"
            aria-label="city search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary search-btn"
              type="submit"
            >
              Search
            </button>
            <button
              className="btn btn-outline-success btn-geo"
              type="button"
              onClick={handleGeoClick}
            >
              Find Me
            </button>
          </div>
        </div>
      </form>
      {errors.search?.message}
    </div>
  );
}

export default SearchBar;
