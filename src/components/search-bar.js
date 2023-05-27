import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const postSchema = Yup.object().shape({
  city: Yup.string().required()
});

const SearchBar = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(postSchema)
  });

  const handleFormSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='container row'>
      <div className='form-group'>
        <label className='form-label'>Get a 5-day forecast</label>
      </div>
      <div className='mb-3'>
        <div className='input-group'>
          <input className='form-control' type='text' placeholder='Please enter a city' name='city' ref={register}></input>
          <button className='btn btn-primary' type='submit'>Search</button>  
        </div>
        {errors.city?.message}
      </div>
      <hr />
    </form>
  )
}

export default SearchBar;