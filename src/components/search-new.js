import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchForecast } from "../actions";


const SearchNew = () => {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    dispatch(fetchForecast(city));
  }


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className='input-group' id="search-bar">
          <input 
            type='text' className='form-control rounded' value={city} placeholder="Get a 5-day forecast for your favorite cities" onChange={(e) => setCity(e.target.value)}>
          </input>
        <button type='submit' className='btn btn-outline-primary'>Search</button>
        </div>
      </form>
      <br/><br/> 
    </div>
  );

}

export default SearchNew;
      