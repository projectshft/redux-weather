import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { fetchForecast } from "../actions";

// not sure if necessary, but using yup to add form validation
const postSchema = Yup.object().shape({
  city: Yup.string().required()
});

const SearchBar = () => {

  // using react-hook-form for form validation
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(postSchema)
  });

  const dispatch = useDispatch();

  //dispatches action when form is submitted
  const handleFormSubmit = (query) => {
    dispatch(
      fetchForecast(query)
    )
    
    // clears value from input once submitted
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='container row'>
      <div className='form-group'>
        <label className='form-label'>Get a 5-day forecast</label>
      </div>
      <div className='mb-3'>
        <div className='input-group'>
          <input className='form-control' type='text' placeholder='Please enter a city and click Search' name='city' ref={register}></input>
          <button className='btn btn-primary' type='submit'>Search</button>  
        </div>
        {errors.city?.message}
      </div>
      <hr />
    </form>
  )
}

export default SearchBar;