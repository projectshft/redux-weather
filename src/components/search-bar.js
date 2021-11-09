import { useDispatch } from 'react-redux';
import { createNewRow } from '../actions';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const citySchema = Yup.object().shape({
  city: Yup.string().required()
});

const SearchBar = () => {

  const dispatch = useDispatch();

  const handleSearch = (city) => {
    dispatch(createNewRow(city));
    reset();
  }
  
  const { register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(citySchema)
  });
  
  return (
    <>
      <br />
      <form  className='col-6 offset-3' onSubmit={handleSubmit(handleSearch)} >
        <div className='input-group'>  
          <input
            className='form-control' name='city' placeholder="Enter a city for a 5-day forecast"
            {...register('city', {required:"required"})}></input>
          <span className='input-group-btn'>
            <button className="btn btn-primary" type="submit">Search</button>
          </span>
        </div>
        {errors.city?.message}
      </form>
    </>
  )
}

export default SearchBar;