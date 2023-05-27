import { useForm } from "react-hook-form";

const SearchBar = () => {
  const { register, handleSubmit, errors } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='container row'>
      <div className='form-group'>
        <label className='form-label'>Get a 5-day forecast</label>
      </div>
      <div className='input-group mb-3'>
        <input className='form-control' type='text' placeholder='Please enter a city' name='city' ref={register}></input>
        <button className='btn btn-primary' type='submit'>Search</button>
      </div>
      <hr />
    </form>
  )
}

export default SearchBar;