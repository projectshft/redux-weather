import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { addCity } from '../actions';

const schema = yup.object({
  city: yup
    .string()
    .transform(value => value.replace(/[^a-zA-Z0-9 ]/g, '').replace(/  +/g, ' '))
    .required('Please enter a city name'),
}).required();

const Search = () => {
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const defaultCity = localStorage.default_city;
    defaultCity && dispatch(addCity({city: defaultCity, isDefault: true}));
  }, []);

  const onSubmit = (data) => {
    dispatch(addCity(data));
    reset();
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row gx-2 mb-2">
      <div className='col'>
        <input
          {...register("city", {required: true})}
          className='form-control' 
          placeholder="Get a five-day forecast in your favorite cities"
        ></input>
        <p className="text-danger mt-1">{errors.city?.message}</p>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary px-4">Search</button>
      </div>
    </form>
  )
}

export default Search;