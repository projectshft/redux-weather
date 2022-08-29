import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getSearchResults } from "../actions";


const SearchBar = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const handleFormSubmit = (search) => {
    dispatch(getSearchResults(search.query));
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <input 
          {...register("query")}
          className="form-control"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
};

export default SearchBar;
