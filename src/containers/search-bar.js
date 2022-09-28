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
    <div className="input-group mb-4">
      <div className="bar" style={{ width: '90%', position: 'relative' }}>
        <input
          type="text"
          className="form-control"
          aria-describedby="button-addon2"
          aria-label="searchBar"
          placeholder="Put here your city"
          {...register('searchBar', {
            required: true,
          })}
        />
        {errors?.searchBar?.type === 'required' && (
          <div style={{ position: 'absolute' }}>
            <p>What should I search for ?</p>
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit(handleClick)}
        type="button"
        className="btn btn-outline-secondary"
        id="button-addon2"
        style={{ width: '10%' }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
