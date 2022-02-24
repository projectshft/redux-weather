import React from "react";
import { fetchWeather } from "../actions";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

  return (
    <div className="container search-bar-container">
      <form onSubmit={handleSubmit(handleSearchSubmit)}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="search"
            // value={input}
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
          </div>
        </div>
      </form>
      {errors.search?.message}
    </div>
  );
}

export default SearchBar;
