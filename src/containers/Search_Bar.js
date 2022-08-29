import { useDispatch } from 'react-redux';
//import { createPost } from '../actions';
import { useForm } from "react-hook-form";
import { fetchWeather } from '../actions';



const SearchBar =()=> {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

      const handleFormSubmit = (data) => {
        dispatch(
            fetchWeather(data.city))
          console.log(data.city)
      }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="City Name" name="city" {...register('city')}/>
                <div className="input-group-append">
                    <button className="btn btn-primary" id="basic-addon2">search
                    </button>
            </div>
            </div>
            </form>
        </div>
    )
}

export default SearchBar;
