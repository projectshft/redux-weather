/* eslint-disable no-unused-vars */
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { fetchWeather } from '../actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = (data) => {
    dispatch(fetchWeather(data.searchBar));
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        aria-describedby="button-addon2"
        aria-label="searchBar"
        placeholder="Put here your city"
        {...register('searchBar', {
          required: true,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.searchBar?.type === 'required' && (
        <p>What should I search for ?</p>
      )}
      {errors?.searchBar?.type === 'pattern' && (
        <p>City name usually consists of alphabetical characters only.</p>
      )}
      <button
        onClick={handleSubmit(handleClick)}
        type="button"
        className="btn btn-outline-secondary"
        id="button-addon2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
