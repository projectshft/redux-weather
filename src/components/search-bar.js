import { useDispatch } from 'react-redux';
import { createChart } from '../actions';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const citySchema = Yup.object().shape({
  city: Yup.string().required()
});

const SearchBar = () => {

  const dispatch = useDispatch();

  const handleSearch = (city) => {
    dispatch(createChart(city));
  }
  
  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(citySchema)
  });
  
  return (
    <form  className='col-6 offset-3' onSubmit={handleSubmit(handleSearch)} >
      <div className='input-group'>  
        <input
          className='form-control' name='city'
          {...register('city', {required:"required"})}></input>
        <span className='input-group-btn'>
          <button className="btn btn-primary" type="submit">Search</button>
        </span>
      </div>
      {errors.city?.message}
    </form>
  )
}

export default SearchBar;